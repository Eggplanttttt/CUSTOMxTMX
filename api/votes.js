const BUILD_VOTE_ORDER = ["SCRAMBLER", "CAFE RACER", "BRAT", "TRACKER", "BOBBER"];
const VOTES_HASH_KEY = "tmx125:build_votes";

const json = (body, status = 200) => new Response(JSON.stringify(body), {
    status,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store"
    }
});

const getRedisConfig = () => {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN;

    if (!url || !token) {
        return null;
    }

    return {
        url: url.replace(/\/$/, ""),
        token
    };
};

const buildCommandUrl = (baseUrl, command, ...args) => (
    `${baseUrl}/${[command, ...args].map((value) => encodeURIComponent(String(value))).join("/")}`
);

const redisCommand = async (config, command, ...args) => {
    const response = await fetch(buildCommandUrl(config.url, command, ...args), {
        method: "POST",
        headers: {
            Authorization: `Bearer ${config.token}`
        }
    });

    if (!response.ok) {
        throw new Error(`Redis command failed: ${command}`);
    }

    const payload = await response.json();
    return payload.result;
};

const redisPipeline = async (config, commands) => {
    const response = await fetch(`${config.url}/pipeline`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${config.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            commands.map(([command, ...args]) => [command, ...args.map((value) => String(value))])
        )
    });

    if (!response.ok) {
        throw new Error("Redis pipeline failed");
    }

    const payload = await response.json();
    return payload.map((entry) => entry.result);
};

const getVisitorKey = (visitorId) => `tmx125:build_vote:visitor:${visitorId}`;

const normalizeVotes = (rawVotes) => BUILD_VOTE_ORDER.reduce((accumulator, buildId, index) => {
    accumulator[buildId] = Number(rawVotes?.[index] || 0);
    return accumulator;
}, {});

const getVoteSnapshot = async (config, visitorId) => {
    const [rawVotes, visitorVote] = await Promise.all([
        redisCommand(config, "HMGET", VOTES_HASH_KEY, ...BUILD_VOTE_ORDER),
        redisCommand(config, "GET", getVisitorKey(visitorId))
    ]);

    return {
        votes: normalizeVotes(rawVotes),
        visitorVote: BUILD_VOTE_ORDER.includes(visitorVote) ? visitorVote : ""
    };
};

const handler = async (request) => {
    const config = getRedisConfig();

    if (!config) {
        return json({
            error: "Missing Redis configuration. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in Vercel."
        }, 500);
    }

    const url = new URL(request.url);

    if (request.method === "GET") {
        const visitorId = url.searchParams.get("visitorId");
        if (!visitorId) {
            return json({ error: "Missing visitorId." }, 400);
        }

        try {
            return json(await getVoteSnapshot(config, visitorId));
        } catch (error) {
            return json({ error: "Unable to load votes." }, 500);
        }
    }

    if (request.method === "POST") {
        let body;

        try {
            body = await request.json();
        } catch (error) {
            return json({ error: "Invalid JSON body." }, 400);
        }

        const visitorId = body?.visitorId;
        const buildId = body?.buildId;

        if (!visitorId || !BUILD_VOTE_ORDER.includes(buildId)) {
            return json({ error: "Invalid visitorId or buildId." }, 400);
        }

        try {
            const previousVote = await redisCommand(config, "GET", getVisitorKey(visitorId));
            const commands = [];

            if (BUILD_VOTE_ORDER.includes(previousVote) && previousVote !== buildId) {
                commands.push(["HINCRBY", VOTES_HASH_KEY, previousVote, -1]);
            }

            if (previousVote !== buildId) {
                commands.push(["HINCRBY", VOTES_HASH_KEY, buildId, 1]);
                commands.push(["SET", getVisitorKey(visitorId), buildId]);
            }

            if (commands.length > 0) {
                await redisPipeline(config, commands);
            }

            return json(await getVoteSnapshot(config, visitorId));
        } catch (error) {
            return json({ error: "Unable to save vote." }, 500);
        }
    }

    return json({ error: "Method not allowed." }, 405);
};

export async function GET(request) {
    return handler(request);
}

export async function POST(request) {
    return handler(request);
}

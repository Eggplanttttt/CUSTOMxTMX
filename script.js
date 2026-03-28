const bikeImage = document.getElementById("bikeImage");
const colorName = document.getElementById("colorName");
const colorQuote = document.getElementById("colorQuote");
const quoteTitle = document.getElementById("quoteTitle");
const quoteText = document.getElementById("quoteText");
const bikePreview = document.getElementById("bikePreview");
const bikeCreditTag = document.getElementById("bikeCreditTag");
const eyebrow = document.querySelector(".eyebrow");
const customTypeTriggerLabel = document.querySelector(".custom-type-trigger-label");
const colorButtons = document.querySelectorAll(".color-option");
const featuresViewport = document.getElementById("featuresViewport");
const featuresPrev = document.getElementById("featuresPrev");
const featuresNext = document.getElementById("featuresNext");
const scrollCue = document.getElementById("scrollCue");
const scrollCueText = scrollCue?.querySelector(".scroll-cue-text");
const customTypeWrap = document.querySelector(".custom-type-wrap");
const customTypeTrigger = document.getElementById("customTypeTrigger");
const customTypeMenu = document.getElementById("customTypeMenu");
const customTypeHint = document.getElementById("customTypeHint");
const themeToggle = document.getElementById("themeToggle");
const themeToggleIcon = document.getElementById("themeToggleIcon");
const themeToggleText = document.getElementById("themeToggleText");
const customTypeItems = document.querySelectorAll(".custom-type-item");
const featureCards = document.querySelectorAll(".feature-card");
const featureTooltip = document.getElementById("featureTooltip");
const featureModalClose = document.getElementById("featureModalClose");
const featureTooltipTitle = document.getElementById("featureTooltipTitle");
const featureTooltipText = document.getElementById("featureTooltipText");
const scramblerPartsSection = document.getElementById("scramblerPartsSection");
const scramblerBikeSpotlight = document.querySelector(".scrambler-bike-spotlight");
const scramblerPartButtons = document.querySelectorAll(".scrambler-callout[data-part-id]");
const scramblerPartSpotlight = document.getElementById("scramblerPartSpotlight");
const scramblerPartSpotlightMedia = document.getElementById("scramblerPartSpotlightMedia");
const scramblerPartTitle = document.getElementById("scramblerPartTitle");
const scramblerPartDescription = document.getElementById("scramblerPartDescription");
const scramblerPartLink = document.getElementById("scramblerPartLink");
const scramblerPartClose = document.getElementById("scramblerPartClose");
const scramblerGuideTip = document.getElementById("scramblerGuideTip");
const scramblerGuideTipClose = document.getElementById("scramblerGuideTipClose");
const bratPartsSection = document.getElementById("bratPartsSection");
const bratBikeSpotlight = document.querySelector(".brat-bike-spotlight");
const bratPartButtons = document.querySelectorAll(".brat-callout[data-brat-part-id]");
const bratPartSpotlight = document.getElementById("bratPartSpotlight");
const bratPartSpotlightMedia = document.getElementById("bratPartSpotlightMedia");
const bratPartTitle = document.getElementById("bratPartTitle");
const bratPartDescription = document.getElementById("bratPartDescription");
const bratPartLink = document.getElementById("bratPartLink");
const bratPartClose = document.getElementById("bratPartClose");
const bratGuideTip = document.getElementById("bratGuideTip");
const bratGuideTipClose = document.getElementById("bratGuideTipClose");
const bratBikeImage = document.getElementById("bratBikeImage");
const cafePartsSection = document.getElementById("cafePartsSection");
const cafeBikeSpotlight = document.querySelector(".cafe-bike-spotlight");
const cafePartButtons = document.querySelectorAll(".cafe-callout[data-cafe-part-id]");
const cafePartSpotlight = document.getElementById("cafePartSpotlight");
const cafePartSpotlightMedia = document.getElementById("cafePartSpotlightMedia");
const cafePartTitle = document.getElementById("cafePartTitle");
const cafePartDescription = document.getElementById("cafePartDescription");
const cafePartLink = document.getElementById("cafePartLink");
const cafePartClose = document.getElementById("cafePartClose");
const cafeGuideTip = document.getElementById("cafeGuideTip");
const cafeGuideTipClose = document.getElementById("cafeGuideTipClose");
const cafeBikeImage = document.getElementById("cafeBikeImage");
const trackerPartsSection = document.getElementById("trackerPartsSection");
const trackerBikeSpotlight = document.querySelector(".tracker-bike-spotlight");
const trackerPartButtons = document.querySelectorAll(".tracker-callout[data-tracker-part-id]");
const trackerPartSpotlight = document.getElementById("trackerPartSpotlight");
const trackerPartSpotlightMedia = document.getElementById("trackerPartSpotlightMedia");
const trackerPartTitle = document.getElementById("trackerPartTitle");
const trackerPartDescription = document.getElementById("trackerPartDescription");
const trackerPartLink = document.getElementById("trackerPartLink");
const trackerPartClose = document.getElementById("trackerPartClose");
const trackerGuideTip = document.getElementById("trackerGuideTip");
const trackerGuideTipClose = document.getElementById("trackerGuideTipClose");
const trackerBikeImage = document.getElementById("trackerBikeImage");
const bobberPartsSection = document.getElementById("bobberPartsSection");
const bobberBikeSpotlight = document.querySelector(".bobber-bike-spotlight");
const bobberPartButtons = document.querySelectorAll(".bobber-callout[data-bobber-part-id]");
const bobberPartSpotlight = document.getElementById("bobberPartSpotlight");
const bobberPartSpotlightMedia = document.getElementById("bobberPartSpotlightMedia");
const bobberPartTitle = document.getElementById("bobberPartTitle");
const bobberPartDescription = document.getElementById("bobberPartDescription");
const bobberPartLink = document.getElementById("bobberPartLink");
const bobberPartClose = document.getElementById("bobberPartClose");
const bobberGuideTip = document.getElementById("bobberGuideTip");
const bobberGuideTipClose = document.getElementById("bobberGuideTipClose");
const bobberBikeImage = document.getElementById("bobberBikeImage");
const featuresTitle = document.getElementById("featuresTitle");
const buildStatsBoard = document.getElementById("buildStatsBoard");
const buildVoteActions = document.getElementById("buildVoteActions");
const buildVoteText = document.getElementById("buildVoteText");
const buildVoteNote = document.getElementById("buildVoteNote");
const redColorButton = document.querySelector('.color-option[data-color="red"]');
const blackColorButton = document.querySelector('.color-option[data-color="black"]');
const greyColorButton = document.querySelector('.color-option[data-color="grey"]');
const brownColorButton = document.querySelector('.color-option[data-color="brown"]');
const scramblerBestLook = document.getElementById("scramblerBestLook");
const bratBestLook = document.getElementById("bratBestLook");
const cafeBestLook = document.getElementById("cafeBestLook");
const trackerBestLook = document.getElementById("trackerBestLook");
const bobberBestLook = document.getElementById("bobberBestLook");
const BUILD_VOTES_API_PATH = "/api/votes";
const STORAGE_KEYS = {
    color: "tmx125_active_color",
    customType: "tmx125_active_custom_type",
    voteVisitorId: "tmx125_vote_visitor_id",
    theme: "tmx125_theme",
    hasVisited: "tmx125_has_visited"
};

const SCRAMBLER_CREDIT_LINKS = {
    red: "https://www.facebook.com/LaGaraheMotorcycles/posts/honda-tmx-125-scrambler-%EF%B8%8Fthe-marlboro-project-premium-build-for-sir-nurbound-to-/587425536296681/",
    black: "https://www.instagram.com/p/CzbKwSfvUHU/?img_index=1",
    grey: "https://www.instagram.com/p/CtdvcIcPLV2/?img_index=2"
};

const BRAT_CREDIT_LINKS = {
    red: "https://www.instagram.com/p/Cw7cM9ivi4z/?img_index=1",
    grey: "https://insideracing.com.ph/the-silver-surfer-brat-style-honda-tmxby-revolt-cycles/",
    black: "https://www.instagram.com/p/DCEcsdJTkRS/?img_index=1"
};

const CAFE_RACER_CREDIT_LINKS = {
    red: "https://www.facebook.com/photo?fbid=275389570833614",
    grey: "https://www.instagram.com/p/CbxAFQ3pYaH/?img_index=1",
    black: "https://www.facebook.com/photo/?fbid=500533571698747"
};

const TRACKER_CREDIT_LINKS = {
    brown: "https://www.instagram.com/p/CDJTSxhAq58/",
    black: "https://www.instagram.com/p/B83xVmzH5Oa/",
    red: "https://www.bikebound.com/2018/01/05/honda-tmx125-scrambler/",
    grey: "https://www.instagram.com/p/Be-S7pkAQVv/"
};

const BOBBER_CREDIT_LINKS = {
    black: "https://www.facebook.com/groups/bobbersandchoppersmanila/posts/5976324222467250/",
    red: "https://www.bikebound.com/2018/06/10/honda-cg125-bobber/",
    grey: "https://www.facebook.com/dailybikeinspirations/posts/hardtail-bobber-honda-tmx-alpha-125-project-pearlafter-my-old-fb-account-got-dis/2674500502810584/"
};

const bikeVariants = {
    red: {
        src: "assets/main_motor/red.png",
        label: "Candy Ruby Red",
        quote: "A vibrant metallic red."
    },
    black: {
        src: "assets/main_motor/black.png",
        label: "Black",
        quote: "A classic, simple finish."
    },
    grey: {
        src: "assets/main_motor/grey.png",
        label: "Matte Armored Silver Metallic",
        quote: "A modern, premium matte finish."
    },
    brown: {
        src: "assets/main_motor/grey.png",
        label: "Brown",
        quote: "A warm custom finish prepared for the tracker build."
    }
};

const customTypeVariants = {
    default: {
        label: "Custom Type"
    },
    BRAT: {
        label: "BRAT",
        srcByColor: {
            red: "assets/brat/red.png",
            black: "assets/brat/black.png",
            grey: "assets/brat/grey.png"
        },
        bikeLabel: "Brat Build",
        bikeQuote: "A low, stripped-back custom style with a cleaner silhouette and everyday street attitude."
    },
    "CAFE RACER": {
        label: "CAFE RACER",
        srcByColor: {
            red: "assets/cafe_racer/red.png",
            black: "assets/cafe_racer/black.png",
            grey: "assets/cafe_racer/grey.png"
        },
        bikeLabel: "Cafe Racer Build",
        bikeQuote: "A sleek, speed-inspired custom style with a sharper riding position and classic race attitude."
    },
    SCRAMBLER: {
        label: "SCRAMBLER",
        srcByColor: {
            red: "assets/scrambler/red.png",
            black: "assets/scrambler/black.png",
            grey: "assets/scrambler/grey.png"
        },
        bikeLabel: "Scrambler Build",
        bikeQuote: "A tough, minimalist, and off-road-inspired style for both street and rough-road use."
    },
    TRACKER: {
        label: "TRACKER",
        srcByColor: {
            red: "assets/tracker/red.png",
            black: "assets/tracker/black.png",
            grey: "assets/tracker/grey.png",
            brown: "assets/tracker/brown.png"
        },
        bikeLabel: "Tracker Build",
        bikeQuote: "A rugged flat-track inspired custom style with leaner proportions and purposeful race attitude."
    },
    BOBBER: {
        label: "BOBBER",
        srcByColor: {
            red: "assets/bobber/red.png",
            black: "assets/bobber/black.png",
            grey: "assets/bobber/pearl.png"
        },
        bikeLabel: "Bobber Build",
        bikeQuote: "A low-slung custom setup with a stripped rear section, tighter tank line, and classic bobber attitude."
    }
};

const BUILD_VOTE_ORDER = ["SCRAMBLER", "CAFE RACER", "BRAT", "TRACKER", "BOBBER"];
const DEFAULT_BUILD_VOTES = {
    SCRAMBLER: 0,
    "CAFE RACER": 0,
    BRAT: 0,
    TRACKER: 0,
    BOBBER: 0
};

const baseFeatures = {
    muffler: {
        title: "Muffler",
        description: "Reduces engine noise from motorcycle exhaust.",
        image: "assets/features/stock_muffler.png",
        position: "14% 78%"
    },
    design: {
        title: "Cafe Racer Inspired Design",
        description: "Minimalist yet stylish.",
        image: "assets/features/stock_tank.png",
        position: "center 34%"
    },
    headlight: {
        title: "Automatic Headlight On",
        description: "Head-turning build and design.",
        image: "assets/features/stock_headlight.png",
        position: "70% 18%"
    },
    signal: {
        title: "Signal Light (Front and Back)",
        description: "Stylish and durable winker/blinker.",
        image: "assets/features/stock_signal-light.jpg",
        position: "96% 28%"
    },
    meter: {
        title: "Informative Meter Panel",
        description: "Well-lit meter panel making everything more visible.",
        image: "assets/features/stock_speedometer.jpg",
        position: "center center"
    },
    starter: {
        title: "Electric Starter",
        description: "One click and you're good to go.",
        image: "assets/features/stock_switch.jpg",
        position: "center center"
    },
    gear: {
        title: "5 Gear Speed",
        description: "Equal balance of strength and speed, ensuring a smoother rider.",
        image: "assets/features/stock_engine.jpg",
        position: "center center"
    },
    tire: {
        title: '18" Tire',
        description: "Extra protection for potholes and off-roads.",
        image: "assets/features/stock_rim.jpg",
        position: "center center"
    },
    ohv: {
        title: "OHV Engine",
        description: "For better engine performance and cleaner emission.",
        image: "assets/features/stock_cowling.jpg",
        position: "44% 62%"
    }
};

const scramblerFeatureOverrides = {
    muffler: {
        title: "Bullet-Type Pipe",
        description: "Slim scrambler-style exhaust with a more rugged custom look.",
        image: "assets/scrambler/bullet-pipe.png",
        position: "center center"
    },
    headlight: {
        title: "Scrambler Headlight",
        description: "Clean round-front setup that suits the scrambler build style.",
        image: "assets/scrambler/headlight.png",
        position: "center center"
    },
    signal: {
        title: "Tail Light",
        description: "Compact rear light setup that matches the custom scrambler finish.",
        image: "assets/scrambler/tail_light.png",
        position: "center center"
    },
    meter: {
        title: "Speedometer",
        description: "Simple meter display for quick and easy ride information.",
        image: "assets/scrambler/speedometer.png",
        position: "center center"
    },
    tire: {
        title: '17" Tire',
        description: "Chunkier tire setup for a more capable rough-road stance.",
        image: "assets/scrambler/tire.jpg",
        position: "center center"
    },
    ohv: {
        title: "Engine Guard",
        description: "For better engine performance and cleaner emission.",
        image: "assets/scrambler/cowling.jpg",
        position: "44% 62%"
    }
};

const bratFeatureOverrides = {
    muffler: {
        title: "Bottle-Type Pipe",
        description: "Compact bottle-style exhaust that sharpens the brat build's side profile.",
        image: "assets/brat/bottle-pipe.png",
        position: "center center"
    },
    design: {
        title: "Brat Gas Tank",
        description: "Slimmer tank profile that gives the build a flatter and more minimal brat stance.",
        image: "assets/brat/gas-tank.png",
        position: "center center"
    },
    headlight: {
        title: "Brat Headlight",
        description: "Simple round headlight setup that keeps the front end clean and classic.",
        image: "assets/brat/headlight.png",
        position: "center center"
    },
    signal: {
        title: "Tail Light",
        description: "Minimal rear light setup that suits the stripped-down brat finish.",
        image: "assets/brat/taillight.png",
        position: "center center"
    },
    meter: {
        title: "Classic Speedometer",
        description: "Compact gauge setup for an uncluttered cockpit and easy ride info.",
        image: "assets/brat/speedometer.png",
        position: "center center"
    },
    starter: {
        title: "Classic Switch",
        description: "Simple switch assembly that fits the raw, straightforward brat look.",
        image: "assets/brat/classic_switch.jpg",
        position: "center center"
    },
    gear: {
        title: "Exposed Engine Look",
        description: "A cleaner engine presentation that adds to the mechanical character of the build.",
        image: "assets/brat/engine.png",
        position: "center center"
    },
    tire: {
        title: 'Brat Tire Setup',
        description: "Balanced tire choice for a lower profile stance with solid street presence.",
        image: "assets/brat/tire.png",
        position: "center center"
    },
    ohv: {
        title: "Open Air Filter",
        description: "Open-style air filter that adds to the raw custom look of the brat build.",
        image: "assets/brat/air_filter.jpg",
        position: "center center"
    }
};

const cafeRacerFeatureOverrides = {
    muffler: {
        title: "Cafe Racer Pipe",
        description: "Slim custom pipe that keeps the cafe racer silhouette clean and aggressive.",
        image: "assets/cafe_racer/pipe.png",
        position: "center center"
    },
    design: {
        title: "Cafe Racer Tank",
        description: "Longer race-inspired tank shape that defines the cafe racer profile.",
        image: "assets/cafe_racer/tank.png",
        position: "center center"
    },
    headlight: {
        title: "Cafe Racer Headlight",
        description: "Compact front light setup that suits the classic race-ready look.",
        image: "assets/cafe_racer/headlight.jpg",
        position: "center center"
    },
    signal: {
        title: "Tail Light",
        description: "Minimal rear light setup integrated into the tighter cafe racer tail section.",
        image: "assets/cafe_racer/taillight.jpg",
        position: "center center"
    },
    meter: {
        title: "Cafe Racer Speedometer",
        description: "Simple gauge setup for a cleaner cockpit with essential ride information.",
        image: "assets/cafe_racer/speedometer.jpg",
        position: "center center"
    },
    starter: {
        title: "Seat Cowling",
        description: "Rear seat cowl that gives the build its signature single-seat cafe racer finish.",
        image: "assets/cafe_racer/seatcowling.jpg",
        position: "center center"
    },
    gear: {
        title: "Clip Handlebar",
        description: "Lower clip-on handlebar setup for a more committed cafe racer riding posture.",
        image: "assets/cafe_racer/cliphandlebar.jpg",
        position: "center center"
    },
    tire: {
        title: "Swallow Tire",
        description: "Sportier tire choice that supports the leaner road-focused cafe racer stance.",
        image: "assets/cafe_racer/swallowtire.jpg",
        position: "center center"
    },
    ohv: {
        title: "Bar-End Side Mirror",
        description: "Bar-end mirror setup that keeps the cockpit cleaner and more race-inspired.",
        image: "assets/cafe_racer/bar_endsidemirror.jpg",
        position: "center center"
    }
};

const trackerFeatureOverrides = {
    muffler: {
        title: "Tracker Bullet Pipe",
        description: "Bullet-style pipe that keeps the tracker side view sharp and race-inspired.",
        image: "assets/tracker/bulletpipe.jpg",
        position: "center center"
    },
    design: {
        title: "Tracker Tank",
        description: "Slimmed tank profile that supports the compact flat-track silhouette.",
        image: "assets/tracker/tank.jpg",
        position: "center center"
    },
    headlight: {
        title: "Tracker Headlight",
        description: "Clean front light setup that matches the straightforward tracker look.",
        image: "assets/tracker/headlight.jpg",
        position: "center center"
    },
    signal: {
        title: "Tail Light",
        description: "Simple rear light setup that keeps the tail section neat and minimal.",
        image: "assets/tracker/taillight.jpg",
        position: "center center"
    },
    meter: {
        title: "Tracker Speedometer",
        description: "Compact gauge cluster for a cleaner cockpit and quick ride information.",
        image: "assets/tracker/speedometer.jpg",
        position: "center center"
    },
    starter: {
        title: "Seat w/ubend",
        description: "Classic seat with rear loop that gives the tracker build its leaner line.",
        image: "assets/tracker/seatw_ubend.jpg",
        position: "center center"
    },
    gear: {
        title: "Black Engine Detail",
        description: "Darkened engine treatment that adds a tougher, race-bred tracker character.",
        image: "assets/tracker/blackengine.jpg",
        position: "center center"
    },
    tire: {
        title: "Tracker Tire",
        description: "Purposeful tire setup that supports the tracker stance and road grip.",
        image: "assets/tracker/tire.jpg",
        position: "center center"
    },
    ohv: {
        title: "Inverted Fork",
        description: "Inverted fork setup that gives the front end a more modern and aggressive tracker feel.",
        image: "assets/tracker/invertedfork.jpg",
        position: "center center"
    }
};

const bobberFeatureOverrides = {
    muffler: {
        title: "Classic Pipe",
        description: "Classic bobber pipe setup that keeps the side profile simple, low, and clean.",
        image: "assets/bobber/classicpipe.jpg",
        position: "center center"
    },
    design: {
        title: "Small Tank",
        description: "Smaller tank profile that helps give the bobber build a tighter and lower silhouette.",
        image: "assets/bobber/smalltank.jpg",
        position: "center center"
    },
    headlight: {
        title: "Bobber Headlight",
        description: "Compact front light setup that suits the stripped and classic bobber front end.",
        image: "assets/bobber/headlight.jpg",
        position: "center center"
    },
    signal: {
        title: "Custom Sissy Bar",
        description: "Rear sissy bar detail that adds classic custom presence to the tail section.",
        image: "assets/bobber/custom_sissybar.jpg",
        position: "center 46%",
        size: "auto 112%"
    },
    meter: {
        title: "Handlebar Setup",
        description: "Simple handlebar arrangement that matches the relaxed and straightforward bobber style.",
        image: "assets/bobber/handlebar.jpg",
        position: "center center"
    },
    starter: {
        title: "Single Seat",
        description: "Single-seat layout that defines the classic bobber riding position and rear profile.",
        image: "assets/bobber/singleseat.jpg",
        position: "center center"
    },
    gear: {
        title: "Fairings & Battery Delete",
        description: "Cleaner side presentation that removes extra visual bulk from the build.",
        image: "assets/bobber/fairings&batterydelete.jpg",
        position: "center center"
    },
    tire: {
        title: "Swallow Tire",
        description: "Chunkier tire setup that gives the bobber build a stronger planted stance.",
        image: "assets/bobber/swallow tire.jpg",
        position: "center center"
    },
    ohv: {
        title: "Open Air Filter",
        description: "Open filter detail that adds more raw custom character to the engine area.",
        image: "assets/bobber/airfilter.jpg",
        position: "center center"
    }
};

const getScramblerBikeSrc = () => {
    const scramblerVariant = customTypeVariants.SCRAMBLER;
    return scramblerVariant?.srcByColor?.[activeColor] || scramblerVariant?.srcByColor?.red || "assets/scrambler/red.png";
};

const getBratBikeSrc = () => "assets/brat/grey.png";
const getCafeBikeSrc = () => "assets/cafe_racer/black.png";
const getTrackerBikeSrc = () => "assets/tracker/brown.png";
const getBobberBikeSrc = () => "assets/bobber/black.png";

const scramblerPartDetails = {
    "tail-light": {
        title: "Round Tail Light",
        description: "Compact round tail light that gives the rear end a cleaner custom scrambler finish.",
        image: "assets/scrambler/roundtaillight.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Tail-Light-Brake-Light-License-Plate-Integrated-Lights-Cafe-Racer-Tail-Light-i.164768013.7606100866"
    },
    seat: {
        title: "Classic Seat with ubend",
        description: "Flat classic seat profile with a simple custom rear loop that matches the build direction.",
        image: "assets/scrambler/ubendseat.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/oldstylecustomseat?categoryId=100641&entryPoint=ShopByPDP&itemId=55553011332&upstream=search"
    },
    rim: {
        title: 'Wheel Rim 17"',
        description: "Seventeen-inch rim setup that supports the balanced scrambler silhouette and road grip.",
        image: "assets/scrambler/rim17.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/SPD-MORITECH-RIM-1.85-2.15-2.50-3.00-3.5-4.25-by-17-i.270043243.9535234353?extraParams=%7B%22display_model_id%22%3A25093863745%2C%22model_selection_logic%22%3A3%7D&sp_atk=da80c491-b1e2-4ee2-8f07-d60d81fe959c&xptdk=da80c491-b1e2-4ee2-8f07-d60d81fe959c"
    },
    pipe: {
        title: "Bullet Pipe",
        description: "Bullet-style exhaust that sharpens the side profile and gives the build a classic custom touch.",
        image: "assets/scrambler/bulletpipe.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/v5-OG-Bullet-pipe-w-RESONATOR-for-TMX-125-155-HONDA-Motorcycle-pipe-i.136914586.26692480597?extraParams=%7B%22display_model_id%22%3A248983082641%2C%22model_selection_logic%22%3A3%7D&sp_atk=a7cf044d-5423-4b30-add3-efe9da875215&xptdk=a7cf044d-5423-4b30-add3-efe9da875215"
    },
    mirror: {
        title: "Round Side Mirror",
        description: "Round mirror choice that keeps the cockpit simple and visually consistent with the retro scrambler look.",
        image: "assets/scrambler/roundsidemirror.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Galen-Chrome-Plated-Classic-Silver-Round-Side-Mirrors-Universal-Fit-for-Motorcycles-i.1215588992.29817565777?extraParams=%7B%22display_model_id%22%3A138116271041%2C%22model_selection_logic%22%3A3%7D&sp_atk=f1e404b2-839f-4058-9240-951ee5547d13&xptdk=f1e404b2-839f-4058-9240-951ee5547d13"
    },
    speedometer: {
        title: "Round Speedometer / Odometer",
        description: "Minimal round gauge cluster for a cleaner cockpit with essential ride information.",
        image: "assets/scrambler/roundspeedometer.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Speedometer-Gauge-Odometer-With-LED-Indicator-Odometer-i.164768013.7807384870?extraParams=%7B%22display_model_id%22%3A22842554920%2C%22model_selection_logic%22%3A3%7D&sp_atk=997f5fda-46a1-4fc1-8443-56867ba1e4db&xptdk=997f5fda-46a1-4fc1-8443-56867ba1e4db"
    },
    headlight: {
        title: "Round Headlight",
        description: "Classic round headlight setup that defines the front character of the scrambler build.",
        image: "assets/scrambler/roundheadlight.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Yimix-Universal-Motorcycle-Headlight-Retro-Round-Motorcycle-Headlamp-Yellow-Amber-With-Grille-Mask-i.442828392.8055969119?extraParams=%7B%22display_model_id%22%3A45471585626%2C%22model_selection_logic%22%3A3%7D&sp_atk=1525195b-cf94-4e0f-aeee-c950e1149e3f&xptdk=1525195b-cf94-4e0f-aeee-c950e1149e3f"
    },
    fender: {
        title: "Classic Fender",
        description: "Slim custom fender treatment that keeps the front end neat and proportional.",
        image: "assets/scrambler/classicfender.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Short-Upper-bracket-Front-fender-for-Classic-motorcycle-build-i.136914586.17743514081?extraParams=%7B%22display_model_id%22%3A127532282821%2C%22model_selection_logic%22%3A3%7D&sp_atk=19c0b9f4-653a-40a9-87c7-ab44821c52fe&xptdk=19c0b9f4-653a-40a9-87c7-ab44821c52fe"
    },
    "fork-boots": {
        title: "Fork Boots",
        description: "Fork boots add protection and complete the rugged vintage-inspired front suspension look.",
        image: "assets/scrambler/forkboots.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Fork-boots-Rubber-boots-(1pair)-for-motorcycle-i.136914586.13659879594?extraParams=%7B%22display_model_id%22%3A305524881525%2C%22model_selection_logic%22%3A3%7D&sp_atk=f85ae966-bbb8-44f6-a687-bf0c902eb434&xptdk=f85ae966-bbb8-44f6-a687-bf0c902eb434"
    },
    tire: {
        title: '17" Tire',
        description: "Chunkier tire setup for stronger road presence and improved scrambler-ready stance.",
        image: "assets/scrambler/tire17.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Leo-Raptor-Dual-Sport-Tubetype-Tire-for-Scrambler-Brat-Bikes-i.1639150088.48250349749?extraParams=%7B%22display_model_id%22%3A310031281471%2C%22model_selection_logic%22%3A3%7D&rModelId=310031281471&sp_atk=04974b4e-4614-4796-9e38-63dd30e8af08&vItemId=43824381376&vModelId=276977874756&vShopId=1257811163&xptdk=04974b4e-4614-4796-9e38-63dd30e8af08"
    },
    fork: {
        title: "TMX 155 fork",
        description: "Front fork setup chosen to support the custom front geometry and stronger scrambler presence.",
        image: "assets/scrambler/forkboots.png",
        pposition: "center center",
        size: "contain",
        link: "https://shopee.ph/Front-Shock-Assembly-with-T-post-assy-For-Tmx155-Only-set-i.59587032.1421711939?extraParams=%7B%22display_model_id%22%3A1995461744%2C%22model_selection_logic%22%3A3%7D&sp_atk=ca346933-50d7-4ca6-9990-7b629d479e36&xptdk=ca346933-50d7-4ca6-9990-7b629d479e36"
    },
    cowling: {
        title: "Engine Guard",
        description: "Lower engine guard that strengthens the side profile and adds a more finished custom look.",
        image: "assets/scrambler/cowling.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Skidplate-skid-plate-for-cafe-racer-plug-and-play-rusi-250-keeway-152-tmx-125-and-155-XR-200-i.1718644920.54705484304?extraParams=%7B%22display_model_id%22%3A380498636990%2C%22model_selection_logic%22%3A3%7D&sp_atk=dc787be1-9630-449c-a0d6-f9ab9ffcc1dc&xptdk=dc787be1-9630-449c-a0d6-f9ab9ffcc1dc"
    }
};

const bratPartDetails = {
    "tail-light": {
        title: "Tail Light",
        description: "Minimal rear light setup that keeps the brat build simple and clean.",
        image: "assets/brat/taillight.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Tail-Light-Brake-Light-License-Plate-Integrated-Lights-Cafe-Racer-Tail-Light-i.164768013.7606100866?extraParams=%7B%22display_model_id%22%3A44671050532%2C%22model_selection_logic%22%3A3%7D&sp_atk=23d5ed3e-91cc-4b80-b7a5-b2a424e2356d&xptdk=23d5ed3e-91cc-4b80-b7a5-b2a424e2356d"
    },
    tire: {
        title: "Brat Tire",
        description: "Street-focused tire choice that supports the low stance of the build.",
        image: "assets/brat/tire.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/SWALLOW-CLASSIC-SB135-400-17-400-18-450-18-Tubetype-Motorcycle-Tire-i.1635531202.43922075991?extraParams=%7B%22display_model_id%22%3A258970845252%2C%22model_selection_logic%22%3A3%7D&sp_atk=e91ac716-473b-4765-883f-3cf3946f9e19&xptdk=e91ac716-473b-4765-883f-3cf3946f9e19"
    },
    pipe: {
        title: "Bottle Pipe",
        description: "Compact bottle-style pipe that gives the side view a sharper custom finish.",
        image: "assets/brat/bottle-pipe.jpg",
        position: "left center",
        size: "135% auto",
        link: "https://shopee.ph/Stainless-Bottle-Type-Muffler-for-Honda-TMX-125-Alpha-i.704910881.28455743822?extraParams=%7B%22display_model_id%22%3A256225847033%2C%22model_selection_logic%22%3A3%7D&sp_atk=68c32ddd-3d7b-4a1e-953a-72d32dc03c1d&xptdk=68c32ddd-3d7b-4a1e-953a-72d32dc03c1d"
    },
    speedometer: {
        title: "Classic Speedometer",
        description: "Simple cockpit gauge that keeps the handlebar area uncluttered.",
        image: "assets/brat/speedometer.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Speedometer-Gauge-Odometer-With-LED-Indicator-Odometer-i.164768013.7807384870?extraParams=%7B%22display_model_id%22%3A22842554920%2C%22model_selection_logic%22%3A3%7D&sp_atk=bbd25c60-0893-4684-bdbb-ba798d95f6b6&xptdk=bbd25c60-0893-4684-bdbb-ba798d95f6b6"
    },
    headlight: {
        title: "Round Headlight",
        description: "Classic round headlight that gives the front end a timeless custom look.",
        image: "assets/brat/headlight.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/5-Inch-35W-Universal-Motorcycle-Headlight-Bulb-12V-Round-High-low-Beam-Headlight-Fog-Light-i.1113728009.24217913668?extraParams=%7B%22display_model_id%22%3A226113564206%2C%22model_selection_logic%22%3A3%7D&sp_atk=adc9f720-f6ec-474b-acc4-cc2bb28cc6b2&xptdk=adc9f720-f6ec-474b-acc4-cc2bb28cc6b2"
    },
    forkboots: {
        title: "Fork Boots",
        description: "Fork boots add protection and complete the rugged vintage-inspired front suspension look.",
        image: "assets/brat/fork-boots.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Fork-boots-Rubber-boots-(1pair)-for-motorcycle-i.136914586.13659879594?extraParams=%7B%22display_model_id%22%3A305524881525%2C%22model_selection_logic%22%3A3%7D&sp_atk=f85ae966-bbb8-44f6-a687-bf0c902eb434&xptdk=f85ae966-bbb8-44f6-a687-bf0c902eb434"
    },
    "air-filter": {
        title: "Open Air Filter",
        description: "Open-style filter that adds to the stripped-down custom look.",
        image: "assets/brat/air_filter.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/AIR-FILTER-TMX-125-ALPHA-O.E.M-GENUINE-i.318676197.13707776118?extraParams=%7B%22display_model_id%22%3A160805726177%2C%22model_selection_logic%22%3A3%7D&rModelId=160805726177&sp_atk=35dfe402-be85-45dc-966b-63d72190685f&vItemId=43674381991&vModelId=266978127880&vShopId=1257811163&xptdk=35dfe402-be85-45dc-966b-63d72190685f"
    },
    seat: {
        title: "Brat Seat w/ubend",
        description: "Flat brat-style seat line that keeps the rear profile low and balanced.",
        image: "assets/brat/brat-seat.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/oldstylecustomseat?categoryId=100641&entryPoint=ShopByPDP&itemId=55553011332&upstream=search"
    }
};

const cafePartDetails = {
    "seat-cowling": {
        title: "Seat Cowling",
        description: "Rear seat cowl that gives the build its signature single-seat cafe racer finish.",
        image: "assets/cafe_racer/seatcowling.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/%E2%9C%93%E2%88%88%E2%9C%BEUniversal-Motorcycle-Motorbike-ABS-Rear-Seat-Cowl-Cover-for-Cafe-Racer-i.1396625893.28017721832?extraParams=%7B%22display_model_id%22%3A197979022167%2C%22model_selection_logic%22%3A3%7D&sp_atk=59c1c8ad-8474-4596-82d1-4eb7fcc2bbdc&xptdk=59c1c8ad-8474-4596-82d1-4eb7fcc2bbdc"
    },
    seat: {
        title: "Seat w/ubend",
        description: "Classic seat with rear loop shaping that supports the long cafe racer line.",
        image: "assets/scrambler/ubendseat.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/oldstylecustomseat?categoryId=100641&entryPoint=ShopByPDP&itemId=55553011332&upstream=search"
    },
    "tail-light": {
        title: "Tail Light",
        description: "Minimal rear light setup integrated into the tight tail section.",
        image: "assets/cafe_racer/taillight.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Tail-Light-Brake-Light-License-Plate-Integrated-Lights-Cafe-Racer-Tail-Light-i.164768013.7606100866?extraParams=%7B%22display_model_id%22%3A44671050532%2C%22model_selection_logic%22%3A3%7D&sp_atk=23d5ed3e-91cc-4b80-b7a5-b2a424e2356d&xptdk=23d5ed3e-91cc-4b80-b7a5-b2a424e2356d"
    },
    pipe: {
        title: "Pipe",
        description: "Slim custom pipe that keeps the cafe racer silhouette clean and aggressive.",
        image: "assets/cafe_racer/pipe.png",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Motorcycle-Exhaust-Muffler-Retro-Vintage-Classic-Electroplating-Escap-Moto-for-Cafe-Racer-Bobber-Chopper-Custom-i.1598419165.29139362582?extraParams=%7B%22display_model_id%22%3A275925672340%2C%22model_selection_logic%22%3A3%7D&sp_atk=9e64ac7f-bbfe-4a49-8a31-01adfa20e009&xptdk=9e64ac7f-bbfe-4a49-8a31-01adfa20e009"
    },
    "clip-handlebar": {
        title: "Clip Handle Bar",
        description: "Lower clip-on handlebar setup for a more committed cafe racer riding posture.",
        image: "assets/cafe_racer/cliphandlebar.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Clip-on-handlebar-cafe-racer-motorcycle-i.220868424.13190389126?extraParams=%7B%22display_model_id%22%3A222770774941%2C%22model_selection_logic%22%3A3%7D&sp_atk=b2693490-56b0-4e1b-9c3b-c9877042b9bf&xptdk=b2693490-56b0-4e1b-9c3b-c9877042b9bf"
    },
    speedometer: {
        title: "Speedometer",
        description: "Simple gauge setup for a cleaner cockpit with essential ride information.",
        image: "assets/cafe_racer/speedometer.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Speedometer-Gauge-Odometer-With-LED-Indicator-Odometer-i.164768013.7807384870?extraParams=%7B%22display_model_id%22%3A22842554920%2C%22model_selection_logic%22%3A3%7D&sp_atk=bbd25c60-0893-4684-bdbb-ba798d95f6b6&xptdk=bbd25c60-0893-4684-bdbb-ba798d95f6b6"
    },
    headlight: {
        title: "Headlight",
        description: "Compact front light setup that suits the classic race-ready look.",
        image: "assets/cafe_racer/headlight.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Headlight-Round-Retro-Motorcycle-Headlamp-Yellow-i.164768013.7806071650?extraParams=%7B%22display_model_id%22%3A226417908734%2C%22model_selection_logic%22%3A3%7D&sp_atk=a89169a5-9280-4a80-acf3-1e552684fc4b&xptdk=a89169a5-9280-4a80-acf3-1e552684fc4b"
    },
    tire: {
        title: "Swallow Tire",
        description: "Sportier tire choice that supports the leaner road-focused cafe racer stance.",
        image: "assets/cafe_racer/swallowtire.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Swallow-Classic-Sawtooth-Tire-17-(With-Innertube-and-Free-White-Marker)-i.1409416043.27138246709?extraParams=%7B%22display_model_id%22%3A260590820839%2C%22model_selection_logic%22%3A3%7D&sp_atk=fe95c211-0d8e-4e05-91cb-aad8ca1e092b&xptdk=fe95c211-0d8e-4e05-91cb-aad8ca1e092b"
    },
    rim: {
        title: '17" Rim',
        description: "Seventeen-inch rim setup that sharpens the bike's race-inspired stance.",
        image: "assets/cafe_racer/swallowtire.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/SPD-RIM-ALLOY-17-Black-185x17-215x17-250x17-350x17-i.282322300.26205565729?extraParams=%7B%22display_model_id%22%3A236554815542%2C%22model_selection_logic%22%3A3%7D&sp_atk=09606c79-46c7-4c24-8cba-2e376e046ba3&xptdk=09606c79-46c7-4c24-8cba-2e376e046ba3"
    },
    fork: {
        title: "TMX 155 Fork",
        description: "Front fork setup chosen to support the custom front geometry and lower posture.",
        image: "assets/cafe_racer/fork.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Front-Shock-Assembly-with-T-post-assy-For-Tmx155-Only-set-i.59587032.1421711939?extraParams=%7B%22display_model_id%22%3A1995461744%2C%22model_selection_logic%22%3A3%7D&sp_atk=5a09c09f-028b-4dc6-ba29-0e3427aec459&xptdk=5a09c09f-028b-4dc6-ba29-0e3427aec459"
    }
};

const trackerPartDetails = {
    muffler: {
        title: "Bullet Pipe",
        description: "Bullet-style pipe that keeps the tracker side view sharp and race-inspired.",
        image: "assets/tracker/bulletpipe.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/OG-v5-Bullet-pipe-Big-elbow-edition-(ytx-supremo-tmx125-155-keeway)-i.136914586.44062367946?extraParams=%7B%22display_model_id%22%3A375565289129%2C%22model_selection_logic%22%3A3%7D&sp_atk=702f2444-9d80-4b08-9b9c-44873cccaa88&xptdk=702f2444-9d80-4b08-9b9c-44873cccaa88"
    },
    headlight: {
        title: "Headlight",
        description: "Clean front light setup that matches the straightforward tracker look.",
        image: "assets/tracker/headlight.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Motorcycle-Headlight-Universal-Round-Yellow-Retro-Motorcycle-Headlamp-i.164768013.5567639986?extraParams=%7B%22display_model_id%22%3A62657199026%2C%22model_selection_logic%22%3A3%7D&sp_atk=63fb1d16-ef61-431f-9f68-b8ef5d956be3&xptdk=63fb1d16-ef61-431f-9f68-b8ef5d956be3"
    },
    signal: {
        title: "Tail Light",
        description: "Simple rear light setup that keeps the tail section neat and minimal.",
        image: "assets/tracker/taillight.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Tail-Light-Brake-Light-License-Plate-Integrated-Lights-Cafe-Racer-Tail-Light-i.164768013.7606100866?extraParams=%7B%22display_model_id%22%3A44671050532%2C%22model_selection_logic%22%3A3%7D&sp_atk=93a2d1d5-a053-4c07-a77f-31ee75f79209&xptdk=93a2d1d5-a053-4c07-a77f-31ee75f79209"
    },
    meter: {
        title: "Speedometer",
        description: "Compact gauge cluster for a cleaner cockpit and quick ride information.",
        image: "assets/tracker/speedometer.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Universal-Motorcycle-Speedometer-Gauge-Odometer-With-LED-Indicator-Odometer-i.164768013.7807384870?extraParams=%7B%22display_model_id%22%3A22842554920%2C%22model_selection_logic%22%3A3%7D&sp_atk=a56b7015-0791-4e68-a5e0-59a8e54120b0&xptdk=a56b7015-0791-4e68-a5e0-59a8e54120b0"
    },
    starter: {
        title: "Seat w/ubend",
        description: "Classic seat with rear loop that gives the tracker build its leaner line.",
        image: "assets/tracker/seatw_ubend.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/oldstylecustomseat?categoryId=100641&entryPoint=ShopByPDP&itemId=55553011332&upstream=search"
    },
    tire: {
        title: "Tracker Tire",
        description: "Purposeful tire setup that supports the tracker stance and road grip.",
        image: "assets/tracker/tire.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/LEO-MOTOCROSS-TIRE-OFF-ROAD-MOTORCYCLE-Gulong-Tube-tire-Durability-250-17-300-17-i.1371488717.28380817036?extraParams=%7B%22display_model_id%22%3A237571700936%2C%22model_selection_logic%22%3A3%7D&sp_atk=b68aab1a-6c46-4d0d-8f21-37da977a94dc&xptdk=b68aab1a-6c46-4d0d-8f21-37da977a94dc"
    },
    ohv: {
        title: "Inverted Fork",
        description: "Inverted fork setup that gives the front end a more modern and aggressive tracker feel.",
        image: "assets/tracker/invertedfork.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Front-Shock-Inverted-for-XRM-Inverted-fork-710MM-735MM-800MM-with-steering-parts-i.1032386719.20891934337?extraParams=%7B%22display_model_id%22%3A186957194871%2C%22model_selection_logic%22%3A3%7D&sp_atk=2f81ad34-8c71-4227-9e41-dcaeeb8ca143&xptdk=2f81ad34-8c71-4227-9e41-dcaeeb8ca143"
    }
};

const bobberPartDetails = {
    muffler: {
        title: "Classic Pipe",
        description: "Classic bobber pipe setup that keeps the side profile simple, low, and clean.",
        image: "assets/bobber/classicpipe.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/%E3%80%90MJMOTO%E3%80%9138-40-43-45mm-Motorcycle-Retro-Modified-Exhaust-Pipe-Tapered-Slip-On-Exhaust-Muffler-Pipe-For-Harley-Triumph-Cafe-Racer-Racing-i.1007232505.22843818177?extraParams=%7B%22display_model_id%22%3A127594515904%2C%22model_selection_logic%22%3A3%7D&sp_atk=c744399c-e032-4112-8123-88bc16aaf1b7&xptdk=c744399c-e032-4112-8123-88bc16aaf1b7"
    },
    design: {
        title: "Small Tank",
        description: "Smaller tank profile that helps give the bobber build a tighter and lower silhouette.",
        image: "assets/bobber/smalltank.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Tank-Chopper-Pranuts-Tank-Peanuts-Tank-Chopper-Bobber-Motorcycle-Tank--i.1613594320.56355828553?extraParams=%7B%22display_model_id%22%3A292388571643%2C%22model_selection_logic%22%3A3%7D&sp_atk=879e4edc-bb77-48d8-bd4f-459108885bb9&xptdk=879e4edc-bb77-48d8-bd4f-459108885bb9"
    },
    headlight: {
        title: "Headlight",
        description: "Compact front light setup that suits the stripped and classic bobber front end.",
        image: "assets/bobber/headlight.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/5-Inch-35W-Universal-Motorcycle-Headlight-Bulb-12V-Round-High-low-Beam-Headlight-Fog-Light-i.1113728009.24217913668?extraParams=%7B%22display_model_id%22%3A226113564206%2C%22model_selection_logic%22%3A3%7D&sp_atk=3a77319a-914a-48aa-bf3b-f29c4a8e77ba&xptdk=3a77319a-914a-48aa-bf3b-f29c4a8e77ba"
    },
    signal: {
        title: "Custom Sissy Bar",
        description: "Rear sissy bar detail that adds classic custom presence to the tail section.",
        image: "assets/bobber/custom_sissybar.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Motorcycle-Retro-Sissy-Bar-Passenger-Backrest-For-Harley-Nightster-975-975S-Rh975-Rh975s-21-25-i.1424936022.57850631394?extraParams=%7B%22display_model_id%22%3A325056052276%2C%22model_selection_logic%22%3A3%7D&sp_atk=437b9ca3-2dcb-4bcc-9774-c4797c6b272f&xptdk=437b9ca3-2dcb-4bcc-9774-c4797c6b272f"
    },
    meter: {
        title: "Handlebar",
        description: "Simple handlebar arrangement that matches the relaxed and straightforward bobber style.",
        image: "assets/bobber/handlebar.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/%E3%80%90MJMOTO%E3%80%91Motorcycle-Handlebar-22mm-25mm-Super-High-Motorbike-Scooter-Handle-Bars-Retro-Bike-Bobber-Chopper-Cruiser-Dyna-Softail-Steering-Wheel-i.1007232505.21389202089?extraParams=%7B%22display_model_id%22%3A196774231209%2C%22model_selection_logic%22%3A3%7D&sp_atk=b9227b3c-fbc5-4484-abf1-dc2f476a442c&xptdk=b9227b3c-fbc5-4484-abf1-dc2f476a442c"
    },
    starter: {
        title: "Single Seat",
        description: "Single-seat layout that defines the classic bobber riding position and rear profile.",
        image: "assets/bobber/singleseat.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/Motorcycle-Harley-Cushion-Spring-Leather-Motorcycle-Retro-Seat-Modification-Single-Seat-i.164768013.3772426667?extraParams=%7B%22display_model_id%22%3A90504068059%2C%22model_selection_logic%22%3A3%7D&sp_atk=09c40c4e-c311-4314-8544-1015ef40ce20&xptdk=09c40c4e-c311-4314-8544-1015ef40ce20"
    },
    tire: {
        title: "Swallow Tire",
        description: "Chunkier tire setup that gives the bobber build a stronger planted stance.",
        image: "assets/bobber/swallow tire.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/SWALLOW-CLASSIC-SB135-400-17-400-18-450-18-Tubetype-Motorcycle-Tire-i.1635531202.43922075991?extraParams=%7B%22display_model_id%22%3A258970845252%2C%22model_selection_logic%22%3A3%7D&sp_atk=3acda879-0807-446e-a4b1-0f846e846ebd&xptdk=3acda879-0807-446e-a4b1-0f846e846ebd"
    },
    ohv: {
        title: "Open Air Filter",
        description: "Open filter detail that adds more raw custom character to the engine area.",
        image: "assets/bobber/airfilter.jpg",
        position: "center center",
        size: "contain",
        link: "https://shopee.ph/AIR-FILTER-TMX-125-ALPHA-O.E.M-GENUINE-i.135298104.41902349596?extraParams=%7B%22display_model_id%22%3A280193098212%2C%22model_selection_logic%22%3A3%7D&rModelId=280193098212&sp_atk=1f47c4c8-1c7e-482d-a9f6-17ee87dfcd6d&vItemId=43674381991&vModelId=266978127880&vShopId=1257811163&xptdk=1f47c4c8-1c7e-482d-a9f6-17ee87dfcd6d"
    }
};

let activeColor = "red";
let activeCustomType = "default";
let activeTheme = "light";
let activeScramblerPart = "headlight";
let activeBratPart = "headlight";
let activeCafePart = "seat-cowling";
let activeTrackerPart = "design";
let activeBobberPart = "design";
let isScramblerPartSpotlightOpen = false;
let isBratPartSpotlightOpen = false;
let isCafePartSpotlightOpen = false;
let isTrackerPartSpotlightOpen = false;
let isBobberPartSpotlightOpen = false;
let isBikeCreditVisible = false;
let buildVotes = { ...DEFAULT_BUILD_VOTES };
let activeBuildVote = "";
let voteVisitorId = "";
let isBuildVoteApiReady = false;
let isBuildVoteSubmitting = false;
let scramblerBestLookIntervalId = null;
let scramblerBestLookTimeoutId = null;
let bratBestLookIntervalId = null;
let bratBestLookTimeoutId = null;
let cafeBestLookIntervalId = null;
let cafeBestLookTimeoutId = null;
let trackerBestLookIntervalId = null;
let trackerBestLookTimeoutId = null;
let bobberBestLookIntervalId = null;
let bobberBestLookTimeoutId = null;
let customTypeHintHideTimeoutId = null;
let customTypeHintLoopIntervalId = null;

const showCustomTypeHint = () => {
    if (!customTypeHint) {
        return;
    }

    customTypeHint.classList.remove("is-hidden");
    window.clearTimeout(customTypeHintHideTimeoutId);
    customTypeHintHideTimeoutId = window.setTimeout(() => {
        customTypeHint.classList.add("is-hidden");
    }, 5000);
};

const applyTheme = () => {
    const isDarkTheme = activeTheme === "dark";
    document.body.dataset.theme = isDarkTheme ? "dark" : "light";

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isDarkTheme));
    }

    if (themeToggleIcon) {
        themeToggleIcon.textContent = isDarkTheme ? "◑" : "◐";
    }

    if (themeToggleText) {
        themeToggleText.textContent = isDarkTheme ? "Light" : "Dark";
    }
};

if (customTypeHint) {
    showCustomTypeHint();
    customTypeHintLoopIntervalId = window.setInterval(showCustomTypeHint, 20000);
}

const loadSavedState = () => {
    const hasVisited = localStorage.getItem(STORAGE_KEYS.hasVisited) === "true";
    const savedColor = localStorage.getItem(STORAGE_KEYS.color);
    const savedCustomType = localStorage.getItem(STORAGE_KEYS.customType);
    const savedVoteVisitorId = localStorage.getItem(STORAGE_KEYS.voteVisitorId);
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

    if (!hasVisited) {
        activeColor = "red";
        activeCustomType = "default";
    }

    if (hasVisited && savedColor && bikeVariants[savedColor]) {
        activeColor = savedColor;
    }

    if (hasVisited && savedCustomType && customTypeVariants[savedCustomType]) {
        activeCustomType = savedCustomType;
    }

    if (savedVoteVisitorId) {
        voteVisitorId = savedVoteVisitorId;
    }

    if (savedTheme === "dark" || savedTheme === "light") {
        activeTheme = savedTheme;
    }
};

const saveState = () => {
    localStorage.setItem(STORAGE_KEYS.color, activeColor);
    localStorage.setItem(STORAGE_KEYS.customType, activeCustomType);
    localStorage.setItem(STORAGE_KEYS.theme, activeTheme);
    localStorage.setItem(STORAGE_KEYS.hasVisited, "true");
    if (voteVisitorId) {
        localStorage.setItem(STORAGE_KEYS.voteVisitorId, voteVisitorId);
    }
};

const animateWindowScrollTo = (targetY, duration = 1400) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutCubic = (t) => (
        t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2
    );

    const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + (distance * eased));

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
};

const updateScrollCueState = () => {
    if (!scrollCue) {
        return;
    }

    const shouldUseUpMode = window.scrollY > 120;

    scrollCue.classList.toggle("is-compact", shouldUseUpMode);
    scrollCue.classList.toggle("is-up", shouldUseUpMode);
    scrollCue.classList.remove("is-hidden");
    scrollCue.setAttribute(
        "aria-label",
        shouldUseUpMode ? "Scroll back to top" : "Scroll to features and build guide"
    );

    if (scrollCueText) {
        scrollCueText.textContent = "See Features";
    }
};

const showScramblerBestLook = () => {
    if (!scramblerBestLook) {
        return;
    }

    scramblerBestLook.classList.add("is-visible");
    window.clearTimeout(scramblerBestLookTimeoutId);
    scramblerBestLookTimeoutId = window.setTimeout(() => {
        scramblerBestLook.classList.remove("is-visible");
    }, 3000);
};

const showBratBestLook = () => {
    if (!bratBestLook) {
        return;
    }

    bratBestLook.classList.add("is-visible");
    window.clearTimeout(bratBestLookTimeoutId);
    bratBestLookTimeoutId = window.setTimeout(() => {
        bratBestLook.classList.remove("is-visible");
    }, 3000);
};

const updateScramblerBestLookHint = () => {
    if (!scramblerBestLook || !redColorButton) {
        return;
    }

    const isScramblerBuild = activeCustomType === "SCRAMBLER";
    window.clearInterval(scramblerBestLookIntervalId);
    window.clearTimeout(scramblerBestLookTimeoutId);
    scramblerBestLook.classList.remove("is-visible");

    if (!isScramblerBuild) {
        scramblerBestLookIntervalId = null;
        scramblerBestLookTimeoutId = null;
        return;
    }

    showScramblerBestLook();
    scramblerBestLookIntervalId = window.setInterval(showScramblerBestLook, 10000);
};

const showCafeBestLook = () => {
    if (!cafeBestLook) {
        return;
    }

    cafeBestLook.classList.add("is-visible");
    window.clearTimeout(cafeBestLookTimeoutId);
    cafeBestLookTimeoutId = window.setTimeout(() => {
        cafeBestLook.classList.remove("is-visible");
    }, 3000);
};

const showTrackerBestLook = () => {
    if (!trackerBestLook) {
        return;
    }

    trackerBestLook.classList.add("is-visible");
    window.clearTimeout(trackerBestLookTimeoutId);
    trackerBestLookTimeoutId = window.setTimeout(() => {
        trackerBestLook.classList.remove("is-visible");
    }, 3000);
};

const showBobberBestLook = () => {
    if (!bobberBestLook) {
        return;
    }

    bobberBestLook.classList.add("is-visible");
    window.clearTimeout(bobberBestLookTimeoutId);
    bobberBestLookTimeoutId = window.setTimeout(() => {
        bobberBestLook.classList.remove("is-visible");
    }, 3000);
};

const updateBratBestLookHint = () => {
    if (!bratBestLook || !greyColorButton) {
        return;
    }

    const isBratBuild = activeCustomType === "BRAT";
    window.clearInterval(bratBestLookIntervalId);
    window.clearTimeout(bratBestLookTimeoutId);
    bratBestLook.classList.remove("is-visible");

    if (!isBratBuild) {
        bratBestLookIntervalId = null;
        bratBestLookTimeoutId = null;
        return;
    }

    showBratBestLook();
    bratBestLookIntervalId = window.setInterval(showBratBestLook, 10000);
};

const updateCafeBestLookHint = () => {
    if (!cafeBestLook || !greyColorButton) {
        return;
    }

    const isCafeBuild = activeCustomType === "CAFE RACER";
    window.clearInterval(cafeBestLookIntervalId);
    window.clearTimeout(cafeBestLookTimeoutId);
    cafeBestLook.classList.remove("is-visible");

    if (!isCafeBuild) {
        cafeBestLookIntervalId = null;
        cafeBestLookTimeoutId = null;
        return;
    }

    showCafeBestLook();
    cafeBestLookIntervalId = window.setInterval(showCafeBestLook, 10000);
};

const updateTrackerBestLookHint = () => {
    if (!trackerBestLook || !brownColorButton) {
        return;
    }

    const isTrackerBuild = activeCustomType === "TRACKER";
    window.clearInterval(trackerBestLookIntervalId);
    window.clearTimeout(trackerBestLookTimeoutId);
    trackerBestLook.classList.remove("is-visible");

    if (!isTrackerBuild || brownColorButton.style.display === "none") {
        trackerBestLookIntervalId = null;
        trackerBestLookTimeoutId = null;
        return;
    }

    showTrackerBestLook();
    trackerBestLookIntervalId = window.setInterval(showTrackerBestLook, 10000);
};

const updateBobberBestLookHint = () => {
    if (!bobberBestLook || !blackColorButton) {
        return;
    }

    const isBobberBuild = activeCustomType === "BOBBER";
    window.clearInterval(bobberBestLookIntervalId);
    window.clearTimeout(bobberBestLookTimeoutId);
    bobberBestLook.classList.remove("is-visible");

    if (!isBobberBuild) {
        bobberBestLookIntervalId = null;
        bobberBestLookTimeoutId = null;
        return;
    }

    showBobberBestLook();
    bobberBestLookIntervalId = window.setInterval(showBobberBestLook, 10000);
};

const ensureVoteVisitorId = () => {
    if (!voteVisitorId) {
        voteVisitorId = `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
        saveState();
    }

    return voteVisitorId;
};

const getBuildLabel = (buildId) => customTypeVariants[buildId]?.label || buildId;

const getSortedBuildVotes = () => BUILD_VOTE_ORDER
    .map((buildId) => ({
        id: buildId,
        label: getBuildLabel(buildId),
        votes: Number(buildVotes[buildId] || 0)
    }))
    .sort((left, right) => right.votes - left.votes);

const renderBuildStats = () => {
    if (!buildStatsBoard) {
        return;
    }

    const sortedBuilds = getSortedBuildVotes();
    const topVotes = Math.max(sortedBuilds[0]?.votes || 0, 1);
    const hasVotes = sortedBuilds.some((build) => build.votes > 0);

    buildStatsBoard.innerHTML = sortedBuilds.map((build, index) => {
        const isLeader = hasVotes && index === 0 && build.votes > 0;
        const fillWidth = build.votes > 0 ? Math.max((build.votes / topVotes) * 100, 8) : 0;

        return `
            <article class="build-stat-card">
                <div class="build-stat-rank">#${index + 1}</div>
                <div class="build-stat-main">
                    <div class="build-stat-name-row">
                        <h3 class="build-stat-name">${build.label}</h3>
                        ${isLeader ? '<span class="build-stat-badge">Most Built</span>' : ""}
                    </div>
                    <div class="build-stat-meter" aria-hidden="true">
                        <div class="build-stat-fill" style="width: ${fillWidth}%"></div>
                    </div>
                </div>
                <div class="build-stat-votes">${build.votes} vote${build.votes === 1 ? "" : "s"}</div>
            </article>
        `;
    }).join("");
};

const renderBuildVoteActions = () => {
    if (!buildVoteActions) {
        return;
    }

    buildVoteActions.innerHTML = BUILD_VOTE_ORDER.map((buildId) => `
        <button
            class="build-vote-button${activeBuildVote === buildId ? " is-selected" : ""}"
            type="button"
            data-build-vote="${buildId}"
        >
            ${getBuildLabel(buildId)}
        </button>
    `).join("");

    if (buildVoteText) {
        buildVoteText.textContent = !isBuildVoteApiReady
            ? "Connect the Vercel vote API first so this section can save shared survey results."
            : activeBuildVote
            ? `Your current vote is ${getBuildLabel(activeBuildVote)}. You can still change it anytime.`
            : "Pick your favorite build style and your vote will update the count below.";
    }

    if (buildVoteNote) {
        buildVoteNote.textContent = !isBuildVoteApiReady
            ? "This project now expects a Vercel serverless function with Redis storage for shared counting."
            : activeBuildVote
            ? "Your vote is saved on this browser and updates the build ranking instantly."
            : "Your vote is saved on this browser.";
    }
};

const syncBuildVotesFromApi = async () => {
    const visitorId = ensureVoteVisitorId();

    try {
        const response = await fetch(`${BUILD_VOTES_API_PATH}?visitorId=${encodeURIComponent(visitorId)}`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Vote sync failed with status ${response.status}`);
        }

        const payload = await response.json();
        buildVotes = {
            ...DEFAULT_BUILD_VOTES,
            ...(payload.votes || {})
        };
        activeBuildVote = payload.visitorVote && BUILD_VOTE_ORDER.includes(payload.visitorVote)
            ? payload.visitorVote
            : "";
        isBuildVoteApiReady = true;
    } catch (error) {
        isBuildVoteApiReady = false;
    }

    renderBuildStats();
    renderBuildVoteActions();
};

const submitBuildVote = async (buildId) => {
    if (!BUILD_VOTE_ORDER.includes(buildId)) {
        return;
    }

    if (!isBuildVoteApiReady || isBuildVoteSubmitting) {
        return;
    }

    isBuildVoteSubmitting = true;

    try {
        const response = await fetch(BUILD_VOTES_API_PATH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                visitorId: ensureVoteVisitorId(),
                buildId
            })
        });

        if (!response.ok) {
            throw new Error(`Vote submit failed with status ${response.status}`);
        }

        const payload = await response.json();
        buildVotes = {
            ...DEFAULT_BUILD_VOTES,
            ...(payload.votes || {})
        };
        activeBuildVote = payload.visitorVote && BUILD_VOTE_ORDER.includes(payload.visitorVote)
            ? payload.visitorVote
            : buildId;
        isBuildVoteApiReady = true;
    } catch (error) {
        isBuildVoteApiReady = false;
    } finally {
        isBuildVoteSubmitting = false;
        renderBuildStats();
        renderBuildVoteActions();
    }
};

const getActiveFeatures = () => {
    if (activeCustomType === "SCRAMBLER") {
        return {
            ...baseFeatures,
            ...scramblerFeatureOverrides
        };
    }

    if (activeCustomType === "BRAT") {
        return {
            ...baseFeatures,
            ...bratFeatureOverrides
        };
    }

    if (activeCustomType === "CAFE RACER") {
        return {
            ...baseFeatures,
            ...cafeRacerFeatureOverrides
        };
    }

    if (activeCustomType === "TRACKER") {
        return {
            ...baseFeatures,
            ...trackerFeatureOverrides
        };
    }

    if (activeCustomType === "BOBBER") {
        return {
            ...baseFeatures,
            ...bobberFeatureOverrides
        };
    }

    return baseFeatures;
};

const renderFeatures = () => {
    const features = getActiveFeatures();

    featureCards.forEach((card) => {
        const featureId = card.dataset.featureId;
        const feature = features[featureId];

        if (!feature) {
            return;
        }

        const featureTitle = card.querySelector("h3");
        const featureMedia = card.querySelector(".feature-media");

        card.dataset.featureTitle = feature.title;
        card.dataset.featureDescription = feature.description;

        if (featureTitle) {
            featureTitle.textContent = feature.title;
        }

        if (featureMedia) {
            featureMedia.style.backgroundImage = `url("${feature.image}")`;
            featureMedia.style.backgroundPosition = feature.position;
            featureMedia.style.backgroundSize = feature.size || "cover";
        }
    });

    if (!featureTooltip.hidden) {
        closeFeatureTooltip();
    }
};

const renderScramblerPartsSection = () => {
    if (!scramblerPartsSection) {
        return;
    }

    scramblerPartsSection.hidden = activeCustomType !== "SCRAMBLER";
};

const renderBratPartsSection = () => {
    if (!bratPartsSection) {
        return;
    }

    bratPartsSection.hidden = activeCustomType !== "BRAT";

    if (bratBikeImage) {
        bratBikeImage.src = getBratBikeSrc();
    }
};

const renderCafePartsSection = () => {
    if (!cafePartsSection) {
        return;
    }

    cafePartsSection.hidden = activeCustomType !== "CAFE RACER";

    if (cafeBikeImage) {
        cafeBikeImage.src = getCafeBikeSrc();
    }
};

const renderTrackerPartsSection = () => {
    if (!trackerPartsSection) {
        return;
    }

    trackerPartsSection.hidden = activeCustomType !== "TRACKER";

    if (trackerBikeImage) {
        trackerBikeImage.src = getTrackerBikeSrc();
    }
};

const renderBobberPartsSection = () => {
    if (!bobberPartsSection) {
        return;
    }

    bobberPartsSection.hidden = activeCustomType !== "BOBBER";

    if (bobberBikeImage) {
        bobberBikeImage.src = getBobberBikeSrc();
    }
};

const updateBikeCreditVisibility = () => {
    if (!bikeCreditTag || !bikeImage) {
        return;
    }

    const isScramblerCredit = activeCustomType === "SCRAMBLER";
    const isBratCredit = activeCustomType === "BRAT" && Boolean(BRAT_CREDIT_LINKS[activeColor]);
    const isCafeCredit = activeCustomType === "CAFE RACER" && Boolean(CAFE_RACER_CREDIT_LINKS[activeColor]);
    const isTrackerCredit = activeCustomType === "TRACKER" && Boolean(TRACKER_CREDIT_LINKS[activeColor]);
    const isBobberCredit = activeCustomType === "BOBBER" && Boolean(BOBBER_CREDIT_LINKS[activeColor]);
    const shouldShow = (isScramblerCredit || isBratCredit || isCafeCredit || isTrackerCredit || isBobberCredit) && isBikeCreditVisible;
    const currentCreditLink = isScramblerCredit
        ? (SCRAMBLER_CREDIT_LINKS[activeColor] || SCRAMBLER_CREDIT_LINKS.red || "#")
        : isBratCredit
        ? (BRAT_CREDIT_LINKS[activeColor] || "#")
        : isCafeCredit
        ? (CAFE_RACER_CREDIT_LINKS[activeColor] || "#")
        : isTrackerCredit
        ? (TRACKER_CREDIT_LINKS[activeColor] || "#")
        : (BOBBER_CREDIT_LINKS[activeColor] || "#");

    bikeCreditTag.hidden = !shouldShow;
    bikeCreditTag.classList.toggle("is-visible", shouldShow);
    bikeCreditTag.href = currentCreditLink;
    bikeCreditTag.textContent = activeCustomType === "BRAT"
        ? (activeColor === "grey" ? "Revolt Cycles" : activeColor === "black" ? "La Garahe" : "moecabral_")
        : activeCustomType === "CAFE RACER"
        ? (activeColor === "black" ? "MaxiMoto" : activeColor === "grey" ? "ironmacchinaph" : "La Garahe")
        : activeCustomType === "TRACKER"
        ? (activeColor === "red" ? "Revolt Cycles" : activeColor === "brown" ? "apecustoms" : "3b.customs.philippines")
        : activeCustomType === "BOBBER"
        ? (activeColor === "black" ? "Route 35 Kustoms" : activeColor === "red" ? "FNG Works" : "DB Classics")
        : "La Garahe";
    bikeImage.classList.toggle("is-credit-clickable", isScramblerCredit || isBratCredit || isCafeCredit || isTrackerCredit || isBobberCredit);
};

const renderScramblerPartSpotlight = () => {
    if (!scramblerPartSpotlight || !scramblerPartSpotlightMedia || !scramblerPartTitle || !scramblerPartDescription || !scramblerPartLink) {
        return;
    }

    if (activeCustomType !== "SCRAMBLER") {
        scramblerPartSpotlight.hidden = true;
        scramblerPartButtons.forEach((button) => button.classList.remove("is-active"));
        isScramblerPartSpotlightOpen = false;
        return;
    }

    const part = scramblerPartDetails[activeScramblerPart] || scramblerPartDetails.headlight;
    const resolvedImage = typeof part.image === "function" ? part.image() : part.image;
    scramblerPartSpotlight.hidden = !isScramblerPartSpotlightOpen;
    scramblerPartSpotlight.dataset.partId = activeScramblerPart;
    scramblerBikeSpotlight?.classList.toggle("is-part-open", isScramblerPartSpotlightOpen);

    if (!isScramblerPartSpotlightOpen) {
        scramblerPartButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.partId === activeScramblerPart);
        });
        return;
    }

    scramblerPartTitle.textContent = part.title;
    scramblerPartDescription.textContent = part.description;
    scramblerPartLink.href = part.link || "#";
    scramblerPartSpotlightMedia.style.backgroundImage = `url("${resolvedImage}")`;
    scramblerPartSpotlightMedia.style.backgroundPosition = part.position || "center";
    scramblerPartSpotlightMedia.style.backgroundSize = part.size || "cover";
    scramblerPartSpotlight.classList.remove("is-animating");
    void scramblerPartSpotlight.offsetWidth;
    scramblerPartSpotlight.classList.add("is-animating");

    scramblerPartButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.partId === activeScramblerPart);
    });
};

const renderBratPartSpotlight = () => {
    if (!bratPartSpotlight || !bratPartSpotlightMedia || !bratPartTitle || !bratPartDescription || !bratPartLink) {
        return;
    }

    if (activeCustomType !== "BRAT") {
        bratPartSpotlight.hidden = true;
        bratPartButtons.forEach((button) => button.classList.remove("is-active"));
        isBratPartSpotlightOpen = false;
        return;
    }

    const part = bratPartDetails[activeBratPart] || bratPartDetails.headlight;
    const resolvedImage = typeof part.image === "function" ? part.image() : part.image;
    bratPartSpotlight.hidden = !isBratPartSpotlightOpen;
    bratPartSpotlight.dataset.partId = activeBratPart;
    bratBikeSpotlight?.classList.toggle("is-part-open", isBratPartSpotlightOpen);

    if (!isBratPartSpotlightOpen) {
        bratPartButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.bratPartId === activeBratPart);
        });
        return;
    }

    bratPartTitle.textContent = part.title;
    bratPartDescription.textContent = part.description;
    bratPartLink.href = part.link || "#";
    bratPartLink.textContent = part.link && part.link !== "#" ? "Buy Link" : "View Part";
    bratPartSpotlightMedia.style.backgroundImage = `url("${resolvedImage}")`;
    bratPartSpotlightMedia.style.backgroundPosition = part.position || "center";
    bratPartSpotlightMedia.style.backgroundSize = part.size || "cover";
    bratPartSpotlight.classList.remove("is-animating");
    void bratPartSpotlight.offsetWidth;
    bratPartSpotlight.classList.add("is-animating");

    bratPartButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.bratPartId === activeBratPart);
    });
};

const renderCafePartSpotlight = () => {
    if (!cafePartSpotlight || !cafePartSpotlightMedia || !cafePartTitle || !cafePartDescription || !cafePartLink) {
        return;
    }

    if (activeCustomType !== "CAFE RACER") {
        cafePartSpotlight.hidden = true;
        cafePartButtons.forEach((button) => button.classList.remove("is-active"));
        isCafePartSpotlightOpen = false;
        return;
    }

    const part = cafePartDetails[activeCafePart] || cafePartDetails["seat-cowling"];
    const resolvedImage = typeof part.image === "function" ? part.image() : part.image;
    cafePartSpotlight.hidden = !isCafePartSpotlightOpen;
    cafePartSpotlight.dataset.partId = activeCafePart;
    cafeBikeSpotlight?.classList.toggle("is-part-open", isCafePartSpotlightOpen);

    if (!isCafePartSpotlightOpen) {
        cafePartButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.cafePartId === activeCafePart);
        });
        return;
    }

    cafePartTitle.textContent = part.title;
    cafePartDescription.textContent = part.description;
    cafePartLink.href = part.link || "#";
    cafePartLink.textContent = part.link && part.link !== "#" ? "Buy Link" : "View Part";
    cafePartSpotlightMedia.style.backgroundImage = `url("${resolvedImage}")`;
    cafePartSpotlightMedia.style.backgroundPosition = part.position || "center";
    cafePartSpotlightMedia.style.backgroundSize = part.size || "cover";
    cafePartSpotlight.classList.remove("is-animating");
    void cafePartSpotlight.offsetWidth;
    cafePartSpotlight.classList.add("is-animating");

    cafePartButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.cafePartId === activeCafePart);
    });
};

const renderTrackerPartSpotlight = () => {
    if (!trackerPartSpotlight || !trackerPartSpotlightMedia || !trackerPartTitle || !trackerPartDescription || !trackerPartLink) {
        return;
    }

    if (activeCustomType !== "TRACKER") {
        trackerPartSpotlight.hidden = true;
        trackerPartButtons.forEach((button) => button.classList.remove("is-active"));
        isTrackerPartSpotlightOpen = false;
        return;
    }

    const part = trackerPartDetails[activeTrackerPart] || trackerPartDetails.design;
    trackerPartSpotlight.hidden = !isTrackerPartSpotlightOpen;
    trackerPartSpotlight.dataset.partId = activeTrackerPart;
    trackerBikeSpotlight?.classList.toggle("is-part-open", isTrackerPartSpotlightOpen);

    if (!isTrackerPartSpotlightOpen) {
        trackerPartButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.trackerPartId === activeTrackerPart);
        });
        return;
    }

    trackerPartTitle.textContent = part.title;
    trackerPartDescription.textContent = part.description;
    trackerPartLink.href = part.link || "#";
    trackerPartLink.textContent = part.link && part.link !== "#" ? "Buy Link" : "View Part";
    trackerPartSpotlightMedia.style.backgroundImage = `url("${part.image}")`;
    trackerPartSpotlightMedia.style.backgroundPosition = part.position || "center";
    trackerPartSpotlightMedia.style.backgroundSize = part.size || "cover";
    trackerPartSpotlight.classList.remove("is-animating");
    void trackerPartSpotlight.offsetWidth;
    trackerPartSpotlight.classList.add("is-animating");

    trackerPartButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.trackerPartId === activeTrackerPart);
    });
};

const renderBobberPartSpotlight = () => {
    if (!bobberPartSpotlight || !bobberPartSpotlightMedia || !bobberPartTitle || !bobberPartDescription || !bobberPartLink) {
        return;
    }

    if (activeCustomType !== "BOBBER") {
        bobberPartSpotlight.hidden = true;
        bobberPartButtons.forEach((button) => button.classList.remove("is-active"));
        isBobberPartSpotlightOpen = false;
        return;
    }

    const part = bobberPartDetails[activeBobberPart] || bobberPartDetails.design;
    bobberPartSpotlight.hidden = !isBobberPartSpotlightOpen;
    bobberPartSpotlight.dataset.partId = activeBobberPart;
    bobberBikeSpotlight?.classList.toggle("is-part-open", isBobberPartSpotlightOpen);

    if (!isBobberPartSpotlightOpen) {
        bobberPartButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.bobberPartId === activeBobberPart);
        });
        return;
    }

    bobberPartTitle.textContent = part.title;
    bobberPartDescription.textContent = part.description;
    bobberPartLink.href = part.link || "#";
    bobberPartLink.textContent = part.link && part.link !== "#" ? "Buy Link" : "View Part";
    bobberPartSpotlightMedia.style.backgroundImage = `url("${part.image}")`;
    bobberPartSpotlightMedia.style.backgroundPosition = part.position || "center";
    bobberPartSpotlightMedia.style.backgroundSize = part.size || "cover";
    bobberPartSpotlight.classList.remove("is-animating");
    void bobberPartSpotlight.offsetWidth;
    bobberPartSpotlight.classList.add("is-animating");

    bobberPartButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.bobberPartId === activeBobberPart);
    });
};

const renderBike = () => {
    const isTrackerBuild = activeCustomType === "TRACKER";

    if (!isTrackerBuild && activeColor === "brown") {
        activeColor = "red";
    }

    if (brownColorButton) {
        brownColorButton.style.display = isTrackerBuild ? "" : "none";
    }

    const colorVariant = bikeVariants[activeColor];
    const customTypeVariant = customTypeVariants[activeCustomType] || customTypeVariants.default;
    const customTypeSrc = customTypeVariant.srcByColor?.[activeColor] || customTypeVariant.src;
    const usingCustomBike = Boolean(customTypeSrc);

    bikeImage.src = usingCustomBike ? customTypeSrc : colorVariant.src;
    bikeImage.alt = usingCustomBike
        ? `Honda TMX 125 ${customTypeVariant.label.toLowerCase()} custom build`
        : `Honda TMX 125 motorcycle in ${activeColor}`;
    bikeImage.classList.toggle("is-scrambler-build", activeCustomType === "SCRAMBLER");
    bikeImage.classList.toggle("is-cafe-grey-build", activeCustomType === "CAFE RACER" && activeColor === "grey");

    colorName.textContent = usingCustomBike ? customTypeVariant.bikeLabel : colorVariant.label;
    colorQuote.textContent = usingCustomBike ? customTypeVariant.bikeQuote : colorVariant.quote;
    quoteTitle.textContent = usingCustomBike ? customTypeVariant.bikeLabel : colorVariant.label;
    quoteText.textContent = usingCustomBike ? customTypeVariant.bikeQuote : colorVariant.quote;
    eyebrow.textContent = usingCustomBike ? "CUSTOM BUILD" : "BASE BIKE";
    customTypeTriggerLabel.textContent = customTypeVariant.label;

    colorButtons.forEach((item) => {
        const isActive = item.dataset.color === activeColor;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
    });

    renderFeatures();
    renderScramblerPartsSection();
    renderBratPartsSection();
    renderCafePartsSection();
    renderTrackerPartsSection();
    renderBobberPartsSection();
    renderScramblerPartSpotlight();
    renderBratPartSpotlight();
    renderCafePartSpotlight();
    renderTrackerPartSpotlight();
    renderBobberPartSpotlight();
    updateBikeCreditVisibility();
    updateScrollCueState();
    renderBuildVoteActions();
    updateScramblerBestLookHint();
    updateBratBestLookHint();
    updateCafeBestLookHint();
    updateTrackerBestLookHint();
    updateBobberBestLookHint();
};

colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeColor = button.dataset.color;
        renderBike();
        saveState();
    });
});

themeToggle?.addEventListener("click", () => {
    activeTheme = activeTheme === "dark" ? "light" : "dark";
    applyTheme();
    saveState();
});

const closeCustomTypeMenu = () => {
    if (!customTypeMenu || !customTypeTrigger || !customTypeWrap) {
        return;
    }
    customTypeMenu.hidden = true;
    customTypeTrigger.setAttribute("aria-expanded", "false");
    customTypeWrap.classList.remove("is-open");
};

if (customTypeTrigger && customTypeMenu && customTypeWrap) {
    customTypeTrigger.addEventListener("click", () => {
        const willOpen = customTypeMenu.hidden;
        customTypeMenu.hidden = !willOpen;
        customTypeTrigger.setAttribute("aria-expanded", String(willOpen));
        customTypeWrap.classList.toggle("is-open", willOpen);
    });

    customTypeItems.forEach((item) => {
        item.addEventListener("click", () => {
            activeCustomType = item.dataset.customType;
            if (activeCustomType === "SCRAMBLER") {
                activeColor = "red";
            }
            if (activeCustomType === "TRACKER") {
                activeColor = "brown";
            }
            if (activeCustomType === "BRAT") {
                activeColor = "grey";
            }
            if (activeCustomType === "CAFE RACER") {
                activeColor = "grey";
            }
            if (activeCustomType === "BOBBER") {
                activeColor = "black";
            }
            renderBike();
            saveState();
            closeCustomTypeMenu();
        });
    });
}

scrollCue?.addEventListener("click", () => {
    const shouldScrollUp = scrollCue.classList.contains("is-up");

    if (shouldScrollUp) {
        animateWindowScrollTo(0, 900);
        return;
    }

    const targetY = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
    animateWindowScrollTo(targetY, 1600);
});

scramblerPartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeScramblerPart = button.dataset.partId;
        isScramblerPartSpotlightOpen = true;
        renderScramblerPartSpotlight();
    });
});

bratPartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeBratPart = button.dataset.bratPartId;
        isBratPartSpotlightOpen = true;
        renderBratPartSpotlight();
    });
});

cafePartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeCafePart = button.dataset.cafePartId;
        isCafePartSpotlightOpen = true;
        renderCafePartSpotlight();
    });
});

trackerPartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeTrackerPart = button.dataset.trackerPartId;
        isTrackerPartSpotlightOpen = true;
        renderTrackerPartSpotlight();
    });
});

bobberPartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeBobberPart = button.dataset.bobberPartId;
        isBobberPartSpotlightOpen = true;
        renderBobberPartSpotlight();
    });
});

scramblerGuideTipClose?.addEventListener("click", () => {
    if (scramblerGuideTip) {
        scramblerGuideTip.hidden = true;
    }
});

bratGuideTipClose?.addEventListener("click", () => {
    if (bratGuideTip) {
        bratGuideTip.hidden = true;
    }
});

cafeGuideTipClose?.addEventListener("click", () => {
    if (cafeGuideTip) {
        cafeGuideTip.hidden = true;
    }
});

trackerGuideTipClose?.addEventListener("click", () => {
    if (trackerGuideTip) {
        trackerGuideTip.hidden = true;
    }
});

bobberGuideTipClose?.addEventListener("click", () => {
    if (bobberGuideTip) {
        bobberGuideTip.hidden = true;
    }
});

buildVoteActions?.addEventListener("click", (event) => {
    const button = event.target.closest(".build-vote-button[data-build-vote]");
    if (!button) {
        return;
    }

    submitBuildVote(button.dataset.buildVote);
});

scramblerPartClose?.addEventListener("click", () => {
    isScramblerPartSpotlightOpen = false;
    renderScramblerPartSpotlight();
});

bratPartClose?.addEventListener("click", () => {
    isBratPartSpotlightOpen = false;
    renderBratPartSpotlight();
});

cafePartClose?.addEventListener("click", () => {
    isCafePartSpotlightOpen = false;
    renderCafePartSpotlight();
});

trackerPartClose?.addEventListener("click", () => {
    isTrackerPartSpotlightOpen = false;
    renderTrackerPartSpotlight();
});

bobberPartClose?.addEventListener("click", () => {
    isBobberPartSpotlightOpen = false;
    renderBobberPartSpotlight();
});

    if (bikeImage && bikeCreditTag) {
        const isWithinBikeHotspot = (event) => {
        const rect = bikeImage.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const xRatio = offsetX / rect.width;
        const yRatio = offsetY / rect.height;
        const isScramblerCredit = activeCustomType === "SCRAMBLER";
        const isBratCredit = activeCustomType === "BRAT" && Boolean(BRAT_CREDIT_LINKS[activeColor]);
        const isCafeCredit = activeCustomType === "CAFE RACER" && Boolean(CAFE_RACER_CREDIT_LINKS[activeColor]);
        const isTrackerCredit = activeCustomType === "TRACKER" && Boolean(TRACKER_CREDIT_LINKS[activeColor]);
        const isBobberCredit = activeCustomType === "BOBBER" && Boolean(BOBBER_CREDIT_LINKS[activeColor]);

            if (!isScramblerCredit && !isBratCredit && !isCafeCredit && !isTrackerCredit && !isBobberCredit) {
                return false;
            }

            return xRatio >= 0.2 && xRatio <= 0.86 && yRatio >= 0.18 && yRatio <= 0.86;
        };

        bikeImage.addEventListener("pointerenter", () => {
            const isScramblerCredit = activeCustomType === "SCRAMBLER";
            const isBratCredit = activeCustomType === "BRAT" && Boolean(BRAT_CREDIT_LINKS[activeColor]);
            const isCafeCredit = activeCustomType === "CAFE RACER" && Boolean(CAFE_RACER_CREDIT_LINKS[activeColor]);
            const isTrackerCredit = activeCustomType === "TRACKER" && Boolean(TRACKER_CREDIT_LINKS[activeColor]);
            const isBobberCredit = activeCustomType === "BOBBER" && Boolean(BOBBER_CREDIT_LINKS[activeColor]);

            if (!isScramblerCredit && !isBratCredit && !isCafeCredit && !isTrackerCredit && !isBobberCredit) {
                return;
            }
        });

    bikeImage.addEventListener("pointermove", (event) => {
        const rect = bikeImage.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        isBikeCreditVisible = isWithinBikeHotspot(event);
        updateBikeCreditVisibility();

        if (!isBikeCreditVisible) {
            return;
        }

        bikeCreditTag.style.transform = `translate3d(${offsetX + 18}px, ${offsetY - 18}px, 0) scale(1)`;
    });

    const hideBikeCredit = () => {
        isBikeCreditVisible = false;
        updateBikeCreditVisibility();
    };

    bikeImage.addEventListener("pointerleave", hideBikeCredit);
    bikeCreditTag.addEventListener("pointerleave", hideBikeCredit);

    bikeImage.addEventListener("click", () => {
        const isScramblerCredit = activeCustomType === "SCRAMBLER";
        const isBratCredit = activeCustomType === "BRAT" && Boolean(BRAT_CREDIT_LINKS[activeColor]);
        const isCafeCredit = activeCustomType === "CAFE RACER" && Boolean(CAFE_RACER_CREDIT_LINKS[activeColor]);
        const isTrackerCredit = activeCustomType === "TRACKER" && Boolean(TRACKER_CREDIT_LINKS[activeColor]);
        const isBobberCredit = activeCustomType === "BOBBER" && Boolean(BOBBER_CREDIT_LINKS[activeColor]);

        if ((!isScramblerCredit && !isBratCredit && !isCafeCredit && !isTrackerCredit && !isBobberCredit) || !isBikeCreditVisible) {
            return;
        }

        const currentCreditLink = isScramblerCredit
            ? (SCRAMBLER_CREDIT_LINKS[activeColor] || SCRAMBLER_CREDIT_LINKS.red)
            : isBratCredit
            ? BRAT_CREDIT_LINKS[activeColor]
            : isCafeCredit
            ? CAFE_RACER_CREDIT_LINKS[activeColor]
            : isTrackerCredit
            ? TRACKER_CREDIT_LINKS[activeColor]
            : BOBBER_CREDIT_LINKS[activeColor];

        if (currentCreditLink) {
            window.open(currentCreditLink, "_blank", "noopener,noreferrer");
        }
    });
}

const positionTooltip = (card) => {
    const cardRect = card.getBoundingClientRect();
    const tooltipCard = featureTooltip.firstElementChild;

    featureTooltip.style.left = "0px";
    featureTooltip.style.top = "0px";
    featureTooltip.hidden = false;

    const tooltipRect = tooltipCard.getBoundingClientRect();
    const spacing = 14;
    let left = window.scrollX + cardRect.left + (cardRect.width / 2) - (tooltipRect.width / 2);
    let top = window.scrollY + cardRect.top - tooltipRect.height - spacing;

    if (top < window.scrollY + 12) {
        top = window.scrollY + cardRect.bottom + spacing;
    }

    const minLeft = window.scrollX + 12;
    const maxLeft = window.scrollX + window.innerWidth - tooltipRect.width - 12;
    left = Math.min(Math.max(left, minLeft), maxLeft);

    featureTooltip.style.left = `${left}px`;
    featureTooltip.style.top = `${top}px`;
};

const openFeatureTooltip = (card) => {
    featureTooltipTitle.textContent = card.dataset.featureTitle;
    featureTooltipText.textContent = card.dataset.featureDescription;
    positionTooltip(card);
};

const closeFeatureTooltip = () => {
    featureTooltip.hidden = true;
};

if (featuresViewport && featuresPrev && featuresNext) {
    const getScrollAmount = () => Math.min(featuresViewport.clientWidth * 0.9, 980);
    let isPointerDown = false;
    let movedWhileDragging = false;
    let startX = 0;
    let startScrollLeft = 0;

    featuresPrev.addEventListener("click", () => {
        featuresViewport.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });

    featuresNext.addEventListener("click", () => {
        featuresViewport.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });

    featuresViewport.addEventListener("mousedown", (event) => {
        isPointerDown = true;
        movedWhileDragging = false;
        startX = event.clientX;
        startScrollLeft = featuresViewport.scrollLeft;
        featuresViewport.classList.add("is-dragging");
    });

    window.addEventListener("mousemove", (event) => {
        if (!isPointerDown) {
            return;
        }

        const distance = event.clientX - startX;
        if (Math.abs(distance) > 4) {
            movedWhileDragging = true;
        }
        featuresViewport.scrollLeft = startScrollLeft - distance;
    });

    const stopDragging = () => {
        if (!isPointerDown) {
            return;
        }

        isPointerDown = false;
        featuresViewport.classList.remove("is-dragging");
    };

    window.addEventListener("mouseup", stopDragging);

    featureCards.forEach((card) => {
        card.addEventListener("click", (event) => {
            if (movedWhileDragging) {
                event.preventDefault();
                event.stopPropagation();
                movedWhileDragging = false;
                return;
            }
            openFeatureTooltip(card);
        });
    });
}

featureCards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openFeatureTooltip(card);
        }
    });
});

featureModalClose.addEventListener("click", closeFeatureTooltip);

document.addEventListener("click", (event) => {
    const clickedCard = event.target.closest(".feature-card");
    const clickedTooltip = event.target.closest(".feature-tooltip-card");
    const clickedCustomType = event.target.closest(".custom-type-wrap");

    if (!clickedCard && !clickedTooltip && !featureTooltip.hidden) {
        closeFeatureTooltip();
    }

    if (!clickedCustomType) {
        closeCustomTypeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !featureTooltip.hidden) {
        closeFeatureTooltip();
    }
    if (event.key === "Escape") {
        closeCustomTypeMenu();
    }
});

window.addEventListener("resize", () => {
    if (!featureTooltip.hidden) {
        closeFeatureTooltip();
    }
    updateScrollCueState();
});

window.addEventListener("scroll", updateScrollCueState, { passive: true });

document.addEventListener("copy", (event) => {
    event.preventDefault();
});

document.addEventListener("cut", (event) => {
    event.preventDefault();
});

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});

document.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

loadSavedState();
applyTheme();
renderBike();
renderBuildStats();
renderBuildVoteActions();
updateScrollCueState();
syncBuildVotesFromApi();

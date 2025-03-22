import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

// init arcjet
export const arcjst = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip", "userAgent"],
    rules: [
        shield({mode:"LIVE"}),
        detectBot({
            mode: "LIVE",
            allow:[
                "CATEGORY:SEARCH_ENGINE"
                
            ]
        }),
        // retelimiting
        tokenBucket({
            mode: "LIVE",
            limit: 10,
            interval: 10,
            capacity:10
        })
    ]
})
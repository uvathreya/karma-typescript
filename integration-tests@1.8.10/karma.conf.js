module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "node_modules/core-js/client/shim.js" },
            { pattern: "node_modules/zone.js/dist/zone.js" },
            { pattern: "node_modules/zone.js/dist/long-stack-trace-zone.js" },
            { pattern: "node_modules/zone.js/dist/proxy.js" },
            { pattern: "node_modules/zone.js/dist/sync-test.js" },
            { pattern: "node_modules/zone.js/dist/jasmine-patch.js" },
            { pattern: "node_modules/zone.js/dist/async-test.js" },
            { pattern: "node_modules/zone.js/dist/fake-async-test.js" },
            { pattern: "src/**/*.+(ts|tsx)" }
        ],

        preprocessors: {
            "src/**/*.+(ts|tsx)": ["karma-typescript"]
        },

        karmaTypescriptConfig: {
            reports:
            {
                "html": "coverage",
                "text-summary": ""
            }
        },

        reporters: ["progress", "karma-typescript"],

        browsers: ["Chrome"],

        // ci settings...
        captureTimeout: 2000,
        browserDisconnectTimeout: 2000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 10000,
    });
};

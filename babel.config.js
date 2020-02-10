module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                targets: {
                    node: "current"
                }
            }
        ],
        [
            "@babel/preset-react", {
                development: process.env.BABEL_ENV === "development",
            }
        ]
    ],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                alias: {
                    "@utils": "./src/components/utils",
                    "@components": "./src/components",
                    "@theme": "./src/themes",
                    "@images": "./src/images",
                    "@routes": "./src/routes",
                    "@sharedComponents": "./src/sharedComponent",
                    "@screens": "./src/screens"
                },
                cwd: "packagejson"
            }
        ]
    ],
};
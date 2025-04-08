export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.{css|less|scss|sass}$": "identity-obj-proxy",
        "\\.svg$": "<rootDir>/__mocks__/svgMock.js"
    },
    setUpFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest"
    }
}
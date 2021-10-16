const app = require("./app")
// @ponicode
describe("app", () => {
    test("0", async () => {
        await app("GET", { end: () => 1 })
    })

    test("1", async () => {
        await app("PUT", { end: () => 100 })
    })

    test("2", async () => {
        await app("GET", { end: () => 0 })
    })

    test("3", async () => {
        await app(500, { end: () => -100 })
    })

    test("4", async () => {
        await app(429, { end: () => 100 })
    })

    test("5", async () => {
        await app(-Infinity, { end: () => -Infinity })
    })
})

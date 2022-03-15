const values = require("./node_modules/underscore/cjs/values.js")
const findValues = (obj) => {
    if (obj && typeof (obj) === "object" && !Array.isArray(obj)) {
        return values(obj)
    }
    return []
}

module.exports = findValues
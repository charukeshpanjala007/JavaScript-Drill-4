const keys = require("./node_modules/underscore/cjs/keys.js")
const findKeys = (obj) => {
    if (obj && typeof (obj) === "object" && !Array.isArray(obj)) {
        return keys(obj)
    }
    return []
}

module.exports = findKeys
const map = require("underscore/cjs/mapObject.js")

const mapObject = (obj) => {
    if (obj && typeof (obj) === "object" && !Array.isArray(obj)) {
        return (map(obj, function (key, value) {
            return `${key} is ${value}`
        }))
    }
    return {}

}

module.exports = mapObject
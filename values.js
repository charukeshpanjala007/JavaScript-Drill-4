const values = function (obj) {
    let output = []
    if (obj && typeof (obj) === "object" && !Array.isArray(obj)) {
        for (let key in obj) {
            let value = obj[key]
            value && typeof (value) !== "function" && output.push(value)
        }
    }
    return output
}

module.exports = values
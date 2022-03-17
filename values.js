const values = function (obj) {
    let output = []
    if (obj && typeof (obj) === "object" && !Array.isArray(obj)) {
        for (let key in obj) {
            let value = obj[key]
            value  && output.push(value)
        }
    }
    return output
}

module.exports = values
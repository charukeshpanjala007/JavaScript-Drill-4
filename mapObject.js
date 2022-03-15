const convertValueToString = (key, value) =>{
    return (`${key} is ${value}`)

}

const mapObject = function (obj, cb=convertValueToString) {
    let output = {}
    if (obj && typeof (obj) === "object" && !Array.isArray(obj)) {
        for (let key in obj) {
            let value = obj[key]
            const updatedValue = cb(key, value)
            output[key] = updatedValue
        }
    }
    return output
}

module.exports = mapObject
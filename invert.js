const invert = function (obj) {
    let output = {}
    if (obj && typeof (obj) === "object" && !Array.isArray(obj)) {
        for (let key in obj) {
            let value = obj[key]
            if(key && value){
                if(typeof(value)!=="string"){
                    value = JSON.stringify(value)
                }
                output[value] = key
            }
        }
    }
    return output
}

module.exports = invert
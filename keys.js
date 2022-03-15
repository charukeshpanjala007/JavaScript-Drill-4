const keys = function (obj) {
    let output = []
    if(obj && typeof(obj)==="object" && !Array.isArray(obj)){
        for (let key in obj) {
            output.push(key)
        }
    }
    return output
}

module.exports = keys
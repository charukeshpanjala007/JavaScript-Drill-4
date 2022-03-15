const defaults = function (obj, defaultObj) {
    if (defaultObj && obj && typeof (defaultObj) === "object" && typeof (obj) === "object" && !Array.isArray(defaultObj) && !Array.isArray(obj)) {
        for (let key in defaultObj) {
            if (!obj[key]) {
                obj[key] = defaultObj[key]
            }
        }
        return obj
    }else{
        return {}
    }
}
module.exports = defaults
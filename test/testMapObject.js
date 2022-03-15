const problem3 = require("../mapObject.js")

const test1 = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }
const test2 = undefined
const test3 = null
const test4 = [{ name: 'Bruce Wayne', age: 36, location: 'Gotham' }]
const test5 = { starValue: 0, midValue: 20, endValure: 40 }

const increseValueBy10 = (key, value) => {
    return value + 10;
}

console.log("Test Case-1")
let output = problem3(test1)
console.log(output)

console.log("Test Case-2")
output = problem3(test2)
console.log(output)

console.log("Test Case-3")
output = problem3(test3)
console.log(output)

console.log("Test Case-4")
output = problem3(test4)
console.log(output)

console.log("Test Case-5")
output = problem3(test5, increseValueBy10)
console.log(output)
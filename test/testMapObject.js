const problem3 = require("../mapObject.js")

const test1 = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }
const test2 = null
const test3 = undefined
const test4 = [{ name: 'Bruce Wayne', age: 36, location: 'Gotham' }]

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
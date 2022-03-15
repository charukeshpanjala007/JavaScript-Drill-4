const problem1 = require("../keys.js")

const test1 = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }
const test2 = null
const test3 = undefined
const test4 = [{ name: 'Bruce Wayne', age: 36, location: 'Gotham' }]

console.log("Test Case-1")
let output = problem1(test1)
console.log(output)

console.log("Test Case-2")
output = problem1(test2)
console.log(output)

console.log("Test Case-3")
output = problem1(test3)
console.log(output)

console.log("Test Case-4")
output = problem1(test4)
console.log(output)
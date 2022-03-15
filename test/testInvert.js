const problem6 = require("../invert.js")

const test1 = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }
const test2 = undefined
const test3 = null
const test4 = [{ name: 'Bruce Wayne', age: 36, location: 'Gotham' }]
const test5 = { name: 'Bruce Wayne', age: 36, location: 'Gotham' , height: "6'", power: 'wealth'}
console.log("Test Case-1")
let output = problem6(test1)
console.log(output)

console.log("Test Case-2")
output = problem6(test2)
console.log(output)

console.log("Test Case-3")
output = problem6(test3)
console.log(output)

console.log("Test Case-4")
output = problem6(test4)
console.log(output)

console.log("Test Case-5")
output = problem6(test5)
console.log(output)
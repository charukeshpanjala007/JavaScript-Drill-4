const problem6 = require("../defaults.js")

const test1 = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }
const default1 = {location: 'tokyo' , height: "6'", power: 'wealth'}
const test2 = undefined
const test3 = null
const test4 = [{ name: 'Bruce Wayne', age: 36, location: 'Gotham' }]

const test5 = { name: 'Bruce Wayne', age: 36, location: undefined, height: null, power: "" }
const default5 = {location: 'tokyo' , height: "6'", power: 'wealth'}

console.log("Test Case-1")
let output = problem6(test1, default1)
console.log(output)

console.log("Test Case-2")
output = problem6(test1, undefined)
console.log(output)

console.log("Test Case-3")
output = problem6(null)
console.log(output)

console.log("Test Case-4")
output = problem6(test4,test4)
console.log(output)


console.log("Test Case-5")
output = problem6(test5, default5)
console.log(output)
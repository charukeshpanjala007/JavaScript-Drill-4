const problem2 = require("../values.js")

const test1 = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }
const test2 = undefined
const test3 = null
const test4 = {
    name: 'Bruce Wayne', age: 36, location: 'Gotham', helloWorld() {
        console.log("Hello")
    }
}

console.log("Test Case-1")
let output = problem2(test1)
console.log(output)

console.log("Test Case-2")
output = problem2(test2)
console.log(output)

console.log("Test Case-3")
output = problem2(test3)
console.log(output)

console.log("Test Case-4")
output = problem2(test4)
console.log(output)

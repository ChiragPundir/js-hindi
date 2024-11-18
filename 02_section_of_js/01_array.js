const arr = [0,1,2,3,4,5]
const hero = ["shaktiman", "naagraj"]

const myArray = new Array(1,2,3,4)

console.log(arr.push(6)) // 6  push at the end of the array
console.log(arr) // print array arr
console.log(arr.pop())  // it removes the last elements from the array
console.log(arr)
console.log(arr.unshift(-1)) // -1 add in the beginning in the array
console.log(arr)
console.log(arr.shift()) // it removes the first element from the array
console.log(arr)
console.log(arr.includes(2)) // it gives true because 2 is present in the array
console.log(arr.includes(7)) // it gives false
console.log(arr.indexOf(4)) // it gives index 4


// slice and splice functions

console.log("A", arr)
console.log(arr.slice(1,3))
console.log("B",arr)

console.log(arr.splice(1,3))
console.log("C",arr)

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2023,2,2011)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp.toLocaleString())

console.log(Math.floor(Date.now()/100))

// important 
//myDate.toLocaleString('default',{weekday : "long"})

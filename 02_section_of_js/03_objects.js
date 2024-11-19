const sym = Symbol("key1")
const User = {
    fname : "Chirag",
    lname :"Pundir",
    age : 20
     
}

// console.log(User.fname)
// console.log(User["lname"])
// console.log(User["age"])
// console.log(User[sym])

Object.freeze(User) // this function freeze all the values in the oject.
User.age = 54
console.log(User)

const greeting = function(){
    console.log("Hello World!")
}

console.log(greeting)
console.log(greeting())// it gives Hello World!


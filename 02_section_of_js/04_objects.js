// const user = {}
const user = new Object();// it is the singleton object which created by the constructor
user.id = "1123as"
user.name = "chirag"
user.lname = "pundir"
// console.log(user)
  

const Username = {
    email:"h@gmail.com",
    fullname:{
        fname:{
            name: "shivam",
            id : "345ff"
        }
    }
}
console.log(Username.fullname.fname.id)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

const obj3 = {...obj1,...obj2}  //spread operator which spreads the elements of each object bind into the obj3
console.log(obj3)

const obj4 = Object.assign(obj1,obj2)
console.log(obj4)

console.log(Object.keys(user))   // it gives all the keys which are present in the object user
console.log(Object.values(user)) // it gives all the values
console.log(Object.entries(user))  // it gives all the entries in the form of array


const user ={
    username : "chirag",
    id : "abc123",

    WelcomeMessage : function() {
        // console.log(`${this.username},Welcome to the room`)
    //   console.log(this)  // it gives all the context about user object it one by one every information about user
    }
}
// console.log(user.WelcomeMessage())
user.username = "shivam"
// console.log(user.WelcomeMessage())

// console.log(this) // it gives {}  empty because it has no context




// ++ now we will discuss about arrow function with this keyword ++ //

// function addTwo(num1,num2){
//     return num1 +num2
// }

// console.log(addTwo(3,4))


// EXPRESSION AND FUNCTION

// const addTwo = function(num1,num2){
//    return num1 + num2
// }

// console.log(addTwo(3,4))


// ARROW FUNCTION  
//IT IS THE EXPLICIT RETURN

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))

// IT IS THE IMPLICIT RETURN WHEN FUNCTION HAVE ONE LINE FOR IMPLEMENTATION

// const addTwo = (num1,num2) => num1 + num2
// console.log(addTwo(3,4))


// const addTwo = (num1,num2) => (num1 +num2)
// console.log(addTwo(3,4))


const obj = () => ({username: "chirag"})
// console.log(obj().username)


function name(){
    fname = "chirag"
    // console.log(this.fname)
}
name() //it gives chirag

const NAME = () => {
    fname = "pundir"
    console.log(this.fname)
}
NAME()  //it gives th output UNDEFINED




function one(){
    const user = "chirag"

    function two(){
        const id = "abs123"
        console.log(user)
    }
    // console.log(id)  // it gives an error beacuse id has block scope in function two()

    two()
}
one()





if(true){
    const fname = "shivam"

    if(fname === "shivam"){
        const lname = " rana"
        console.log(fname + lname)
    }
    // console.log(lname) // it also give an error because of block scope
}
// console.log(fname) // it also give an error because of block scope


// +++ talk about functions +++ //

console.log(addOne(5)) // this is valid 
function addOne(num){
    return num + 1
}
console.log(addOne(5)) 





//  console.log(addTwo(5)) // it gives an error because this function is an expression so it cannot call before the function
const addTwo = function (num){
    return num + 2
}

 console.log(addTwo(5))
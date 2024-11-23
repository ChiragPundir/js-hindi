function printGivenNumber(...num1){ // ... it is the rest operator, it allows the function to take many arguments
  return num1
}

console.log(printGivenNumber(5,4,6,3,7,3,8))

function printGivenNumber(val1,val2,...num1){ // ... it is the rest operator, it allows the function to take many arguments
    return num1
  }

  console.log(printGivenNumber(12,20))  // output is []  because 12 , 20 are the value of val1 and val2
  console.log(printGivenNumber(12,20,25,4,6)) // output is [25,4,6]
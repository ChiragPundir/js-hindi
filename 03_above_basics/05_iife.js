// Immediately Invoked Function Expression //

// named IIFE
(function conn(){
    console.log("DB Connected")
})();
  
// ;  It is the mandatory for excution of second iife after the first iife.

((name) => {
    console.log(`${name} , he is the good boy!`)
})("chirag")


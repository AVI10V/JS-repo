(function chai(){
    //name iife
    console.log(`DB CONNECTED`)
})(); //u need to have semicolon very important to have two iife
//insidde() and then after {} () to avoid pollution of global scope we use iife function 
((name)=>{
    console.log(`HII ${name}`)
})("avi") //consider this as a function call here
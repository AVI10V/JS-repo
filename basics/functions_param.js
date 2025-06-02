function myname(){
    //code to wriyte
    console.log("HI")
}
// myname()
function add(x,y){
    return x+y //terminates function 
}
const x=add(1,"a") //when callin function. are arguments in defining param
// console.log(x)

function username(name="sam"){ //default parameters
    if(name===undefined){
      console.log("enter please sahi se")
      return
    }
    else{
        return `${name} just logged in`
    }
}
// console.log(username("Avi"))
// console.log(username())

//varargs
function calulatecartprice(...num1){ //rest , spread operator (vaL1 , VAL2, ...numm1) 1st, 2nd rest in array
     return num1
}
// console.log(calulatecartprice(1,2,3));
const user={
    name:"Avi",
    age:22
}
function handleobject(anyobject){
    console.log(`user name is ${anyobject.name} and age is ${anyobject.age}`)
}
// handleobject(user)
handleobject({
    name:"Avi",
    age:69
}) //can pass objects , arrays as well




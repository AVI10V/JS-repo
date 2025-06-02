//singleton single object construtor se
// multiple instance object literal
// Object.create
const myss=Symbol("key69") //first define a symbol then assign in object
const user={
    name:"Avi", //keys,values anything
    "full name":"Avi verma",
    [myss]:"key1",
    age:22,   //age is treated as a string in actual all else
    location:"delhi",
    lastlogin:["monday" , "sunday"] //array
}
// console.log(user.name);
// console.log(user["name"]) //to be written as "" string    
// console.log(user["full name"])
// console.log(user[myss])
// user.name="Avishva verma" //change
// console.log(user.name)
// Object.freeze(user) //no more changes beyond this using freeze
// user.name="Avi" 
// console.log(user.name)
// console.log(user)

user.greeting=function(){
    console.log("Hello")
}
user.greeting2=function(){
    console.log(`Hello ${this.name}`) //interpolation and this this is used to point object variables.
}
console.log(user.greeting())
console.log(user.greeting2())




 

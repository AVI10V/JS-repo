const user={
    username:"Avi",
    price:999,
    welcome:function(){
        console.log(`${this.username} welcome`) //using this for current context
        console.log(this) //prints current context objext
    }
}

//here what is current context this here means what ?
// console.log(user.welcome())
//changing context
user.username="Janvi"
// console.log(user.welcome())
// console.log(this) //here it is empty {} 
function chai(){
    let username="avi"
    console.log(this)
    // console.log(this.username) r// returns undefined
}
// chai() returns a lot

const x =()=>{
    // function code arrow function 
}
const addtwonos=(num1, num2)=>{
    return num1+num2
} // can also remove {} if one line statement  implicit return
const addition =(x,y)=>x+y
// console.log(addtwonos(7,8))

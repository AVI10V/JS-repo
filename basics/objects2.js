// const tinderuser=new Object()
// const tinderuser={} // both are same
const tinder={}
tinder.id="123abc"
tinder.name="avi"
tinder.isLogged=false
const regular={
    name:"jj",
    fullname:{
        username:{
            first:"Avi",
            last:"verma"
        }
    }
}
console.log(regular.fullname.username.first)
// console.log(regular.fullname?.username.first) // ? used to check if exist or not

const obj1 ={1:"a" ,2:"b" ,7:{1:"a",69:"avi"}}
const obj2={3:"4",4:'5'}
// const obj3 =Object.assign(obj1 , obj2) //copies and returns 
// const obj3 =Object.assign({},obj1 , obj2) //assign extra empty one also
// console.log(obj3)
const obj3={...obj1 ,...obj2} // same as array spread op
// console.log(obj3)
const users=[
    {
        id:1,
        email:"avi@"
    }
    {
        id:1,
        email:"avi@"
    }
    {
        id:1,
        email:"avi@"
    }
]
users[1].email



// destructureing
const course={
    coursename:"js",
    price:"999",
    courseteacher:"Avi"
}
// course.courseteacher again and again using makes syntax complex

// const {courseteacher}=course
const {courseteacher:ct}=course //here we use alias //this is destructureing
console.log(ct)
// apna kaam kisi aur se karwana hai is API
//ab values aati hai .JSON me
//json unnamed object
// {
//     "name":"Avishva",
//     "age":"18",
//     "price":"free"
// }
// [
//     {},
//     {}, // array api also 

// ]

//can use json fromatter or create one in furture
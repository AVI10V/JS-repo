const arr1=[1,2,3];
const arr2=["avi" , "verma"];
const newarray=[...arr1, ...arr2]; // can add multiple values like this
console.log(newarray);
const other=[1,2,3,4,[5,6,7],[1,2],[1,2,3,[1,2]]];
const another=other.flat(Infinity);
console.log(another);
console.log(Array.from("Avi"));
console.log(Array.from({name:"Avi"})); // important empty
let s1=100;
let s3=200;
let s2=300;
console.log(Array.of(s1,s2,s3)); //from values





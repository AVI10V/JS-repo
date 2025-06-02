const arr1=[1,2,3];
const arr2=["avi" , "verma"];
const newarray=[...arr1, ...arr2]; // can add multiple values like this
console.log(newarray);
const other=[1,2,3,4,[5,6,7],[1,2],[1,2,3,[1,2]]];
const another=other.flat(Infinity);
console.log(another);




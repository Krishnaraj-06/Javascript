//In JS, arrays are resizable and can contain a mix of different data types, they r zero-indexed elements.
//JS-copy-creation method create shallow copies(A shallow copy of an object is a copy whose properties share the same references ) 
// and deep copies(A deep copy of an object is a copy whose properties do not share the same references).

//Declaration of arrays:
const myArr=[1, 2, 3, 4, "Krishna"]
//2nd Method
const arr=new Array(1, 2, 3, 4, "Pragya")

// console.log(myArr);
// console.log(arr);

//Accessing the length of the array:
console.log(myArr.length);
//Accessing the elements of the array:
console.log(
myArr[0]//Accessing the first element
);

//Adding elements to the array:
console.log(myArr.push(5, 6, 7))
console.log(myArr);


//Removing elements from the array:
console.log(myArr.pop())


//Removing the first element of the array:
console.log();





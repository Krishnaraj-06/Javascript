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
myArr[0]
);
console.log(Object.keys(myArr));
console.log(Object.values(myArr));


//Adding elements to the array:
// console.log(myArr.push(5, 6, 7))
// console.log(myArr);


//Removing elements from the array:
// console.log(myArr.pop())


//Removing the first element of the array:
console.log(myArr.shift());
console.log(myArr);//Removed the first element 




//Some JS methods of array:
//1)includes() - checks if an element is present in the array
console.log(myArr.includes(2)); 

//2)indexOf() - returns the index of the first occurrence of an element in the array
console.log(myArr.indexOf(2));

//3)lastIndexOf() - returns the index of the last occurrence of an element in the array
console.log(myArr.lastIndexOf(2));  

//4) Join()- Joins the elements of an array into a string
console.log(myArr.join());

//5) slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
console.log(myArr.slice(1, 3)); 
console.log(myArr);


//6) splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log(myArr.splice(1, 2));
console.log(myArr); 











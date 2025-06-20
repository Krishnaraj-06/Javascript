/* What are Objects?
Ans:In js, object is a core ds used to store structured data. It stores value in key-value pairs, and its dynamic, 
allowing properties, to be added or removed. It is a reference type. Also, objects forms the backbone of JSON and are
widely used in APIs and state management */

//Objects can be declared in two ways:
//Object Literals, Using Constructors 
//Differnce kya hai? Simple constructor use karke singleton obj bana sakte whereas literal use krke multiple instance bana sakte


//1) Object Literal:
const A=Symbol("Key1");

const User1={
    name:"Krishna",
     age:21,
     isLogggedIn:true,
     "Full Name":"Krishnaraj Singh",
     [A]:"MyKey1"
}

//Ways to access the values of an object:

console.log(User1["name"]); //First Way
console.log(User1.name); //Second Way
console.log(User1["Full Name"]);


//How to access Symbol(A type of ds) in Objects:
console.log(typeof [A]);



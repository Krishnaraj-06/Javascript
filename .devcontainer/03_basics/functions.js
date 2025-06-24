function sayName()
{
    // console.log("I hate that bitch");
    
}

sayName() //Basic Definition of functions

//Function to add two numbers:
function addTwoNum(num1, num2) //Ye num1,num2 jo hai isko kehte parameters
{
    let result=num1+num2
    return result
}
const result=addTwoNum(10,20)  //Ye 10,20 humne pass kiya usko kehte hai arguements
// console.log("Result is", result); 



//Another way to take a parameter
function Hickey(Name1, Name2)
{
    return `${Name1} love ${Name2}`
}
console.log(Hickey("Krishnaraj", "Pragya"));
//What if user ne koi value hi pass nahi kari?
//So jo output me aata hai vo undefined show hota hai
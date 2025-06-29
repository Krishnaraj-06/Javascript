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
// console.log(Hickey("Krishnaraj", "Pragya"));
//What if user ne koi value hi pass nahi kari?
//So jo output me aata hai vo "undefined" show hota hai



//Ek concept hota hai default parameters ka, agar user ne koi value hi pass nahi kara toh ye concept use hota hai!

function myName(username="Krishnaraj")
{
    if(!username)
    {
        console.log("Bhai naam daldo");
        return
    }
    return `${username} just loggedIn`
}
// console.log(myName()); 
//See yaha par maine koi arguement pass nahi kiya, bas default me krishnaraj likha tha so vahi pass hogya


function AddCartPrice(...num1)
{
    return num1;
}
//Ab hume pta hai, (...) ye jo operator hai vo array me as a "Spread" property use hota hai, but in a function vo as a "rest" 
//hota hai
console.log(AddCartPrice(200,300,400,500));

/*Ab ye property kya karta hai ki, if user ko multiple items add krne so vo multiple parameters ko set kiye bina
ye use kare and then uska kaam hojaye...ye property hum shopping cart me use kr skte */

//Objects in Functions
const O1={
    name:"Krishnaraj",
    wife:"Pragya"
}

function Print(anyObject)
{
    console.log(`My name is ${anyObject.name} and my wifu name is ${anyObject.wife}.`);
    
}
Print(O1)

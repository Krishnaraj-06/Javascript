let a=100
const b=400
var c=700

// console.log(a);
// console.log(b);
// console.log(c);
//Yaha par jo a,b,c jo hai usme declaration me diff hai.
//Var jo hai vo koi blocks k saath nahi aata, jese ki.. 
//If c ko kisi func k andar bhi declare kare tb bhi uska val change ho sakta, uspar blocks/limit nahi kaam karte!! 

function one()
{
    const username="Krishnaraj"
    function two()
    {
        const website="Youtube"
        console.log(username);
        
    }
  //  console.log(website);
//Yaha par jo website hai vo func two me declared hai so uska scope utna hi tha, func one me vo undefined hojata hai!
    two()
}
one()


//++++++++++++++++++INTERESTING++++++++++++++++++++++
//1) Declaring function normally
add1()
function add1(num)
{
    return num+1
}

//2)Declaring function using variables--->Called as Expressions:
add2(6)
const add2=function(num)
{
    return num+2
}

//Abb dekho, yaha add1() pehle hi run ho paya cz vo normally as a function declared tha but
//Add2 jo tha vo nhi hua cz as a variable uss function ko runn kiya hai, so bina initialization se pehle vo run nhi hota.


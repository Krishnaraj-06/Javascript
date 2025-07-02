let a=100
const b=400
var c=700

console.log(a);
console.log(b);
console.log(c);
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
    console.log(website);

    two()
}
one()

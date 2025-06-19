const C1=['Ram', 'Shyam', 'Ganesh']
const C2=['Mahesh', 'mukesh', 'suresh']
// C1.push(C2) //Ye 2nd array ko ek element k tarah consider karke first array me push kardega
// console.log(C1); //[ 'Ram', 'Shyam', 'Ganesh', [ 'Mahesh', 'mukesh', 'suresh' ] ]

//Ab agar hume do array ko combine karna hai individual elements k saath toh hum unhe concat kardenge
//Concat hamessha ek naya array return karta hai 
const C3=C1.concat(C2)
console.log(C3); //[ 'Ram', 'Shyam', 'Ganesh', 'Mahesh', 'mukesh', 'suresh' ]


//Other than concat, we can use spread, vo bhi same kaaam karta hai
const C4=[...C1,...C2 ]
console.log(C4);//[ 'Ram', 'Shyam', 'Ganesh', 'Mahesh', 'mukesh', 'suresh' ]
//Benefit of using spread ki hum bina limit k arrays ko merge kar sakte, concat me do hi array ko merge kar sakte

//Agar hume ek array diya hai, jiske andar ek aur array ho and ek aur....nested array type, usme hum ek property use kare
//Jiske help se nested array ko ek single array me convert kiya ja sakta hai 

const arr1=[1,2,3,[2,4,5], [3,4,[7,8]]]
console.log(arr1.flat(Infinity));



//Ab agar hume check karna hai ki array hai ya nahi, so hume use karte hai isArray():
console.log(Array.isArray("Krishna, Pragya"));
//Ab ye toh array hai nahi but agar isko array banana hai so hum use kar sakte hai From():
console.log(Array.from("Krishna, Pragya"));



//Agar hume kisi set of values of array me convert karna ho toh hume use karte Of():
let A=100
let B=200
let C=300
console.log(Array.of(A,B,C));







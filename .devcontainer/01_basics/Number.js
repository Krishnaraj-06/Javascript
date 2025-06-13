const score=400
// console.log(score);
const num=new Number(100)
// console.log(num);
//In declaration of num, we have used the property of object by using new keyword, thus in printing output is different.
//Here there are various methods, 
//1) To convert the number to a string value:
// console.log(num.toString());
//2) To convert the huge number to a minimal decimal value:
// console.log(num.toFixed(3));
//3)To convert 10000n into better representation(by using commas):
let number = 100000
// console.log(number.toLocaleString('en-IN'));
//4) Precision: Rounding off a value
let a=123.092
// console.log(a.toPrecision(2));



//++++++++++++++++++++++++++++Maths++++++++++++++++++++++++//
console.log(Math);
//The Math Library in JS comes with various functions/Methods
//1)abs(): It returns the positive value of any integer
console.log(Math.abs(2));
//2)round():It rounds of the decimal value
console.log(Math.round(3.5));
//3)ceil():GIF for a value, returns the top most value
console.log(Math.ceil(3.2));
//4)floor():LIF for a value, returns the bottom most value
console.log(Math.floor(3.9));
//5)min():Returns the minimum value from the set of given integers
console.log(Math.min(10, -2, 92,101));





// console.log(2==2);
// console.log(2>=2);
// console.log(2!=2);


//CONVERSION PROBLEM IN JS:
// console.log(null==0)
// console.log(null>=0);
// console.log(null>0);
//Reason: Here null>=0 is true but null >0 or null==0 is false. Why? The reason is that check(==) and comparisons(<, >, >=, <=) 
//works differently. Comparison convert null to a number, treating it as a 0. Thus null>=0 is true while null>0 is false.


//String Comparisons
// console.log("Krishna"=="Hello");
// console.log("Krishna"=="Krishna");


//Strict Conversion(===): So this operator checks whether the two operand are equal and not just equal are they same in terms of datatype.
console.log(2==="2");

//In == operator, if one of the operand is string and other is number then the string is converted to a number then it checks.
console.log(2=="2");

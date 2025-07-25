//All About Singleton objects:
//Way of declaring singleton obj:
//const InstUser= new Object(); // Ab ye normally bhi declare kar sakte but diff ye rahega ki ye singleton obj rahega
const InstUser={}

InstUser.id="2406KP"
InstUser.name="Kraya"
InstUser.loggedIn=true

// console.log(InstUser);

//Now nesting object inside a object:
const regularUser={
    email:"Kraya@gmail.com",
    fullname:{
        UserFullName:{
            firstName:"Kraya",
            lastName:"Singh"
        }
    }
}

// console.log(regularUser.fullname.UserFullName.firstName);


//Merge kese kare two or more objects ko? Humare pass 3 way hai
const A ={1:"a", 2:"b" }
const B ={3:"c", 4:"d"}

const C={A, B} //Ye method objects ko seperate nahi karta but as a object hi return kardeta hai jo ki good practice nahi hai

const D= Object.assign({}, A, B) //Ye empty parathesis isliye ki agar new obj dena hi hai so properly ek location me de 

const E={...A, ...B} //Ye spread property use karna ek best practice hai 
//console.log(C); 

//Agar hume check karna hai ki kisi object me vo property/Element hai ya nahi so kese karenge
// console.log(regularUser.hasOwnProperty('firstName'));

//OBjects Done 


//Destructure of objects and APIs:
//Agar kisi object se hume koi value extract karna hai, so baar baar vo object.value ko call karne se achha hum ye 
//property use karenge

const Course={
    faculty:"Krishna",
    student:"Pragya",
    age:"19"
}

//course.faculty -->>Ye baar baar likhne se accha 
const {faculty:teacher}=Course
console.log(teacher); //Humne ek alag way se faculty(course obj ka value) ko access kiya

//JSON is a js object notation, jo dikhta object k tarah hi h raw data consist karta h
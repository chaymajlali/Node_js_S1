//const,let,var
let y = 20;
var x=10;
const b=40;

//arrow functions

const add = (a, b) => {
    return a + b;
  };
  console.log(add(2, 3)); 

//tenarry operation
let isLoggedIn = true;
let greeting = isLoggedIn ? "Bienvenue !" : "Veuillez vous connecter.";

console.log(greeting); 

//regular expression 
const firstname = "John";
const lastname = "Doe";

console.log(`${firstname} ${lastname}`); 

//spread object

const user = { name: "Alice", age: 25 };
const userWithId = { ...user, id: 123 };

console.log(userWithId); 

//spread array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];  
console.log(arr2); 


//Object Destructuring

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  
  let { firstName, age } = person;

  //Array Destructuring


const fruits = ["Banana", "Orange", "Apple", "Mango"];


let [fruit1, fruit2] = fruits;
// SUM: JS Course : Unit 2




// = Alerts and Pop-Up's


alert("Hello Brendan, here you are again");

// H: alert("Continue with the Udemy Popup");


let js = "amazing";

if (js === "amazing")

  alert("I find this enjoyable now. I am a cyberpunk...");


/* 

= 1 Change the variable, break the pop-up

| let js = "nonchalant"


= 2 Run this

| if (js === 'amazing')

|   alert ('I find this enjoyable now. I am a cyberpunk...')

! 3 Now the code no longer works

*/ 


// = Math Operators

40 + 20;

40 - 20;

4 * 5;

4 / 5;


// = Values

// | = let js = "amazing";
// H: if (js === "amazing") alert("Javascript is FUN!");

console.log(40 + 8 + 23 - 10);

console.log("Brendan");
console.log(23);


let firstName = "Bren";

console.log(firstName);
console.log(firstName);
console.log(firstName);

/*

// SUM 

You can use _ or $
Remember there are words you cannot use
Remember to use CamelCase 

*/

let myFirstJob = "Paper Carrier"
let myCurrentJob = "Polymath : Musician, Coder, Inventor, Businessman"

console.log(myFirstJob)


// = Data Types

// SUM = Objects or Primitives


// = Object

let me = {
  name: 'Brendan'
};

// = Primitive

let artistName = 'Myrryr';
let ageComing = '365';




// = 7 Primitives

// } Number : Floating Point Numbers - Integers & Decimals
// Decimal is always there, just floating.

let age = 29;


// } String : Sequence of characters = Used for text
// Always used quotes : '' or ""

let myName = "Bren";


// } Boolean : Logical type that can only be true or false = Used for decisions

let aliveForever = true;


// } Undefined : Value of a variable that's not yet defined ('empty value') 

let sheep;


// } Null : Also means 'empty value';


// } Symbol (ES2015) A value that is unique, cannot be change


// } Big INT : Too large to be represented by the Number type


/* 

// * = JavaScript 

// = Has a feature called dynamic typing. 

// = Meaning, we do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

// = A Value has a type not a variable

*/


// = BOOLEANS

true;

let javascriptIsInProgress = true;
console.log(javascriptIsInProgress);

// = console.log(typeof );

console.log(typeof(true));
console.log(typeof(javascriptIsInProgress));
console.log(typeof(23));
console.log(typeof('Jento'));

// = Dynamic Typing

javascriptIsInProgress = 'Sui!';
console.log(typeof(javascriptIsInProgress));

// SUM : This can only be done if the variable is declared with ( let ) then without using ( let ) you can change the value of the variable.

let yo;
console.log(yo);
console.log(typeof(yo));

yo = 1999;
console.log(typeof(yo));

// * These are examples of dynamic typing


// = NULL and Typeof

console.log(typeof null);

// * This is incorrect, it should return null but returns object for legacy reason bug remains.


// = Ways to Declare Variables in JS

// * let and const are the new way
// * var is the old way


// = let
// = var acts the same way

// * Use for variables that will change
// * Only use if you are certain will change in the future

let ageJim = 45;
ageJim = 455;


var ageSal = 33;
ageSal = 333;

// * Reassign or Mutate the variable


// = const

const birthYear = 1994;

// * const values cannot change 
// * Use const by default
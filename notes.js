// SUM: JS Course : Unit 2

//____________________________________________________________________________________________________________________


// = Alerts and Pop-Up's


alert("Hello Brendan, here you are again");

// H: alert("Continue with the Udemy Popup");


let js = "amazing";

if (js === "amazing")

  alert("I find this enjoyable now. I am a cyberpunk...");

//____________________________________________________________________________________________________________________
/* 

= 1 Change the variable, break the pop-up

| let js = "nonchalant"


= 2 Run this

| if (js === 'amazing')

|   alert ('I find this enjoyable now. I am a cyberpunk...')

! 3 Now the code no longer works

*/ 
//____________________________________________________________________________________________________________________

// = Math Operators

40 + 20;

40 - 20;

4 * 5;

4 / 5;



//____________________________________________________________________________________________________________________

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
let myCurrentJob = "Polymath : Musician, Coder, Inventor, Trader, Businessman"

console.log(myFirstJob)

//____________________________________________________________________________________________________________________

// = Data Types

// SUM = Objects or Primitives

//____________________________________________________________________________________________________________________

// = Object

let me = {
  name: 'Brendan'
};

//____________________________________________________________________________________________________________________

// = Primitive

let artistName = 'Myrryr';
let ageComing = '365';


//____________________________________________________________________________________________________________________

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



//____________________________________________________________________________________________________________________

// = BOOLEANS

true;

let javascriptIsInProgress = true;
console.log(javascriptIsInProgress);

// = Typeof Operator = console.log(typeof );

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


//____________________________________________________________________________________________________________________

// = Basic Operators

// * Allows us to transform, work with values


const ageBrendan = 2045 - 1994;
console.log(ageBrendan);

const ageSam = 2045 - 2018;
console.log(ageBrendan, ageSam);

// | Because 2045 is the same value used twice, extrapolate it to a variable

//____________________________________________________________________________________________________________________

// = Math Operators

const now = 2045

const ageBrendan = now - 1994;
console.log(ageBrendan);

const ageSam = now - 2018;
console.log(ageBrendan, ageSam);

console.log(ageBrendan * 2, ageSam / 10, 2 ** 3);

// = ** means exponential ie. 2 ** 3 means 2 * 2 * 2


const firstInitial = "B";
const lastInitial = "M";

console.log(firstInitial + lastInitial);

//____________________________________________________________________________________________________________________

// =  Assignment Operators

let x = 10 + 5; // = 15
x += 10; // =   x = x + 10 = 25
x *= 4; // =    x = 25 * 4 = 100
x++; // =       x = x + 1
x--; // =       x = x - 1 
console.log(x);

// | Pay attention to order of operations ()

//____________________________________________________________________________________________________________________

// = Comparison Operators : Which are boolean

console.log(ageBrendan > ageSam); // >, <, >=, <=
console.log(ageSam >= 18);

const isFullAge = ageSam >= 18;
console.log(isFullAge);

console.log(now - 1994 > now - 2018);


//____________________________________________________________________________________________________________________

// = Operator Precedence

// * Can be found officially on MDN site

const thisYear = 2026;
const ageJiff = thisYear - 1989;
const ageLue = thisYear - 1980;

console.log(thisYear - 1989 > thisYear - 1980);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJiff + ageLue / 2)
console.log();

// = Use () to create an order, without them the / is executed 1st


//____________________________________________________________________________________________________________________

// = Strings and Template Literals

const firstNickname = "Bren";
const job = "Polymath";
const birthYear = "1994";
const nowYear = 2025;

const brendan = "I'm " + firstNickname + ', a ' + (nowYear - birthYear) + ' year old ' + job + '!';

console.log(brendan);

const brendanNew = `I'm ${firstNickname}, a ${nowYear - birthYear} year old ${job}!`;

console.log(brendanNew);

console.log(`A regular string...`);

//____________________________________________________________________________________________________________________

// = if / else statements

const age = 19;
const isOldEnough = age >= 18;


if(isOldEnough) {
    console.log(`Sarah can have her driver's permit 🏎️ `);
}

// * if (boolean) : the condition must be a boolean or code will break


const ageJo = 15;


if(ageJo >= 18) {
    console.log(`Jo can have her driver's permit 🏎️ `);
} else {
    const yearsLeft = 18 - ageJo;
    console.log(`Jo is too young. She must wait ${yearsLeft} more years.`)
}

// * if (boolean) : the condition must be a boolean or code will break


if(){

} else {

}

// ! This above is called and if / else control structure


const nowAge = 15;


if(nowAge >= 18) {
    console.log(`Sarah can have her driver's permit 🏎️ `);
} else {
    const yearsLeft = 18 - nowAge;
    console.log(`Sarah is too young. She must wait ${yearsLeft} more years.`)
}

// * if (boolean) : the condition must be a boolean or code will break


const birthYearMitch = 2012;

let century;
// * must define variable outside of if / else statement

if(birthYearMitch <= 2000) {

    century = 20; // conditional reassignment

} else {
    
    century = 21; // conditional reassignment
}

console.log(century)


//____________________________________________________________________________________________________________________

// = Type Conversion and Coercion

const inputYear = "1991"; // string
console.log(inputYear + 18); // 

// * convert strings to number using Number(), N must be capitalized

console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//____________________________________________________________________________________________________________________

// = NaN (Not a Number)

console.log(Number('Joan')); 

// * NaN (Not a number) When an operation involving numbers fails to give a new number

console.log(typeof NaN);

//____________________________________________________________________________________________________________________

// = Strings

console.log(String(23), 23);

// * convert to strings using String(), S must be capitalized

//____________________________________________________________________________________________________________________

// = Coercion

console.log('I am ' + 24 + ' years old.'); 
// * Auto coercion through the + to String
// * When Strings and Numbers interact, always is converted to a string

// = +

console.log('23' + '10' + 3); // * Will concatenate

// = -

console.log('23' - '10' - 3);
// * Auto converts strings to number through the - 

console.log('23' / '2' ); // H: 11.5

let n = '1' + 1; // * Will concatenate : 11
n = n - 1; // * String - 1 : 10

console.log(n);

// H: '10'-'4'-'3'-2+'5'; 
// // SUM : 10 - 4 - 3 - 2 = 1 + '5' = 15;




// = Falsy Values

// * These are values that are not exactly false but will be treated as false when converted to a boolean (boolean context) 

// * False: 0, '', null, undefined, NaN


console.log(Boolean(0));

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// = Truthy Values

// * These are values that are not exactly true but will be treated as true when converted to a boolean (boolean context) 

// * True: 1, 'test', , [], {}

console.log(Boolean(1));
console.log(Boolean('test'));

console.log(Boolean([]));
console.log(Boolean({}));


// = BOOLEAN Logic


// 0
// Can try 100

const money = 0;

if (money) { // This will be converted to false
    console.log("For now I won't spend it all ;)");
} else {
    console.log('Go get a job.');
}


// undefined
// Can try a number

let height;
// Using let height = 0 would print 'Height is undefined.' When in actuality height = 0, this is a bug

if(height) {
    console.log('Yes, height is defined.');
} else {
    console.log('Height is undefined.')
}

//____________________________________________________________________________________________________________________

// = EQUALITY OPERATORS


// } Cheese Company Data

const yearsAged = 18;
if (yearsAged === 18) console.log('The cheddar has reached the required age.');


// = The == does perform type coercion (loose)

'18' == 18 // TRUE
console.log('18' == 18);


// = The === doesn't perform type coercion (strict)

'18' === 18 // FALSE
console.log('18' === 18);


// * As a rule, always use strict equality

//____________________________________________________________________________________________________________________

// = Web Prompts

const moveTo = prompt(`Where is your next move to?`);

console.log(moveTo); // Toronto
console.log(typeof moveTo); // String


// = Equality Operators in Prompts

const ageOfWine = prompt("What's your favourite age of wine?");

console.log(ageOfWine); // * 10 --> A Number, but returned as a String
console.log(typeof ageOfWine); // Returning as : String


// } Loose Operator

if(ageOfWine == 10) { // * '10' == 10 (loose equality operator) -- TRUE
    console.log(`Great choice. A decade of aging is perfect.`)
}

//____________________________________________________________________________________________________________________

// } Prompt

const favouriteNumber = Number(prompt("What is your favourite number?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber);


// } Loose Operator

// | const favouriteNumber = prompt("What is your favourite number?")
// | if (favouriteNumber == 22 ) { // * '10' == 10 (loose equality operator) -- TRUE --> will appear in console
// |  console.log(`Great choice. This is my favourite number as well.`)  
// | }


// } Strict Operator
// ! Always use

if (favouriteNumber === 22 ) {
    console.log(`Great choice. This is my favourite number as well.`)

    // * '22' === 22 (strict equality operator) -- FALSE --> will not appear in console

} else if(favouriteNumber === 8) {
    console.log(`This is a great choice as well.`)

} else if(favouriteNumber !== 23){
    console.log(``)

    console.log(`Number isn't 22 or 8.`)
};

// SUM: Always use the strict equality operator


// } Different Operator

const favouriteNumberNow = Number(prompt(`What's your favourite number?`));

if(favouriteNumberNow !== 22) {
    console.log(`You didn't choose the number 22.`)
} else {
    console.log(`22 is the best number.`)
}

//____________________________________________________________________________________________________________________

// = BOOLEAN LOGIC : Basics : The And, Or, & Not Operators


// = A & B

// }  A : Age is greater or equal to 20
// }  B : Age is less than 30

// SUM :  A = False
// SUM :  B = True

// }  Age = 16


// = AND

// *  A AND B = false
// * !A and B = true // A is inverted by the NOT operator


// = OR

// *  A OR B = true
// * !A OR B = true


// = NOT !

// * !A = true   // Inverts value of the variable
// *  A OR !B = false
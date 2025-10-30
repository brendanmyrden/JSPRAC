// = Testing

// | let practice = "Practice Test"
// | console.log(practice)


// = 1

const country = "Canada"
const continent = 'North America'
let myCountryPopulation = 41718598;

console.log(country,',', continent,',', myCountryPopulation);

// * = Correct


// = 2 Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof myCountryPopulation);
console.log(typeof language);

// * = Correct


// = 3 let, const, var

language = 'English';
console.log(language);

// | isIsland = true;
// | console.log(isIsland);
// * This doesn't work because of the rules of const

// * = Correct


// = 4 Basic Operators

let popHalved = myCountryPopulation / 2;
popHalved++;

console.log(popHalved);

const finlandPopulation = 6000000;

console.log(myCountryPopulation > finlandPopulation);

const avgCountryPopulation = 33000000;

console.log(myCountryPopulation < avgCountryPopulation);

const description = country + ' is in ' + continent + ' and its ' + myCountryPopulation + ' people speak ' + language;

console.log(description);

// * = Correct


// = Coding Challenge 1 = BMI = mass / (height * height);

const massMark = 78
const massJohn = 92

const heightMark = 1.69
const heightJohn = 1.95

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIJohn, BMIMark);

const markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);

// * = Correct


// = 5 Strings and Template Literals

const description = `${country} is in ${continent} and it's ${myCountryPopulation} people speak ${language}`;

console.log(description);

// * = Correct
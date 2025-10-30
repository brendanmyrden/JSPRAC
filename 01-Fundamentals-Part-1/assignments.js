// = Testing

// | let practice = "Practice Test"
// | console.log(practice)


// = 1

const country = "Canada"
const continent = 'North America'
let myCountryPopulation = 41718598;

console.log(country,',', continent,',', myCountryPopulation);

// SUM = Correct


// = 2 Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof myCountryPopulation);
console.log(typeof language);

// SUM = Correct


// = 3 let, const, var

language = 'English';
console.log(language);

// | isIsland = true;
// | console.log(isIsland);
// * This doesn't work because of the rules of const

// SUM = Correct


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

// SUM = Correct
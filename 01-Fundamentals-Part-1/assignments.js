//____________________________________________________________________________________________________________*/

// = Testing

// | let practice = "Practice Test"
// | console.log(practice)

//____________________________________________________________________________________________________________*/

// = 1

const country = "Canada"
const continent = 'North America'
let myCountryPopulation = 41718598;

console.log(country,',', continent,',', myCountryPopulation);

// * = Correct

//____________________________________________________________________________________________________________*/

// = 2 Data Types

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof myCountryPopulation);
console.log(typeof language);

// * = Correct

//____________________________________________________________________________________________________________*/

// = 3 let, const, var

language = 'English';
console.log(language);

// | isIsland = true;
// | console.log(isIsland);
// * This doesn't work because of the rules of const

// * = Correct

//____________________________________________________________________________________________________________*/

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

//____________________________________________________________________________________________________________*/

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

//____________________________________________________________________________________________________________*/

// = Coding Challenge 2 = Template Literals

if(BMIMark > BMIJohn){
    console.log(`Marks BMI of ${BMIMark} is greater than John's BMI of ${BMIJohn}`)
} else {
    console.log(`Johns BMI of ${BMIJohn} is greater than Mark's BMI of ${BMIMark}`)
}

//____________________________________________________________________________________________________________*/

 // = Coding Challenge 3


 const scoreDolphins = ((96 + 108 + 89)/3);
 const scoreKoalas = ((88 + 91 + 110)/3);
 
 if (scoreDolphins > scoreKoalas) {
     
     console.log(`Dolphins win the trophy with ${scoreDolphins}`)
     
 } else if (scoreDolphins < scoreKoalas) {
     
     console.log(`Koalas win the trophy ${scoreKoalas}`)
     
 } else if (scoreDolphins === scoreKoalas) { // * Don't necessarily need this because it's the only condidtion left
     
      console.log(`Both win the trophy`)
 }
 
 
 // = Bonus 
 
 
 const scoreDolphins2 = ((97 + 112 + 81)/3);
 const scoreKoalas2 = ((109 + 95 + 86)/3);
 console.log(scoreDolphins2, scoreKoalas2)
 
 if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
     console.log(`Dolphins win the trophy with ${scoreDolphins}`)
 
 } else if (scoreDolphins2 < scoreKoalas2 && scoreKoalas2 >= 100) {
     console.log(`Koalas win the trophy ${scoreKoalas}`)
     
 } else if (scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >= 100 && scoreKoalas2 >= 100) {
     console.log(`Both win the trophy`)
 
 } else {
     console.log(`No one wins the trophy`)
 }
 
 //____________________________________________________________________________________________________________*/
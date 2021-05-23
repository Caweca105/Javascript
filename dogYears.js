//my age
const myAge = 28;
//early dog years
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

const myAgeInDogYears = (laterYears + earlyYears);

const myName = 'Diogo Lemos'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
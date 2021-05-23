//Temperature in kelvin
const kelvin = 0;
//Temperature convertion kelvin to celsius
const celsius = kelvin - 273;
//Temperature convertion celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//round down fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
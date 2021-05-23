const input = 'Colar isabelino, pelíícula aderente, tubo de oxigénio';

const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []

for(let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log(`inputIndex = ${input[inputIndex]}`);
  for(let vowel = 0; vowel < vowels.length; vowel++) {
    //console.log(`vowels = ${vowel}`);

    if(input[inputIndex] === vowels[vowel]) {
      if(input[inputIndex] === 'e') {
        resultArray.push('ee');
      }
      else if(input[inputIndex] === 'u') {
        resultArray.push('uu');
      }
      else if(input[inputIndex] === 'a') {
        resultArray.push('a');
      }
      else if(input[inputIndex] === 'i') {
        resultArray.push('i');
      }
      else if(input[inputIndex] === 'o') {
        resultArray.push('o');
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase())
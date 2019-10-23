'use strict';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};
const sentence = 'craft block argon meter bells brown croon droop';
let words = sentence.split(' ');
let decoded = '';
// console.log(words);
for (let i=0; i<words.length; i++){
  let word = words[i];
  let firstCharacter = word[0];
  let index = cipher[firstCharacter];


  if (index === undefined){
  //console.log(' ');
    decoded = decoded + ' ';
  
  }
  else {
    decoded = decoded + word[index-1];
    //decoded.push(word[index-1]);
    //  console.log(word, index, word[index-1]);
 
  }

}
console.log(decoded);
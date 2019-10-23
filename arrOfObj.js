'use strict';
const professor1 = {
  name: 'Joe',
  jobTitle: 'head teacher'
};
const professor2 = {
  name: 'Paul',
  jobTitle: 'second teacher',
  boss: 'Joe',
};
const professor3 = {
  name: 'Mary',
  jobTitle: 'third teacher',
  boss: 'Joe'
};
const newArr = [professor1, professor2, professor3];
// console.log(newArr);
for (let i=0; i<newArr.length; i++){
  if (newArr[i].boss === 'Joe'){
    console.log(`${newArr[i].jobTitle} ${newArr[i].name} reports to ${newArr[i].boss}`);
  } else {
    console.log(`${newArr[i].jobTitle} ${newArr[i].name} doesn't report to anyone.`);
  }
  
 
  // console.log(newArr[i].jobTitle);
}

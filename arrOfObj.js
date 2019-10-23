'use strict';
const professor1 = {
  name: 'Joe',
  jobTitle: 'head teacher'
};
const professor2 = {
  name: 'Paul',
  jobTitle: 'second teacher'
};
const professor3 = {
  name: 'Mary',
  jobTitle: 'third teacher'
};
const newArr = [professor1, professor2, professor3];
// console.log(newArr);
for (let i=0; i<newArr.length; i++){
  console.log(`${newArr[i].name} : ${newArr[i].jobTitle}`);
  // console.log(newArr[i].jobTitle);
}

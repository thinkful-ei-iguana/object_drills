'use strict';
function makeStudentsReport(data) {
  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    newArray.push(`${item.name}: ${item.grade}`);
  }
  return newArray;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];
console.log(makeStudentsReport(testData));
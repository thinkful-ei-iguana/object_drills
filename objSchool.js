'use strict';

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];
  
function enrollInSummerSchool(students) {
  let newArr = [];
  for (let i=0; i<students.length; i++){
    let myObj ={
      name: students[i].name,
      status: 'In summer School',
      course: students[i].course
    };
    newArr.push(myObj);
  }
  return newArr;
}
'use strict';
function createMyObject(){
  return {
    foo: 'bar',
    answerToUnivers: 42,
    'olly olly': 'oxen free',
    sayHello: function(){
      return 'hello'
    }
  };
}
console.log(createMyObject());
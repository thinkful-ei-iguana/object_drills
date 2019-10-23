'use strict';
function validateKeys(object, expectedKeys) {
    if (Object.keys(object).length !== expectedKeys.length){
        return false;
    }
    for (let i=0; i< expectedKeys.length; i++){
        if (expectedKeys[i] !== Object.keys(object[i]))
        return false;

        }
    }
  return true;
  }

'use strict';
function createCharacter(name, nickname, race, origin, attack, defense){
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    }, 
    // evaluateFight: function(character){
    //   console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    // }

  };
}
const gandalf = createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
const neo = createCharacter('Mr. Anderson', 'neo', 'Human', 'Earth', 100, 100);
const ary = [gandalf, bilbo, frodo, aragorn, legolas, neo];


console.log(gandalf);
// 1
const monthly = 500;
const yearly = monthly * 12;
console.log(yearly);

// 2
const stress = "my family";
const calm = "God";
const therapyTemplate = `${stress} is a source of stress. ${calm} is not.`;
console.log(therapyTemplate);

// 3
const numberHurricanes = 2;
if (numberHurricanes === 6) {
    console.log("tough season");
}
else {
    console.log("we lucked out");
}

// 4
if ( numberHurricanes > 5 ) {
    console.log("very scary");
}
else if ( numberHurricanes === 3 ){
    console.log("still pretty bad");
}
else {
    console.log("Dad should still move")
}

const evilTommy = false;
if (evilTommy) {
    console.log("can\'t go to party");
}
else if (evilTommy != true) {
    console.log("hurrah");
}
else  {
    console.log("ask Roserica");
}

// 5
let myDogs = 0;

for ( let i = 0; i < 3; i++) {
    myDogs++;
}
console.log(myDogs);

let character = "";
const timesLoop = 50;
let letter = "a";

for (let i = 0; i <= timesLoop; i++) {
    character+=letter;
}
console.log(character);

// 6
const jazmin = {
    name: "Jazmin",
    personality: "immature",
    age: 17
}
console.log(jazmin.name, jazmin.age);

// 7
const john = {
    name: "John",
    personality: "hysterical",
    age: 50
}

function compareAge(person) {
    if (person.age < 50 ) {
        console.log("so young");
    }
    else if (person.age === 50) {
        console.log("join AARP");
    }
    else {
        console.log("who are you");
    }
}
compareAge(jazmin);
compareAge(john);

// 8
const meh = "Tommy Sucks";

console.log(meh.substr(0,11));

// 9
const ourHouse = {
    yearBuilt: 1973,
    builder: "Fox and Jacobs",
    roof: "metal",

    sellHouse() {
        return `This ${this.yearBuilt,this.builder} house can be yours!`;
    }
}
console.log(ourHouse.sellHouse());

// 10
const myFamily =[
    { name: "Jody", age: "80"},
    { name: "Tom", age: "74"},
    { name: "John", age: "68"}
]

myFamily.push ({ name: "John", age: "50"});
console.log(myFamily);
myFamily[2] = ({ name: "Bella", age: "3"});


// 11 
const familyDogs = [
    { name: "Bella", age: "3" },
    { name: "Bailey", age: "2" },
    { name: "Bettie", age: "5" },
    { name: "Janie", age: "?"}
]

for ( let i = 0; i <= familyDogs.length; i++) {
    console.log(familyDogs[i]);
}

familyDogs.forEach( function(poop){
    console.log(poop);
});

// 12
const elementsToChange = document.querySelectorAll(".new");

for ( let i = 0; i < elementsToChange.length; i++) {
    const changedElements = elementsToChange[i];
    changedElements.innerText = "hooray!";
}

// 13
const grabButton = document.querySelector('.green');
grabButton.addEventListener('click', function(){
    alert('it works again!');
});

// 14
/** 
 * @type HMTLInputElement 
 * 
*/
const grabHisNuts = document.querySelector('.nut-man');
const putNutsHere = document.querySelector('.incoming-nuts');

grabHisNuts.addEventListener('keyup', function(){
    putNutsHere.innerText = grabHisNuts.value;
});

// 15
/** 
 * @type HTMLInputElement
 *  * 
*/
const input = document.querySelector('.color-choice');
const box = document.querySelector('.color-box');

input.addEventListener('change', function(){
   box.style.backgroundColor = input.value;
});

// 16 Event bubbling, event delegation
document.querySelector('.button-container').addEventListener('click', function(event) {
    //to prevent bubbling
    if(event.target.tagName === BUTTON) {
       alert(`You clicked on button ${event.target.innerText}`);
    }
    //prevent more bubbling
    event.stopPropagation();
  });


  // 17 Types
  const num = 10;
  const div = document.querySelector('.numberTarget');
  console.log(num, typeof num); //this is a number nere
  div.innerText = num;
  console.log(parseInt(div.innerText), typeof parseInt(div.innerText)); //this is a string here
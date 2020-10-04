const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

let myName = "Teresa";
console.log(myName);

const firstName = "Teresa";
const lastName = "Payne";
const sentence = "Hello " + "my name is " + firstName + lastName;
console.log(sentence);

// NEW WAY as of 2015 
/*
multi-line comment
new way to write strings - template style
*/
const sentenceTemplate = `Hello ${firstName} ${lastName} ! How are you!?`;
console.log(sentenceTemplate);

const olderDog = "Bella";
const youngerDog = "Bailey";
const dogDesc = `${olderDog} and ${youngerDog} like to go on walks`;
console.log(dogDesc);

const daughter = "Jazmin";
const personality = "anxiety";
const childDesc = `${daughter} can overcome her ${personality}`;
console.log (childDesc);

/* Boolean with Conditionals */

const cheIsaDick = false;

if (cheIsaDick) {
    console.log("Che is a penis");
}
else {
    console.log("Che is a vagina");
}

const tommyIsNuts = true;

if (tommyIsNuts) {
    console.log("Dad should move");
}
else {
    console.log("We can spend Christmas there");
}


const iCanLearnThis = false;

if (iCanLearnThis) {
    console.log("Hallelujah");
}
else {
    console.log("Life sucks");
}

const tempToday = 86;

if(tempToday >= 86) {
    console.log("It's too hot");
}
else {
    console.log("It's fine maybe");
}


// === is a comparison, while = assigning (like assigning variable)
if (2 + 2 === "4") {
    console.log("Gravy");
}
else {
    console.log("Oh no, Mr. Bill!");
}

const myParty = 0;

if (myParty === 0) {
    console.log("Nobody loves me");
}
else if (myParty >= 4) {
    console.log("Perfect size group");
}
else {
    console.log("Rock out!");
}


// While Loops - simiar
// let dogsInTheHouse = 0;
// while (dogsInTheHouse <=3 ) {
//     dogsInTheHouse = dogsInTheHouse + 1;
// }
// console.log("We're good");

// let dogsInTheHouse = 0;
// these all do the same
// dogsInTheHouse = dogsInTheHouse + 1;
// dogsInTheHouse += 1;
// dogsInTheHouse ++;  (see this one most) i++
// ++dogsInTheHouse;

// let friendsAtYourParty = 0;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// friendsAtYourParty = friendsAtYourParty + 1;
// console.log(friendsAtYourParty);

// other operators:
// -= subtraction
// *= multiplication
// /= division
// **= exponent

// let i = 0;
// while(true) {
//     i++;
//     console.log(i);
// }

// let i = 0;
// while(true) {
//     i++;
//     console.log(i);
// }

//For loop
let dogsInTheHouse = 0;
for (let i = 0; i < 3; i++) {
    dogsInTheHouse ++;
}
console.log(dogsInTheHouse);

let character = "a";
const timesToRepeat = 50;
let answer = "";

for (let i = 0; i <= timesToRepeat; i++) {
    answer += character;
}
console.log(answer);

const fName = "Susie";
const lName = "Bennett";
const fullName = "My awesome mom is " + fName + lName;

console.log(fullName);

const fullNameTemplate = `My awesome mom is ${fName} ${lName}`;
console.log(fullName);

const tommyIsADick = true;
if (tommyIsADick) {
    console.log("crazy pants");
}
else {
    console.log("what happened");
}

function dogAge(number) {
    return number + 7;
}

const bellaAge = dogAge(3);
const baileyAge = dogAge(2)
console.log(baileyAge);


function greet(name, age, sex) {
    return `Welcome to your new school ${name} ${age} ${sex} !`;
}

console.log(greet("Jazmin", "17", "female"));
console.log(dogAge(3));

//Way to call a function - just add parentheses
//greet();

const myHomeCity = "Dallas";
const myHomeState = "Texas";
const myHomeCountry = "USA";

function whereILive(myHomeCity, myHomeState, myHomeCountry) {
    console.log( `I live in ${myHomeCity}, ${myHomeState}, ${myHomeCountry}`);
}

whereILive(myHomeCity, myHomeState, myHomeCountry);

/*Scope
const otherThing = 'something'; //global scope - don't want to do this - everything can see and change this
let globalVar = 'unchanged';

function confusion(number) {
    globalVar = 'changed';
    const someVariable = "you cant see me outside this function";
    console.log(someVariable); //this works
    return number + 5;
}

confusion();
console.log(confusion(10));
console.log(someVariable); no work */

//Scope exercise

// const a = "a";
// let f;

// function doStuff(b) {
//     console.log(b); //will work
//     const c = "c";

//     let h = "h";

//     if ( 1 + 1 === 2) {
//         const d = "d";
//         h = "something else";
//     }
//     console.log(d); // out of scope
//     console.log(h); // will work
//     f = "f";
// }

// let e = 0;

// while( e < 3 ) {
//     e++;
//     console.log(a); // will work, cuz global var
//     const g = "g";
// }

// console.log(e); // will work, cuz global var
// console.log(g); // out of scope

// doStuff("b"); // will work
// console.log(b); // out of scope
// console.log(c); // out of scope
// console.log(f); // will work

console.log(Math.ceil(5.9999));

const meh = "Teresa Payne";
console.log(meh.substr(0,3)); // string.substr(indexToStart, howManyCharactersToInclude)


const girl = {
    name : "Jazmin Payne",
    city : "Dallas",
    state : "Texas",
    favoriteFood: "pikza"
};

console.log(girl.name); // preferred way to call the key

const dog = {
    name: "Bailey",
    sex: "girl",
    personality: "extrovert"
}

console.log(dog);

const pookie = {
    name: "John",
    age: "50-65",
    style: "emo"
};

const jaz = {
    name: "Jazmin", // keys have to be unique
    age: "17-25",
    style: "rap"
};



function suggestMusic(person) {
    if (person.age === "25-35") {
        console.log("You're a millenial");
    }
    else if (person.age === "17-25") {
        console.log("We think you will like Cardi B");
    }
    else {
        console.log("Poor Gen-Xer");
    }
}

suggestMusic(pookie);
suggestMusic(jaz);

const someDog = {
    name: "Bella",
    age: 3,
    speak(){ //speak:function() is another way
        console.log("woof woof");
    }
};

someDog.speak();

const me = {
    description: {
        name: "Awesome Teresa",
        age: "why do you ask?",
        race: "privileged white"
        },

    getInfo () {
        return `${this.description.name} ${this.description.age}${this.description.race}`;
    }
}

console.log(me.getInfo());

const you = {
    personality: {
        morning: "mad",
        afternoon: "tired",
        evening: "happy"
    },
    getEmotions() {
        return `${this.personality.morning} ${this.personality.afternoon} ${this.personality.evening}`;
    }
}
console.log(you.getEmotions());

const peopleInFamily = [
    "John",
    "Tom",
    "Jazmin",
    "Jody"
];

console.log(peopleInFamily);
console.log(peopleInFamily[1]);

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));

const dogs = [
    { name: "Bella", age: "3", breed: "mix" },
    { name: "Bailey", age: "3", breed: "heeler mix"},
    { name: "Sally", age: "17", breed: "heeler"}
];

// add another
dogs.push({ name: "Jack", age: "15", breed: "border collie"});
console.log(dogs);


// change one
dogs[2] = { name: "Zero", age: "15", breed: "heeler"};
console.log(dogs);


const cities = [
    "Seattles",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong",
    "Dallas"
];

// method 1
for ( let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

//method 2 
cities.forEach(function(city) {
    console.log(city);
});


//DOM

<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>

<script>
const elementsToChange = document.querySelector('.js-target');
for(let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JS!";
}

</script>

// Events and Listeners
<button class="event-button">Click me!</button>
<script>
    const button = document.querySelector('.event-button');
    button.addEventListener('click', function() {
        alert('Hey there');
});

</script>

<input placeholder = "save us" class="input-to-copy"></input>
<p class="p-to-copy-to">something</p>

<script>
    const crap = document.querySelector('.input-to-copy');
    const crapNext = document.querySelector('.p-to-copy-to');
    input.addEventListener('keyup', function() {
        crapNext.innerText = crap.value;
    });
</script>

<style>
  .color-box {
    background-color: limegreen;
    width: 100px;
    height: 100px;
  }
</style>
<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!"></input>
<script>
    const poop = document.querySelector('.color-input');
    const poopBox = document.querySelector('.color-box');
    poop.addEventListener('change', function(){
        poopBox.style.backgroundColor = poop.value;
    });
</script>
const monthlyRent = 500;
const yearlyRent = 12 * 500;
console.log (yearlyRent);

const husband = "Pookie";
const emotion = "angry";
const sentenceTemplate = `My ${husband} is always ${emotion}`;
console.log(sentenceTemplate);

const tommyIsADick = false;
if (tommyIsADick) {
    console.log("we have to move");
} else {
    console.log("we can do whatever");
}

if( 2 + 2 === 5) {
    console.log("hooray");
}else {
    console.log("boo");
}

const todaysHigh = 99;

if(todaysHigh >= 102) {
    console.log ("OMG");
}
else {
    console.log("Hallelujah");
}

const myParty = 20;

if (myParty === 0) {
    console.log("no one loves me");
}
else if (myParty === 5) {
    console.log("whoo hoo");
}
else {
    console.log("I'm amazing");
}

let dogsInTheHouse = 0;

for ( let i =0; i < 4; i++){
    dogsInTheHouse++;
}
console.log(dogsInTheHouse);

let character = "a";
const timesToRepeat = 50;
let answer = "";

for ( let i = 0; i <= timesToRepeat; i++) {
    answer += character;
}
console.log(answer);

const girl = {
    name: "Jazmin",
    age: 17,
    style: "emo"
};

console.log(girl.age);

const boy = {
    name: "John",
    age: 50,
    style: "rigid"
};
console.log(boy.style);



function ageMinimum(person) {
    if (person.age > 18 ) {
        console.log ("come on in");
    }
    else if (person.age < 18 ) {
        console.log ("try again in a few years");
    }
}

ageMinimum(girl);
ageMinimum(boy);

const meh = "Tommy Sucks Balls";

console.log(meh.substr(6, 6));



//1.
const mnthly = 300;
const yrly = mnthly * 12;

console.log(yrly);

//2.
const fnme = 'Teresa';
const maidenName = 'Bennett';
const marriedName = 'Payne';

const stnceTemplate = `I am ${fnme} ${marriedName}, but I used to be ${fnme} ${maidenName}`;
console.log(stnceTemplate);

//3.
const terribleBrother = false;

if (terribleBrother) {
    console.log('time to move Dad');
}
else {
    console.log('he can stay a little longer');
}


//4.
const myFamily = 4;

if (myFamily === 3) {
    console.log('small, but powerful');
}
else if (myFamily === 4) {
    console.log('hangin out with pops');
}
else  {
    console.log('what happened');
}

//5.
let dogs = 0;

for(let i=0; i<3; i++) {
    dogs++;
}
console.log(dogs);

//6.
const Jaz = {
    name: 'Jazmin',
    age: 17,
    purpose: 'God only knows'
}
console.log(Jaz.purpose);

//7.
const Che = {
    name: 'John Jr',
    age: 50,
    purpose: 'torture me'
}



function funTime(ageRequirement) {
    if (ageRequirement.age > 20) {
        console.log('lets go party');
    }
    else {
        console.log('sucks for you');
    }
}


funTime(Che);
funTime(Jaz);


//8.
const poop = "Tommy is the devil";
console.log(poop.substr(0,5));

//9.
const crazyDog = {
    name: "Bella",
    age: 3,
    birthMonth: "March",

    idontKnow() {
        return `${this.name} ${this.age} ${this.birthMonth}`;
    }
}
console.log(crazyDog.idontKnow());

//10.
const allMyDogs = [
    "Bella",
    "Bailey"
];
console.log(allMyDogs[1]);

const myDogs =[
   { name: "Bailey", age: "2" },
   { name: "Bella", age: "3"}
];

myDogs.push({ name: "Sally", age: "17"});
console.log(myDogs);

// when changing array item, no (), yes =
myDogs[0] = { name: "Zero", age: "15"};
console.log(myDogs);

//11.
const groceries = [
    "apples",
    "bananas",
    "lettuce"
];

for(let i = 0; i < groceries.length; i++) {
    console.log(groceries[i]);
}

groceries.forEach(function(grocery){
    console.log(grocery);
});
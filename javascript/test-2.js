//09.10.20
//1
const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

//2
const fname = "Jazmin";
const lname = "Payne";
const age = "not old enough";
const descTemplate = `${fname} ${lname} is a ${lname} in my butt cuz she is ${age}`;
console.log(descTemplate);


//3
const activeNav = false;

if (activeNav) {
    console.log('omg that took forever');
}
else {
    console.log('try again');
}

//4
const TommyIsADick = false;

if (TommyIsADick) {
    console.log('shocker');
} else if ( TommyIsADick != true){
    console.log ('i don\'t believe you');
}
else {
    console.log ('ask Roserica');
}

const weather = 56;

if (weather === 90) {
    console.log('that\s more like Texas');
} else if ( weather < 90) {
    console.log('getting better');
} else {
    console.log('it\s chilly outside');
}


//5
let dogs = 0;

for ( let i=0; i < 3; i++) {
    dogs++;
}
console.log(dogs);

let character = "a";
const timesToRepeat = 50;
let finish = "";

for (let i = 0; i < timesToRepeat; i++) {
    finish += character;
}
console.log(finish);

//6
const John = {
    name: "Pookie",
    age: 50,
    personality: "drama"
}
console.log (John.name);

//7 ****
const Tom = {
    name: "Thomas",
    age: 74,
    personality: "stoic"
}

function howOld(person) {
    if (person.age > 50) {
        console.log ("Congrats you\'re in AARP");
    }
    else if ( person.age > 70) {
        console.log("Dude, you\'re old");
    }
    else {
        console.log("This is confusing");
    }
}
howOld(Tom);
howOld(John);

//8
const meh = "Tommy Bennett";
console.log(meh.substr(6,12));

//9 ****
const doggie = {
    name: "Bella",
    age: "3",
    breed: "border collie",

    idontKnow() {
        return `${this.name} is a ${this.age} year old ${this.breed}`;
    }
}
console.log(doggie.idontKnow());


//10 ***
const family =[
    { name: "John", age: 50, job: "teacher"},
    { name: "Teresa", age: 53, job: "dev"},
    { name: "Jazmin", age: 17, job: "student"}
]
family.push ({name: "Tom", age: 74, job: "retired"});
console.log(family);
family[3] = {name: "Jody", age: 80, job: "crank"};


//11 **
const bestDogs = [
    "Sally",
    "Bailey"
]

for ( let i =0; i< bestDogs.length; i++) {
    console.log(bestDogs[i]);
}

bestDogs.forEach(function(Dogs) {
    console.log(Dogs);
});


// 14
const grabNuttyCopy = document.querySelector(".nuts");
const putNuttyCopyHere = document.querySelector(".incoming-nuts");

grabNuttyCopy.addEventListener('keyup', function(){
    putNuttyCopyHere.innerText = grabNuttyCopy.value;
});


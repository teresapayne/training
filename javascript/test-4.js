// 1
const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log (yearlyRent);

// 2
const firstDog = "Sally";
const firstDogAge = 17;
const secondDog = "Jack";
const secondDogAge = "15";

const pets = `My ${firstDog} died at age ${firstDogAge}. Our second dog ${secondDog}, died at ${secondDogAge};`
console.log(pets);


// 3
const highstrungChe = false;

if (highstrungChe) {
  console.log("time for more testosterone");
} else {
  console.log("he\'s okay");
}

// 4
const numberHurricanes = 11;
const averageHurricanes = 2;

if (numberHurricanes === 5) {
  console.log("this year is rough");
}
else if (numberHurricanes > 10){
  console.log("record breaking year");
}
else {
  console.log("better");
}


// 5
let myDogs = 0;
for(let i = 0; i < 3; i++) {
  myDogs++
}
console.log(myDogs);

let character = "";
const timestoLoop = 10;
let myLetter = "T";

for ( i = 0; i <= timestoLoop; i++) {
  character+=myLetter;
}
console.log(character);

// 6
const jazmin = {
  attitude : "bitch",
  age : 17,
  gender : "female"
}
console.log(jazmin.attitude, jazmin.age, jazmin.gender);

// 7
const che = {
  attitude : "can-do",
  age : 50,
  gender : "male"
}
const teresa = {
  attitude : "can-do",
  age : 35,
  gender : "female"
}
function whoisCrazier (person){
  if(person.age >= 50){
    console.log("join AARP");
  }
  else if (person.age < 18){
    console.log("stuck at home");
  }
  else{
    console.log("Gen Xer");
  }
}
whoisCrazier(che);
whoisCrazier(jazmin);
whoisCrazier(teresa);

// 8
const dick = "Tommy Bennett";

console.log(dick.substr(0,5));

// 9
const carrolltonHouse = {
  yearBuilt : 1973,
  builder : "Fox and Jacobs",
  sprinklers : true,
  sellHouse() {
    return `We are selling our ${this.yearBuilt} ${this.builder} home`;
  }
}
console.log(carrolltonHouse.sellHouse());

// 10
const numbers = [
  { digit : 1 },
  { digit : 2 },
  { digit : 3 },
  { digit : 4 }
];

numbers.push({ digit : 7 });
console.log(numbers);
numbers[1] = ({ digit : "hello"});
console.log(numbers);


// 11
const groceries = [
  "bananas",
  "kale",
  "beef",
  "milk"
]

for ( i = 0; i <= groceries.length; i++) {
  console.log(groceries[i]);
}

groceries.forEach(function(hiya){
  console.log(hiya);
});


// 12
const grabItem = document.querySelectorAll(".new");

for ( let i = 0; i < grabItem.length; i++) {
  const newItems = grabItem[i];
  newItems.innerText = "baaaaa";
}

// 13
const popUp = document.querySelector(".my-button");
popUp.addEventListener('click', function(){
  alert("betcha");
});


// 14
/** 
 * @type HMTLInputElement 
 * 
*/
const grabhisNuts = document.querySelector(".ches-nuts-here");
const puthisNuts = document.querySelector(".ches-nuts")

grabhisNuts.addEventListener('keyup', function(){
  puthisNuts.innerText = grabhisNuts.value;
});


// 15
/** 
 * @type HMTLInputElement 
 * 
*/
const boxGraphic = document.querySelector(".box");
const boxColor = document.querySelector(".box-color");

boxColor.addEventListener('change', function(){
  boxGraphic.style.backgroundColor = boxColor.value;
});


// 16
document.querySelector(".button-list").addEventListener('click', function(event){
  alert(`You clicked ${event.target.innerText}`)
});

// 17
const num = 10;
const div = document.querySelector(".number-target");
console.log(num, typeof num);
div.innerText = num;
console.log(parseInt(div.innerText), typeof parseInt(div.innerText));


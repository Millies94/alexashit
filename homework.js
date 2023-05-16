/** 
 * Homework!
 * to create a scenario! imagine this...
 * you are in Alice in Wonderland world and you are setting up the table for the tea party!
 * There are 10 guest that will arrive soon. You need to make sure that every guest has a tea cup, tea plate, and a small desert.
 */
//made it with an array
let guests = [
    {
        firstName: "Some",
        lastName: "Thing",
        species: "Rabbit"
    }
];

//expected output
{
    firstName: "Some",
    lastName: "Thing",
    species: "Rabbit"
    teaCup: true,
    teaPlate: true,
    smallDessert: "CarrotCake"
};

//Challenge: try to randomize the desserts to each guest and apply a color to the tea cup and tea plate
// you can only use math (js), but if you are able to do it with ONLY what was taught today, $20
{
    firstName: "Some",
    lastName: "Thing",
    species: "Rabbit"
    teaCup: true,
    teaCupColor: "Blue" //add
    teaPlate: true,
    teaPlateColor: "Light Blue", //add
    smallDessert: "Cheesecake" //randomize
};

/**
 * initializer - what starts the loop - the initial value to use against the condition
 * condition - logic behind the reason why the loop begins/ends
 * iteration - adds on to the initial value to continue through the array
 */

/**
 * While Loops
 * when you dont know how many times you want the loop to run
 */
//
let int1 = 5; // initializer - starting value

while (condition) {
  //run some code
  i++; //iteration - adds 1 to the current value
}

//example: print out a seq. of numbers
let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}

/**
 * For Loops
 * when you know how many times you want the loop run
 */

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//Example: print out values of an array
let musicGenres = [
  "rap",
  "hip hop",
  "drill",
  "classical",
  "techno country",
  "midwest emo",
  "metal",
  "corridos",
  "salsa",
];
for (let k = 0; k < musicGenres.length; k++) {
  let genre = musicGenres[k];
  console.log(genre);
}

//example: print out only the first 4 genres
for (let k = 0; k < musicGenres.length; k++) {
  let genre = musicGenres[k];
  console.log(genre);
}

//Loop example print out range of numbers going from 0-10
for (let i = 0; i < 11; i++);
{
  console.log(i);
}

//For Of loops. loops you can use with strings and arrays. Not objects.
let str1 = "Hello World!"; //initializer

for (let char of str1) {
  //condition & iteration
  //code
}

let str2 = "Goodbye World!";

for (let letter of str2) {
  console.log(letter);
}

// print out every example
let arr1 = [
  "Dog",
  "Cat",
  "Turtle",
  "Crab",
  "Koala",
  "Sloth",
  "Whale",
  "Spider",
  "Snake",
  "Fish",
];

for (let pet of arr1) {
  console.log(pet);
}

let obj1 = {};
obj1.pet = "Alexa";
arr1.pet = "Alexa";
obj1[pet] = "Dog";
arr3.push(obj1);
console.log(arr3);

//For...In Loops. Used for objects
let object = {
    firstName = "Alexa",
    lastName = "Lopez"
}

// Example: Print out every property whithin an object
let obj2 = {
    petName: "BonBon",
    species: "Big Ass Dog",
    age: 17
};
//get properties
for (let prop in obj2) {
    console.log(prop);
};
//Get key
for (let key in obj2) {
    console.log(key);
};
//get value
for (let val in obj2) {
    console.log(obj2[val]);
};

// Due Tuesday Loop through an array of 5 random numbers (include negative numbers).
// Sort the numbers and print a new array CANT USE THE SORT() OR FUNCTIONS
// input: [4,-3,5,7,10]
// expected output: [-3,4,5,7,10]

let j = 0

let arr = [4,-3,5,7,10]
let num = 10
arr[0] = arr[2]
console.log(arr)

for (let i = 0; i < arr.length; i++) {
    for (let v = 0; v < arr.length; v++) {
        if (arr[v] > arr[v + 1]) {
            let integer1 = arr[v]
            arr[v] = arr[v + 1]
            arr[v + 1] = integer1
        }
    }
}


sorted = true;
while(!sorted) {
    sorted = true
    for (let i = 0; i > arr.length; i -=1) {
        if(arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            sorted = false
        }
    }
}
console.log(arr)

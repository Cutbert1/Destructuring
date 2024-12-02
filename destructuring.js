/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets of array

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

// Destructuring subsets of object

let languages2 = {
    firstlanguage: "english",
    secondlanguage: "french",
    thridlanguage: "german",
    fourthlanguage: "japanese",
};
let {firstlanguage, thridlanguage} = languages2;
console.log(firstlanguage, thridlanguage);

// Using rest parameter syntax for array

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

// Using rest parameter syntax for object

let favouriteFoods = {
    brain: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let {brain, anna, ...rest} = favouriteFoods;
console.log(brain);
console.log(anna);
console.log(rest);

//Destructuring Challenge

//You will create three variables using destructuring on an array returned from a function. 
//The first and second variables will be the first two items in the array and the final one will be the remainder of items in the array. 
//You will also create an arrow function, Which should return an array containing all the subjects for whichever students name is supplied when the function is called.
 
//1. Declare a variable named: makeList using the keyword const
//2. The variable makeList should be assigned an arrow function
//3. The arrow function should take two parameters named: arr, student
//4. The arrow function should use a return statement
//5. The function should return an array of the subjects for the student whose name is passed into the function when called.
//6. Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
//7. log out the values  first, second, and rest to view their values
//Note the function should return the correct subjects when the names Emily, Adam, and Fran are used, and this will be tested.

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

//Write code below

const makeList = (arr, student) => {
    for(let itm of arr) {
        if(itm.name == student) {
          return itm.subjects;
        }
    }
};

let [first, second, ...rests] = makeList(students, 'John');
console.log(first, second, rests);

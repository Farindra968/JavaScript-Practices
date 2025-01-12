/// if-else condition

/// Traffic light
let color = "yellow";
if (color == "red") {
  console.log(`Stop! Traffic light is ${color}`); /// True - if traffic light color is red
} else if (color == "green") {
  console.log(`Go Fast! Traffic light is ${color}`); /// True - if traffic light color is green
} else if (color == "yellow") {
  console.log(`Wait! Traffic light is ${color}`); /// True - if traffic light color is yellow
} else {
  console.log(`O shit! Traffic light is not working`);
}


/// Mark
let mark = 99

if (mark>=100) {
    console.log(`Wow! You have secure A+`)
} else if (mark >= 90) {
    console.log(`Wow! You have secure A`)
} else if (mark >= 80) {
    console.log(`Wow! You have secure B+`)
} else if (mark >= 70) {
    console.log(`Wow! You have secure B`)
} else if (mark >= 60) {
    console.log(`Wow! You have secure C+`)
} else if (mark >= 50) {
    console.log(`Wow! You have secure C`)
} else if (mark >= 40) {
    console.log(`Wow Pass! You have secure D+`)
} else {
    console.log(`Fail ! Try next time`)
}

/// XL = 250 L=200 M=100 S=50

let size = "SM"
if (size == "XL") {
    console.log(`The ${size} size popcorn price is Rs. 250`)
} else if (size == "L") {
    console.log(`The ${size} size popcorn price is Rs. 200`)
} else if (size == "M") {
    console.log(`The ${size} size popcorn price is Rs. 100`)
} else if (size == "S") {
    console.log(`The ${size} size popcorn price is Rs. 50`)
} else {
    console.log(`The ${size} size popcorn is not available, please choose other`)
}

// Mark Nested if-else /// Theory & Practical

let passMark = 30
let theoryPassMark = 27.5
let practicalPassMark = 12

if (passMark >= 30) {
    if (theoryPassMark >= 27.5) {
        console.log(`Good you have secure ${theoryPassMark} in Theory`)
    } else {
        console.log(`Fail You have secure ${theoryPassMark} in Theory`)
    }

    if (practicalPassMark >= 12) {
        console.log(`Good you have secure ${practicalPassMark} in Practical`)
    } else {
        console.log(`Fail you have secure ${practicalPassMark} in Theory`)
    }

    console.log(`Good you have secure ${passMark}}`)
} else {
    console.log(`Fail You have secure ${passMark}`)
}


/// && Logical &&
if (passMark >= 30) {

    if (theoryPassMark >= 27 && practicalPassMark >= 12) {
        console.log(`Good you have Passed in both Practical ${theoryPassMark} and Theory ${practicalPassMark} Mark`)
    }
    else {
        console.log(`Fail You have not Passed in both Practical ${theoryPassMark} and Theory ${practicalPassMark} Mark`)
    }

    console.log(`Good you have secure ${passMark}`)
} else {
    console.log(`Fail You have secure ${passMark}`)
}

let x = 2
let b = 4
console.log((a>b)&& a<b);


let num = 12

if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1== 11))) {
    console.log("Good");
} else {
    console.log("Bad");
}

/// Switch Statementg
let day = 6

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
}


// String
//Trim - to remove whitespace from string at end of string and start of string

let str = "        Hello, World      "

console.log(str)
console.log(str.trim())

///
let setPassword = prompt('Set Password')

console.log(setPassword.trim())

//Q1.
let msg = "Help!"
let newMesg = msg.trim().toUpperCase()
console.log(newMesg)


//Q2
let name = "CodingCollege"
console.log(name.slice(4, 9)) //College
console.log(name.indexOf('na')) //2 -3
console.log(name.replace("Coding", "Our")); // OurCollege

// For Loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// for loop backward

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// printing odd numer from 1-15
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

// for loop backward
for (let i = 15; i >= 1; i = i - 2) {
    console.log(i);
}

// Print even number from 2-10
for (let i = 2; i <= 10; i = i + 2){
    console.log(i);
}

// backward
for (let i = 10; i >= 2; i = i - 2) {
    console.log(i);
}

// Multiplication of table 5 5x1=5 5x2=10

for (let i = 5; i <= 50; i = i+5) {
    console.log(i);
}

// Write any table using promt

let a = prompt("Enter Number")
a = parseInt(a)

for (let i = a; i <= a*10; i = i + a) {
    console.log(i);
}

/// While loop

let i = 1
while (i <= 5) {
    console.log(i)
    i++
}

//foward using while loop

// 5 4 3 2 1

let n = 5

while (n >= 1) {
    console.log(n)
    n--
}

//Print 0-20

let m = 0
while (m <= 20) {
    console.log(m)
    m++
}

// Guess Number

let myNumber = 22
let guess = prompt("Guess the Number")
guess = parseInt(guess)

while ((myNumber != guess)) {
    console.log("Wrong Number");
    guess = prompt("O Shit! Wrong Guess the Number")
}

if (myNumber = guess) {
    console.log(`Wow you have guess correct number ${myNumber}`)
}


/// break keyword
let k = 0
while (k <= 15) {
    if (k === 10) {
        break;
    }
    console.log(k);
    k++
}


// Loop in array

let fullName = ["Ram", "Shyam", "Hari", "Rita", "Gita"]
fullName.push(prompt("Add Name"))
for (i = 0; i < fullName.length; i++) {
    console.log(fullName[i],)

}

// Object Literal
let students = {
    name: 'Hari Bhandari',
    class: 10,
    roll_no: 11,
    address: 'Miklajung-9, Morang',
    phone_No: 9804055880,
}

/// Nested object
let studentData = {
    class1:{
        name: 'Hari Bhandari',
        class: 10,
        roll_no: 11,
        address: 'Miklajung-9, Morang',
        phone_No: 9804055880,
    },
    class2:{
        name: 'Hari Bhandari',
        class: 10,
        roll_no: 11,
        address: 'Miklajung-9, Morang',
        phone_No: 9804055880,
    }
}

// Array of Object
const studentInfo = [
    {
        name: 'Hari Bhandari',
        class: 10,
        roll_no: 11,
        address: 'Miklajung-9, Morang',
        phone_No: 9804055880,
    },
    {
        name: 'Hari Bhandari',
        class: 10,
        roll_no: 11,
        address: 'Miklajung-9, Morang',
        phone_No: 9804055880,
    },
]


let o =Math.floor(Math.random() * 10)
console.log(n)


///Q1 Generate Random Number between 1-100
let num1 = Math.floor(Math.random() * 100) + 1;
console.log(num1)

///Q1 Generate Random Number between 1-100
let num2 = Math.floor(Math.random() * 5) + 1;
console.log(num2)

///Q3 Guess the Number
let inputNumber = prompt("Guess the Number")
inputNumber = parseInt(inputNumber)
let guessNumber = Math.floor(Math.random() * 5) + 1;

if (inputNumber === guessNumber) {
    console.log(`Wow! You have guess correct number ${inputNumber}`)
} else if (inputNumber !== guessNumber) {
     inputNumber = prompt("Guess the Number")
} else {
    inputNumber = prompt("Guess the Number")
}

/// Q4 Guess Number
const maxNumber = prompt("Enter Maximum Number")
let number = Math.floor(Math.random() * maxNumber) + 1;
let guess1 = prompt("Guess the Number")

while(true) {
    if (guess == number) {
        console.log(`Wow! You have guess correct number ${guess}`)
        break;
    } else if (guess > number) {
        guess = prompt("Hint: Number is too high, Guess the Number")
    } else {
        guess = prompt("Hint: Number is too low, Guess the Number")
    }
}

/// Function
function functionName1() {
    // Simple function
}

functionName1(); // callin the function

const functionName = () => {
    // Array function
}

functionName(); // calling the function


function generateNumber() {
    const Generate = Math.floor(Math.random() * 10) + 1;
    console.log(Generate);
};

generateNumber();

function generateNumber1() {
    for (i = 0; i <= 10; i++) {
        console.log(i)
    }
};

// generateNumber1();

function isVote() {
    let age = 17;
    if (age >= 18) {
        console.log(`Your age is ${age} now your are ready to vote`)
    } else {
        console.log (`Sorry You cannot vote`)
    }
}

isVote();

/// Function with Argument
/// Passing the value from function

function myArgument (arg1, arg2, argn) {
    
}

function myName3(name) {
    console.log(name);
}
myName3("Farindra Bhandari")


// calculate average of 3 number
function average(a, b, c) {
    avg= (a + b + c) / 3
    console.log(avg);
}
average(5,4,3)


//Multiplication table of 2
function Multiplication(a) {
    for (i = a; i <= a*10; i=i+a) {
        console.log(i)
    }
}

Multiplication(6);

/// Return
function returnFunction() {
    // js function include here
    return;
}

// Create a function that return the number from 1 to n ...
function sumFunction(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum = sum+i;
    }
    return sum;
}


/// Try Catch

// try block: Contains the code that might throw an exception.
// catch block: Handles the exception if one occurs

/// If an error occurs inside the try block, the catch block captures it and prevents the program from crashing.

let j=5
console.log('Hello')
console.log('Hello')

try {
    console.log(j)//5
} catch {
    console.log('Error')
}

console.log('Hello')
console.log('Hello')
console.log('Hello')


//SetTimeout:
//setTimeout() is a JavaScript function that executes a specified piece of code or function after a set delay (in milliseconds).

// setTimeout(function, delay);

console.log('Run Time')
setTimeout(() => {
    console.log('Eunning the the Time')
}, 8000)

// console.log('End Time')

let t = 'Happy Customer'

setTimeout(() => {
    for (let i = 0; i <= 20; i++){
        console.log(t)
    }
},4000)

///setInterval
///
/// setInterval(function, time)

 const id = setInterval(() => {
    console.log("Hello i'm Interval")
 }, 2000);

 console.log(id)


/// arr.forEach
 // The forEach() method in JavaScript is used to execute a provided function once for each array element. It is primarily used to iterate over an array without returning a new array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 
function print(el) {
    console.log(el);
}

arr.forEach(print)

arr.forEach(function (el) {
    console.log(el)
})

//With arrow function
arr.forEach( (el) =>{
    console.log(el)
})


//forEach in object
let student = [
    {
        name: 'Raj',
        age: 22,
    },
    {
        name: 'Ram',
        age: 26,
    },
    {
        name: 'Damesh',
        age: 30,
    },
]

student.forEach((obj) => (
    console.log(obj.age)
))

// Map
let students3 = [
    {
        name: 'Raj',
        age: 22,
    },
    {
        name: 'Ram',
        age: 26,
    },
    {
        name: 'Damesh',
        age: 30,
    },
]

students3.map((obj) => (
    console.log(obj.age)
))


// Filter
/// The arr.filter method in JavaScript creates a new array containing all elements of the original array (arr) that pass a specified test implemented by a provided callback function.


let getNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let evenNum = getNum.filter((item) => {
    return item % 2 !== 0;
})


// Every

/// arr.every() is a JavaScript array method that checks if every element in an array satisfies a given condition (callback function). It returns true if all elements pass the test, otherwise false.

let even = [1, 3, 5, 7, 9].every((el) => el % 2 == 0)
console.log(even)

let someEven = [1, 3, 5, 8, 9].some((el) => el % 2 == 0)
console.log(someEven)
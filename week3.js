//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//i was confused with the wording in 1a so i tried to answer to the best of my abilities. Used .at and .length 

var x = ages.at(0);
var y = ages[ages.length - 1];
console.log(y - x);

//1b Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
//1b wasnt sure where to place the age so i placed it in the front with the unshift() method
ages.unshift(1);
var x = ages.at(0);
var y = ages[ages.length - 1];
console.log(y - x);

// 1c Use a loop to iterate through the array and calculate the average age. Print the result to the console.
for (i = 0; i < ages.length; i++) {
    sum = ages[i]
    average = (sum / ages.length)  // formula used
}
console.log(average);

// Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//2a Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
sum = 0;
for (i = 0; i < names.length; i++) {
    sum += names[i].length;
}
average = sum / names.length;
console.log(average);

//2b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let twob = ''
for (let i = 0; i < names.length; i++) {
    twob += names[i] + ' ';
}
console.log(twob);

//3
// To access the last element of an array you can use arrayname[arrayname.length-1].

//4
// to access the first element of array you can use arrayname(0) or arrayname.at(0).

//5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log('' + nameLengths);

//6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
//used for of loop
var sum = 0
for (num of nameLengths) {
    sum += num;
} console.log(sum);

//7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’)
function takesTwo(word,n) {
    return word.repeat (n);
}
// testing 
let testing = takesTwo('cheese', 3);
console.log(testing);

//8 Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
//test
let fullName = getFullName('Jose', 'Fuentes Mejia');
console.log(fullName);

//9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let exArray = [1,2,3,4,96]
let total = exArray.reduce(function(x, y) {
    return x + y;
},0);
    if (total > 100) 
console.log(true);

//10 Write a function that takes an array of numbers and returns the average of all the elements in the array.

let tenArray = [1,2,3,4,5]
function averageOfNumbers() {
    var sum = 0;
    for (number of tenArray) {
        sum += number;
    }
    return sum/tenArray.length;
// tested with sample array
} console .log(averageOfNumbers(tenArray))

//11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//tested with sample arrays
let arrNumOne = [1,4,7,43];
let arrNumTwo = [2,6,9,10];

let sumNumOne = arrNumOne.reduce(function(a, b) {
    return a + b;
},0);
let sumNumTwo = arrNumTwo.reduce(function(a, b) {
    return a + b;
},0);
//then
if (sumNumOne > sumNumTwo) {
    console.log(true);
};

//12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside,moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50) {
        return true;
     } 
 } 
 // testing 
 let isHotOutside = true;
 let moneyInPocket = 10.54;
 console.log(willBuyDrink(isHotOutside,moneyInPocket))

 // 13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

 // orgnizing things alphabetically. I thought it'd be useful to organize names alphabetically if youre going through a list that needs to be 
 let lastNames = ['Watson', 'Konner','Zed', 'PLaza', "Doe"]
 function operationFin(namesFin){
    return namesFin.sort()
}

console.log('' + operationFin(lastNames));
// removing '' & the "+" from above will also give the total length. 
// for certain questions above i coulve added an "else" to make the console print something other than "true", such as "false", but wasnt sure if i had to. 
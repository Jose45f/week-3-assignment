let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//i was confused with the wording in 1a so i tried to answer to the best of my abilities. Used .at and .length 

var x = ages.at(0);
var y = ages[ages.length - 1];
console.log(y - x);

//1b wasnt sure where to place the age so i placed it in the front with the unshift() method
ages.unshift(1);
var x = ages.at(0);
var y = ages[ages.length - 1];
console.log(y - x);

// 1c 
for (i = 0; i < ages.length; i++) {
    sum = ages[i]
    average = (sum / ages.length)  // formula used
}
console.log(average);

// #2 did get stuck but followed 1c outline
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
sum = 0;
for (i = 0; i < names.length; i++) {
    sum += names[i].length;
}
average = sum / names.length;
console.log(average);

//2b 
let twob = ''
for (let i = 0; i < names.length; i++) {
    twob += names[i] + ' ';
}
console.log(twob);

//3
// To access the last element of an array you can use arrayname[arrayname.length-1].

//4
// to access the first element of array you can use arrayname(0) or arrayname.at(0).

//5 
let nameLengths = [];
for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log('' + nameLengths);

//6 used for of loop
var sum = 0
for (num of nameLengths) {
    sum += num;
} console.log(sum);

//7 
function takesTwo(word,n) {
    return word.repeat (n);
}
// testing 
let testing = takesTwo('cheese', 3);
console.log(testing);

//8
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
//test
let fullName = getFullName('Jose', 'Fuentes Mejia');
console.log(fullName);

//9
let exArray = [1,2,3,4,96]
let total = exArray.reduce(function(x, y) {
    return x + y;
},0);
    if (total > 100) 
console.log(true);

//10 
let tenArray = [1,2,3,4,5]
function averageOfNumbers() {
    var sum = 0;
    for (number of tenArray) {
        sum += number;
    }
    return sum/tenArray.length;
// tested with sample array
} console .log(averageOfNumbers(tenArray))

//11 with sample arrays
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

//12
function willBuyDrink(isHotOutside,moneyInPocket) {
    if(isHotOutside && moneyInPocket > 10.50) {
        return true;
     } 
 } 
 // testing 
 let isHotOutside = true;
 let moneyInPocket = 10.54;
 console.log(willBuyDrink(isHotOutside,moneyInPocket))

 // 13 
 // orgnizing things alphabetically. I thought it'd be useful to organize names alphabetically if youre going through a list that needs to be 
 let lastNames = ['Watson', 'Konner','Zed', 'PLaza', "Doe"]
 function operationFin(namesFin){
    return namesFin.sort()
}

console.log('' + operationFin(lastNames));
// removing '' & the "+" from above will also give the total length. 
// for certain questions above i coulve added an "else" to make the console print something other than "true", such as "false", but wasnt sure if i had to. 
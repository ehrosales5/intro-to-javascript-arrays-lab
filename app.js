// Exercise 1

const foods = [''];
console.log('Exercise 1 result:', foods)

// Exercise 2

foods.unshift('Pizza', 'Cheeseburger');
console.log('Exercise 2 result:', foods)

// Exercise 3

foods.unshift('Taco');
console.log('Exercise 3 result:', foods)

// Exercise 4

const favFood = foods[1];
console.log('Exercise 4 result:', favFood)

// Exercise 5

foods.splice(2, 0, 'Tofu');
console.log('Exercise 5 result:', foods)

// Exercise 6

foods.splice(1, 1, 'Sushi', 'Cupcake');
console.log('Exercise 6 result:', foods)

// Exercise 7

const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy)

// Exercise 8

const soyIdx = foods.indexOf('Tofu');
console.log('Exercise 8 result:', soyIdx)

// Exercise 9

const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods)

// Exercise 10

const hasSoup = foods.includes('Soup');
console.log('Exercise 10 result:', hasSoup)

// Exercise 11

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !==0) {
        odds.push(nums[i]);
    }
}


console.log('Exercise 11 result:', odds);

// Exercise 12

const numss = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < numss.length; i++) {
    if (numss[i] % 3 === 0 && numss[i] % 5 === 0) {
      fizzbuzz.push(nums[i]);
    } else if (numss[i] % 3 === 0) {
        fizz.push(numss[i]);
    } else if (numss[i] % 5 === 0) {
        buzz.push(numss[i]);
    }

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
}

// Exercise 13

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 result:', numList);

// Exercise 14

const num = numArrays[2][1];
console.log('Exercise 14 result;', num)

// Exercise 15

let total = 0;

for (let i = 0; i < numArrays.length; i++) 
console.log('Exercise 15 result;', total)
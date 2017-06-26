'use strict'
/*
	Rest and Spread:

	Rest: Gethering up params and putting them in a single array
	Spread: Spreading out the elements of an array, or string.
*/

// REST OPERATOR:

/*
Exmaple 1:
var showCategories = function (productId, ...categories) {
	console.log(categories instanceof Array);
};
showCategories(123, 'Search', 'Advertising'); // true
*/

/*
Example 2:
var showCategories = function (productId, ...categories) {
	console.log(categories);
};
showCategories(123, 'Search', 'Advertising'); // array ['Search', 'Adversiting']
*/

/*
Exmaple 3:
var showCategories = function (productId, ...categories) {
	console.log(categories);
};
showCategories(123); // []
*/

// SPREAD OPERATOR:

/*
Example 1:
let prices = [12, 20, 18];
let maxPrice = Math.max(...prices);
console.log(maxPrice);
*/

/*
Example 2:
let prices = [12, 20, 18];
let newPriceArray = [...prices];
console.log(newPriceArray); // [12, 20, 18]
*/

/*
Example 3:
let maxCode = Math.max(...'43210');
console.log(maxCode); // 4
*/

let codeArray = ['A', ...'BCD', 'E'];
console.log(codeArray); // ['A', 'B', 'C', 'D'.....]




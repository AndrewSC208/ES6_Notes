'use strict';
/*
	let: no longer supports variable hosting.
*/
console.log(productId);
let productId = 12; // result in 'ref' error

/*
	Block Scoping: Curly brackets now used block scoping
*/
let productId = 12;
{
	let productId = 2000;
}
console.log(productId); // 12

/*
	const:
*/
const MARKUP_PCT = 100;
MARKUP_PCT = 10;
console.log(MARKUP_PCT); // type error


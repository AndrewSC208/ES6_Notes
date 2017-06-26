'use strict';
/*
	Default Function Params:
*/
let getProduct = function(productId = 1000) {
	console.log(productId);
};
getProduct();

let getTotal = function(price, tax = price * 0.07) {
	console.log(price + tax);
};
getTotal(5.00); // 5.35

// can pass in a functions as default:
let generateBaseTax = () => 0.07;
let getTotal = function(price, tax = price * generateBaseTax() ) {
	console.log(price + tax);
}
getTotal(5.00); // 5.35
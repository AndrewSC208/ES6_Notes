'use strict';
/*
	Object Literal Extentions:
*/

/*
Example 1:
let price = 5.99, quantity = 30;
let productView = {
	price, 
	quantity
};
console.log(productView); // {price: 5.99, quantity: 30}
*/

/*
Example 2:
let price = 5.99, quantity = 10;
let productView = {
	price, 
	quantity,
	calculateValue() {
		return this.price * this.quantity
	}
};
console.log(productView); // { price: 5.99, quantity: 10, calculateValue: [Function: calculateValue]} 
console.log(productView.calculateValue()); // 59.90000000006
*/

/*
Example 3:
let price = 5.99, quantity = 10;
let productView = {
	price: 7.99, 
	quantity: 1,
	calculateValue() {
		// the 'this' refrences the containing object
		return this.price * this.quantity
	}
};
//console.log(productView); // { price: 7.99, quantity: 1, calculateValue: [Function: calculateValue]} 
console.log(productView.calculateValue()); // 7.99
*/

/*
Example 4:
let field = 'dynamicField';
let price = 5.99;
var productView = {
	[field]: price
};
console.log(productView); // {dynamicField: 5.99}*/

/*
Example 5:
let field = 'dynamicField';
let price = 5.99;
var productView = {
	[field + '-001']: price
};
console.log(productView); // {'dynamicField-001': 5.99}
*/

/*
Example 6: This is cool, you can make dynamic functions
let method = 'doIt'
let productView = {
	[method + '-001']() {
		console.log('in a method');
	}
};
productView['doIt-001'](); // 'in a method'*/

/*
let ident = 'productId';
let productView = {
	get [ident] () { return true; },
	set [ident] (value) {}
};
console.log(productView.productId); // true
*/


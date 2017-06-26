/*
======================
TOC
1. Symbols
2. Well-known Symbols
3. Object Extensions
4. String Extensions
5. Number Extensions
6. Math Extensions
7. RegExp Extensions
8. Function Extensions
======================
*/

/*
=======
SYMBOLS: To generate a unique ID, but we never have access to that id.
=======
*/

// Ex1:
/*let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol); // symbol*/

/*let eventSymbol = Symbol('resize event');
console.log(eventSymbol.toString()); // Symbol(resize event)*/

/*// we might use a symbole to create a constant:
const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
console.log(CALCULATE_EVENT_SYMBOL.toString()); // calculate event*/

/*let s = Symbol('event');
let s2 = Symbol('event');
console.log(s === s2); // false
// Everytime you call Symbol even if we use the same string then we will get an unique id.*/

/*// You can acess the symbol registry by using Symbol.for()
let s = Symbol.for('event');
console.log(s.toString()); // Symbol(event);*/

/*let s = Symbol.for('event');
let s2 = Symbol.for('event');
console.log(s === s2); // True*/

/*let s = Symbol.for('event');
let description = Symbol.keyFor(s);
console.log(description); // event */

/*// why use symbols? Mainly for id on properties?
let article = {
	title: 'Whiteface Mountain',
	[Symbol.for('article')]: 'My Article'
};

let value = article[Symbol.for('article')];
console.log(value); // My Article*/

/*let article = {
	title: 'Whiteface Mountain',
	[Symbol.for('article')]: 'My Article'
}

console.log(Object.getOwnPropertyNames(article)); [title]*/

/*let article = {
	title: 'Whiteface Mountain',
	[Symbol.for('article')]: 'My Article'
}

console.log(Object.getOwnPropertySymbols(article)); // [Symbol(article)]*/


/*
==================
WELL KNOWN SYMBOLS
==================
*/

/*// used for meta programming:
let Blog = function() {

};

let blog = new Blog();
console.log( blog.toString() ); // [object Object]*/

/*let Blog = function() {

};

Blog.prototype[Symbol.toStringTag] = 'Blog Class';
let blog = new Blog();
console.log( blog.toString() ); // [object Blog class]*/

/*let values = [8, 12, 16];
values[Symbol.isConcatSpreadable] = false;
console.log([].concat(values));*/

/*let values = [8, 12, 16];
let sum = values + 100;
console.log(sum);
*/

/*
======
Object
======
*/

/*let a = {
	x: 1
};
let b = {
	y: 2
};

Object.setPrototypeOf(a, b);
console.log(a.y);
*/

/*let a = {a: 1}, b = {b: 2};

let target = {};
Object.assign(target, a, b);
console.log(target);*/

/*let a = {a:1}, b = {a:5, b:2};
let target = {};
Object.assign(target, a, b);
console.log(target);*/

/*let a = {a:1}, b = {a:5, b:2};
Object.defineProperty(b, 'c', {
	value: 10,
	enumerable: false
});
let target = {};
Object.assign(target, a, b);
console.log(target);*/

/*let a = {a:1}, b = {a:5, b:2}, c = {c:20};
let target = {};
Object.assign(target, a, b);
console.log(target); // {a:1, b:2}*/

/*let a = {a:1}, b = {a:5, b:2};
let target = {};
Object.assign(target, a, b);
console.log(target); // {a:5, b:2}*/

/*let a = {a:1}, b = {a:5, b:2};

Object.defineProperty(b, 'c', {
	value: 10,
	enumerable: false
});

let target = {};
Object.assign(target, a, b);
console.log(target); // {a:5, b:2}*/

/*let a = {a:1}, b = {a:5, b:2}, c = {c:20};

Object.setPrototypeOf(b, c);

let target = {};
Object.assign(target, a, b);
console.log(target); // {a:5, b:2}*/

/*// A better way to compare objects is by Object.is();
let amount = NaN;
console.log(Object.is(amount, amount));*/

/*let amount = 0, total = -0;
console.log(Object.is(amount, total)); // false
// this was not the case before that is why its beter to use Object.is*/

/*let article = {
	title: 'Whiteface Mountain',
	[Symbol.for('article')]: 'My Article'
};

console.log( Object.getOwnPropertySymbols(article) );*/

/*
=======
STRINGS
=======
*/

/*let title = 'Santa Barbara Surf Riders';
console.log(title.startsWith('Santa')); // True*/

/*let title = 'Santa Barbara Surf Riders';
console.log(title.endsWith('Riders')); // True*/

/*let title = 'Santa Barbara Surf Riders';
console.log(title.includes('ba')); // True*/

/*var title = "Surfer's \u{1f3c4} Blog";
console.log(title);*/

/*var surfer = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(Array.from(surfer).length); // 3
console.log(surfer);*/

/*var title = "Mazatla\u0301n";
console.log(title + ' ' + title.normalize().length); // Mazatlan 8*/

/*// Raw Template String
let title = 'Surfer';
let output = String.raw`${title} \u{1f3c4}\n`;
console.log(output);*/

/*let wave = '\u{1f30a}';
console.log(wave.repeat(10));*/

/*
=======
NUMBERS
=======
*/

// console.log(Number.parseInt === parseInt); // true
// console.log(Number.parseFloat === parseFloat); // true

/*let s = '8000';
console.log(isFinite(s));
console.log(Number.isFinite(s));*/

/*let sum = 408.2;
console.log(Number.isInteger(sum));*/

/*
====
Math
====
*/

// skipped for now

/*
======
RegExp
======
*/

// let pattern = /\u{1f3c4}/;

/*
=========
Functions
=========
*/











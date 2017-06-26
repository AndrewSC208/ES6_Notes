// DESTRUCTURING:
// Destructuring is a simple syntax for dynamiclly plucking properties off of a data structure while assigning them to distinct variables.

// What is Destructuring

// You can destructure a data structure by referencing an object's property names inside of curly braces.

// var object = { "a": 1, "b": 2 }
// var {a, b} = object;
// console.log(a, " | ", b);
// => 1 | 2
// Why is it valuable

// In modern frameworks like Angular that are built on TypeScript (which is a superset of ES2015), destructuring is common in import statements to pluck specific modules from an exported file.

// BASIC DESTRUCTURING:
// var object = {
// 	"a": 1,
// 	"b": 2
// }

// var { a, b } = object;

// console.log(a, b);

// var prisim = {
// 	l: 5,
// 	w: 8
// }

// function rectPrismArea({l, w, h = 10}) {
// 	return l * w * h;
// }

// console.log(rectPrismArea(prisim));

var human = {
	height: 6,
	weight: 150,
	name: { FirstName: 'Andrew', LastName: 'Meiling'},
}

function printHuman({height, weight, name}) {
	console.log('Hello, ' + name.FirstName);
}

printHuman(human);



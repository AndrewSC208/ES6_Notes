// variable hosting:
var day = 'today';

if (true) {
	var day = 'tomorrow';
}

console.log(day); // => 'tomorrow'
// ^ the var is being reassigned due to varaibel hosting.

let year = 2016;

if (true) {
	let year = 2017;
	console.log(year); // => year = 2017
}

console.log(year); // => year = 2016

const name = 'Andrew';

if (true) {
	name = 'Bob'; // ERROR => can't reassign conts.
	console.log(name);
}

console.log(name);
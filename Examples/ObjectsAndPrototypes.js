/* 
JAVASCRIPT OBJECTS AND PROTOTYPES:

1. 


*/

// THIS IS AND ES6 CLASS:
class Cat {
	constructor(name, color) {
		this.name = name
		this.color = color
	}

	speak() {
		display('Meeeoooooowwwwww');
	} 
}

// NEW UP THE OBJECT TO MAKE A NEW INSTANCE OF IT:
// this is almost like an import for a module but creating objects in memory. [I think?]
var cat = new Cat('Kitters', 'Brown');

// Lets make some getters and setters for this now:
Object.defineProperties(cat, 'fullName', {
	get: function() {
		return this.name.first + ' ' + this.name.last
	},
	set: function(value) {
		var nameParts = value.split(' ');
		this.name.first = nameParts[0]
		this.name.last  = nameParts[1]
	}
})

// this is a person class
class Person {
	// this is the person constructor
	constructor(name, age, gender, dob, homeTown) {
		this.name = name
		this.age = age
		this.gender = gender
		this.dob = dob
		this.homeTown
	}

	// Getters and setters:
	Object.defineProperties()
}

// create the a new person:
var Andrew = Person('Andrew', 29, 'Male', "05-20-1987", "Solon");

console.log(Andrew);

// closures are function that refer to independent (free) variables (variables that are used locally, but defined in an exnclosing scope). In other words, these functions 'remember' the environment in which they were created:

function init() {
	var name = "Andrew"; // name is a local var created by init

	function displayName() {
		alet(name);
	}

	displayName();
}

init();

// now look at this:

function makeFunc() {
	var name = "Andrew";

	function displayName() {
		alert(name);
	}

	return displayName;
}

var myFunc = makeFunc();

myFunc();

// one more then food:
function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);




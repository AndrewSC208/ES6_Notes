'use strict';
/*
1. Module Basics
2. Named Exprots
3. Class Fundamentals
Extends and Super:
Constructor Function Properties:
Static Members:
new.target:
*/

/* ===================
	1. Module Basics:
		A. Import Statements will get hoisted, and dependencies will execute
   =================== */
/* EX 1:
import { id } from './module1';
console.log(id); // 12
*/

/* EX 2:
import { projectId, projectName } from './module1';
console.log(`${projectName} has id: ${projectId}`);
*/

/*// EX 3:
// Using the "as" keyword you can assign an alias to a import
import { projectId as id, projectName } from './module1';
console.log(`${projectName} has id: ${id}`);
*/

/*// EX 4: Explicityly importting a default with an alias
import { default as myProjectName } from './module1';
console.log(myProjectName);
*/

/*// EX 5:
// import default, that is set in the module export
import someValue from './module1';
console.log(someValue); // 99
*/

// // EX 6: * = wildcard
// import * as values from './module1';
// console.log(values); // this will give you the whole object

/* ===================
2. Named Exports:
   =================== */

/*// Ex1: projectId is read only when you import it and it's not an object.
import { projectId } from './module1';
projectId = 8000;
console.log(projectId); // runtime error
*/

/*// Ex2: If you import an object you are able to modify it's properties.
import { project } from './module1';
project.projectId = 8000;
console.log(project.projectId); // 8000
*/

/*// Ex3: When we grab a module from a seprate module the two stay in synce:
import { project, showProject } from './module1';
project.projectId = 8000;
showProject();
console.log(project.projectId); // 8000, 8000
// so if I were to import a module, then change it, then print it from the original module it will stay insynce with the update from the import.
*/

/*// Ex4:
import { showProject, updateFunction } from './module1';
showProject();
updateFunction();
showProject();
*/

/* ===================
3. Class Fundamentals
   =================== */

/*// Ex1:
class Task {

}
let task = new Task();
console.log(typeof task); // object
*/

/*// Ex2: Basic method on class
class Task {
	showId() {
		console.log('99');
	}
}

let task = new Task();
task.showId(); // 99
console.log(task.showId === Task.prototype.showId); //true
*/

/*// Ex3: constructors:
class Task {
	constructor() {
		console.log('constructing Task');
	}
	showId() {
		console.log('99');
	}
}
let task = new Task(); // 'constructing task'
*/

/*// Ex4: Don't declare vars in classes
class Task {
	let taskId = 9000;
	constructor() {
		console.log('constructing Task');
	}
	showId() {
		console.log('99');
	}
}
let task = new Task(); // throws syntax error
*/

/*// Ex5: Classes are not "Hoisted"
let task = new Task();

class Task {
	constructor() {
		console.log("constructing task");
	}
}
// Error: Use before declaration
*/

/*// Ex6: You can use classes in expressions just like you can with functions:
let newClass = class Task {
	constructor() {
		console.log("constructing Task");
	}
}
new newClass();
*/

// Ex7: 
// let Task = function() {
// 	console.log('constructing class');
// }
// let task = {};
// Task.call(task); //'constructing class'

// class Task {
// 	constructor() {
// 		console.log("task");
// 	}
// };
// let task = {};
// Task.call(task); // Error

/*
=================
EXTENDS AND SUPER
=================
*/

/*// Ex1: extends
class Project {
	constructor() {
		console.log('Constructing Project');
	}
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject(); // Constructing Project
*/

/*// Ex2: The extended class still calls the original class constructor
class Project {
	constructor(name) {
		console.log(`constructing Project: ${name}`);
	}
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject('Mazatlan'); // Constructing Project: Mazatlan
*/

/*// Ex3: when calling super() js will know when to instanciate the parent class constructor
// BELOW IS THE STANDARD TEMPLATE FOR INHERITANCE WITH CLASSES:
class Project {
	constructor() {
		console.log(`Constructing Project`);
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
		console.log(`Constructing SoftwareProject`);
	}
}

let p = new SoftwareProject(); 
// Constructing Project
// Constructing SoftwareProject
*/

/*// Ex4:
class Project {
	getTaskCount() {
		return 50;
	}
}
class SoftwareProject extends Project {

}

let p = new SoftwareProject();
console.log(p.getTaskCount()); // 50
*/

/*// Ex5:
class Project {
	getTaskCount() {
		return 50;
	}
}
class SoftwareProject extends Project {
	// this will override the method, no need to specify syntax for that
	getTaskCount() {
		return 66;
	}
}

let p = new SoftwareProject();
console.log(p.getTaskCount()); // 66
*/

/*// Ex6: super can be called in methods to, seems like super is kind of like the prototype chain
class Project {
	getTaskCount() {
		return 50;
	}
}
class SoftwareProject extends Project {
	// this will override the method, no need to specify syntax for that
	getTaskCount() {
		return super.getTaskCount() + 6;
	}
}

let p = new SoftwareProject();
console.log(p.getTaskCount()); // 56
*/

/*// Ex7: super can be used for object literal
let project = {
	getTaskCount() { return 50; }
};

let softwareProject = {
	getTaskCount() {
		return super.getTaskCount() + 7;
	}
}

Object.setPrototypeOf(softwareProject, project);
console.log(softwareProject.getTaskCount()); //57
*/

/*
==============================
PROPERTIES FOR CLASS INSTANCES
==============================
*/

/*// Ex1:
class Project {
	constructor() {
		this.location = 'Mazatlan'
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

let p = new SoftwareProject();
console.log(p.location); //Mazatlan
*/

/*// Ex2:
class Project {
	constructor() {
		this.location = 'Mazatlan'
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
		this.location = this.location + " Beach";
	}
}

let p = new SoftwareProject();
console.log(p.location); //Mazatlan Beach
*/

/*
==============
STATIC MEMBERS
==============
*/

/*// Ex1: Static method
class Project {
	static getDefaultId() {
		return 0;
	}
}

console.log(Project.getDefaultId()); // 0
*/

/*// Ex2: 
class Project {
	static getDefaultId() {
		return 0;
	}
}

var p = new Project();
console.log(p.getDefaultId()); // Error
*/

/*
==========
new.target
==========
*/

/*// Ex1: 
class Project {
	constructor() {
		console.log(typeof new.target);
	}
}
var p = new Project(); // function
*/

/*// Ex2:
class Project {
	constructor() {
		console.log(new.target);
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

var p = new SoftwareProject(); 
// PRINT STATEMENT:
// class SoftwareProject extends Project {
// 	constructor() {
// 		super();
// 	}
// }*/

// // Ex3:
// class Project {
// 	constructor() {
// 		console.log(new.target.getDefaultId());
// 	}
// }

// class SoftwareProject extends Project {
// 	static getDefaultId() {
// 		return 99;
// 	}
// }

// var p = new SoftwareProject(); //99
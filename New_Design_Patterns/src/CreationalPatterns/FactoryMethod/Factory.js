/*
	ref: 
		1. https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9
*/

// Class:
class User {
	constructor() {
		this._canEditEverything = false;
	}

	get canEditEverything() { return this._canEditEverything; }
}

//Sub-class:
class Administrator extends User {
	constructor() {
		super();
		this._canEditEverything = true;
	}
}

// Instatiation:
let u2 = new Administrator();
u2.canEditEverything;


/*
=============================
SINGLETON FACTORY: ES6 CLASS WITH STATIC METHODS
=============================
*/
class Factory {
	constructor() {}

	static register(clazzname, clazz) {
		if((!Factory._registerdTypes.has(clazzname) && clazz.prototype instanceof User)) {

			Factory._registerdTypes.add(clazzname, clazz);

		} else { ... }
	}

	static create(clazzname, ...options) {

		if(!Factory._registerdTypes.has(clazzName)) {
			console.error("!!!");
			return null;
		}

		let clazz = this._registerdTypes.get(clazzname);
		let instance = new clazz(...options);
		return instance;
	}
}

Factory._registerdTypes = new Map();

/*
	
	Ref:
		2. https://robdodson.me/javascript-design-patterns-factory/

	Factory Method: Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
	Abstract Factory: Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

	Simple Factory: is an object which encapsulates the creation of another object, shielding that code from the rest of your application.
	var user = UserFactory.createUser(); 

		*It's common to parameterize simple factory methods to increase the number of products they're able to return.

	var admin = UserFactory.createUser('admin');  
	var customer = UserFactory.createUser('customer');  

	The actual implementaiton of createUser might look something like this:

	UserFactory.createUser = function(type) {  
    if (type == 'admin') {
        return new Admin();
    } else if (type == 'customer') {
        return new Customer();
    }
	};

	Product: Is the return value from the factory. i.e. "Admin()", and "Customer()"

	

*/

// CLASSES:
class App {
	// runs anytime this class get instanciated!
	constructor() {
		// crate local vars:
		this.firstName = 'Andrew'
		this.lastName = 'Meiling'
		//console.log('hello');
	}

	// methods:
	printFirstName() {
		console.log(this.firstName);
	}

	printLastName() {
		console.log(this.lastName)
	}

	printFullName() {
		this.printFirstName(); 
		this.printLastName()
	}
}

// Instanciate:
var app = new App();

// Use class methods: 
app.printFullName();
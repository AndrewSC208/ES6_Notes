var obj = {

	firstName: 'Mike',
	lastName: 'Adamas',

	get fullName() {
		return this.firstName + ' ' + this.lastName;
	},

	set fullName(value) {
		var fullNameArray = value.split(' ');
		this.firstName = fullNameArray[0];
		this.lastName = fullNameArray[1];
	}

}

var obj = {
	a: 7,
	get b() {
		return this.a + 1;
	},
	set b(x) {
		this.a = x / 2
	}
};

console.log(obj.a); // 7
console.log(obj.b); // 8
obj.b = 50;
console.log(obj.a); // 25
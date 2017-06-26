// Arrow functions:
let object = {
	collection: ['patric', 'scott', 'mike'],
	domain: 'angularclass.com',
	method: function() {
		return this.collection.map(item => {
			return `${ item }@${ this.domain }`
		});
	}
}

console.log(object.method());

// [ 'patric@angularclass.com',
//   'scott@angularclass.com',
//   'mike@angularclass.com' ]
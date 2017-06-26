// Enhanced Object Literals:
var obj = {
	name: 'Andrew',
	property: 'first prop',
	[ 'prop_' + 42 ]: 'life', // this is the enhanched part. You are able to more esily add eleaments to object literals
	getName: function() {
		return this.name;
	}
};

console.log(obj);
console.log(obj.getName());
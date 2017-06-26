var dictionary = {
	'yolo' : 'what you say before doing something crazy',
	'gg'   : 'good game',
	'swag' : 'Swag swag'
}

var keys = Object.keys(dictionary);

var upperKeys = keys.map(function(key) {
	return key.toUpperCase();
})

console.log(upperKeys);

var obj = {
	'one'   : 1,
	'two'   : 2,
	'three' : 3
}

var keys = Object.keys(obj);

console.log(keys);

var timesTwo = keys.map(function(key) {
	return obj[key]*2;
})

console.log(timesTwo); // [2,4,6]

// Iterators: let us iterate through an array, list, string, and objects.
//`let ids = [1990, 4540, 8987];
//console.log(typeof ids[Symbol.iterator] ); // function
//console.log('###');
// === //
let ids = [9000, 9001, 9002];
let iter = ids[Symbol.iterator]();
//console.log(iter.next()); // {value: 9000, done: false }
iter.next();
iter.next();
iter.next();
//console.log(iter.next()); // {value: undefined, done: true 

//let idMaker = {
//	[Symbol.iterator]() {
//		let nextId = 8000;
//		return {
//			next() {
//				return {
//					value: nextId++,
//					done: false
//				}
//			}
//		}
//	}
//}

//let it = idMaker[Symbol.iterator]();
//console.log(it.next().value);
//console.log(it.next().value); // 8000, 8001

let idMaker = {
	[Symbol.iterator]() {
		let nextId = 8000;
		return {
			next() {
				let value = nextId>8002?undefined:nextId++;
				let done = !value;
				return { value, done }
			}
		}
	}
}

for( let v of idMaker)
	console.log(v); // 8000, 8001, 8002

// The iterable protocol: allows JavaScript objects to define or customize their iteration behavoir, such as what values are looped over in a for..of construct. Some built-in types are built-in iterables with a default iterator behavoir, such as Array or Map, while other types (such as Object) are not.
// In order to be iterable, an object must implement @@iterator method.

// The iterator protocol: defines a standard way to produce a sequnce of values (either finite or infinte).
// Property: next()
// Values: A zero arguments function that returns an object with two properties:
// 	==> done (boolean)
// 		- Has the value true if the iterator is past the end of the iterated sequence.
// 		. Had the value false if the iterator was able to produce the next value in the sequnce.
// 	==> value - any JavaScript value returned by the iterator. Can be omitted when done is true.
//
// Built in Iterables: String, Array, TypedArray, Map, and Set
// Simple Example:
function makeIterator(array) {
	var nextIndex = 0;

	return {
		next: function() {
			return nextIndex < array.length ? 
				{ value: array[nextIndex++], done: false} :
				{ done: true };
		}
	}
}

var it = makeIterator(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

// Inifinite Iterator:
function iidMaker() {
	var index = 0;

	return {
		next: function() {
			return { value: index++, done: false };
		}
	};
}

var ii = iidMaker();

console.log(ii.next().value); // 0
console.log(ii.next().value); // 1
console.log(ii.next().value); // 2

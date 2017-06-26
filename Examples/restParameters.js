// If the last named argument is prefixed with (...), the argument collects itself and all consecutive arguments.

// What are Rest Arguments

// printArguments(1, 2, 3)
// function printArguments(...args){
// args.forEach(function(arg){
// console.log('rest args:', arg)
// });
// }
// // rest args: 1
// // rest args: 2
// // rest args: 3

printArguments(1, 2, 3)

function printArguments(...args) {
	console.log(args);
	args.forEach(function(arg) {
		console.log("rest args:", arg)
	});
}

printObjects('hello', {name: 'PatrickJS'}, {name: 'Scott'}, {name: 'Mike'});

function printObjects(prefix, ...args) {
	console.log(args);
	args.forEach(function(arg) {
		console.log(prefix, arg.name);
	});
};
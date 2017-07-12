function *process() {
	let newArray = [yield, yield, yield];
	console.log(newArray[2]);
}

let it = process();
it.next();
it.next(2);
it.next(4);
it.next(42);

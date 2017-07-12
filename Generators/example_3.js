function *process() {
	let nextId = 7000;
	while(true)
		yield(nextId++);
}

let it = process();
it.next();
console.log(it.next().value);

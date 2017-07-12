function *process() {
	yield 8000;
	yield 8001;
}

let it = process();
it.next();
console.log(it.next());

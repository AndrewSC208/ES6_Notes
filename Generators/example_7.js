function *process() {
	try {
		yield 9000;
		yield 9001;
		yield 9002;
	} catch(e) {
	
	}
}

let it = process();
console.log(it.next().value);
console.log(it.throw('foo'));
console.log(it.next());

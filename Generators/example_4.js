function *process() {
	let nextId = 7000;
	while(true)
		yield(nextId++);
}

for (let id of process()) {
	if (id > 10000) break;
	console.log(id);
}


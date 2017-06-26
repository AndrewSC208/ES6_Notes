//Spread Operator: This is the oposit of rest params
let nums = [1,2,3];

function addEverything(x,y,z) {
	return x+y+z;
}

let val = addEverything(...nums);

console.log(val);
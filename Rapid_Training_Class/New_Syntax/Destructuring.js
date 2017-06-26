'use strict';

/*
	Destructing: take something apart, i.e, and array of information
*/

/*let salary = ['32000', '50000', '75000'];
let [low, average, high] = salary;
console.log(average); // 50000*/

/*let salary = ['32000', '50000'];
let [low, average, high] = salary;
console.log(high); // undefined*/

/*let salary = ['32000', '50000', '75000'];
let [low, , high] = salary;
console.log(high); // 75000*/

/*let salary = ['32000', '50000', '75000'];
let [low, ...remaining] = salary;
console.log(remaining); // ['50000', '75000']*/

/*let salary = ['32000', '50000'];
let [low, average, high = '88000'] = salary;
console.log(high); // 88000*/

/*let salary = ['32000', '50000', ['88000', '99000'] ];
let [low, average, [actualLow, actualHigh]] = salary;
console.log(actualLow, actualHigh); // 88000 99000*/

/*function reviewSalary([low, average], high = '88000') {
	console.log(average);
}

reviewSalary(['32000', '50000']); // 50000*/

/*let salary = {
	low: '32000',
	average: '50000',
	high: '75000'
};

let { low, average, high } = salary;
console.log(high); // 75000
*/

/*let salary = {
	low: '32000',
	average: '50000',
	high: '75000'
};

let { low: newLow, average: newAverage, high:newHigh } = salary;
console.log(newHigh);*/

/*
	ADVANCED DESTRUCTURING:
*/


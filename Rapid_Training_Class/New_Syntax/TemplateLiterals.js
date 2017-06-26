'use strict';

/*let invoiceNum = '1350';
console.log(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350*/

/*let invoiceNum = '1350';
console.log(`Invoice Number: \${invoiceNum}`); // Invoice Number: ${invoiceNumb}*/

/*let message = `A
B
C`;
console.log(message);
// A
// B
// C*/

/*let invoiceNum = '1350';
console.log(`Invoice Number: ${'INV-' + invoiceNum}`); // Invoice Number: INV-1350*/

/*function showMessage(message) {
	let invoiceNum = '99';
	console.log(message);
}

let invoiceNum = '1350';
showMessage(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350*/

/*function processInvoice(seg) {
	console.log(seg);
}

processInvoice `template`; // ['template']*/

function processInvoice(seg, ...values) {
	console.log(seg);
	console.log(values);
}

let invoiceNum = '1350';
let amount = '2000';
processInvoice `Invoice: ${invoiceNum} for ${amount}`;
// ['Invoice: ', ' for ', '']
// ['1350', '2000']
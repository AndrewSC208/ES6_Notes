/* 
	Arrow Functions: Passing annonomus function with values, and context of the calling function. 
*/
let getPrice = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice(2, .07)); // 8.56

// when using a block you need to return a value:
let getPrice = (count, tax) => {
	var price = count * 4.00;
	price *= (1 + tax);
	return price;
}
console.log(getPrice(2, .07)); // 8.56

/* hoist */
var x = 5;

console.log(x);

var x;

/* declaration is hoisted */

var y = 2;
// console.log(x+y);

var y;

/* initialization is not hoisted*/
console.log(x+y);
var y = 2;

/* global scope and function scope */

let x;
function printX(){
	let x = 10;
	console.log(x);
}

printX();

console.log(x);

/* let can be updated but not redeclared */

let z = 3;
console.log(z);

let z = 4;
z = 4;
console.log(z);

/*  let is block scoped */

{
	let z = 7;
	console.log(z)
}

console.log(z)

/* const can not be updated nor redeclared */
const c = 10;
console.log(c);

c = 2;
const c = 2;
console.log(c);

/* const is block scoped */

{
	const c2 = 100;
	console.log(c2);
}

console.log(c2);




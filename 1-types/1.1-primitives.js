// when you access a primitive type you work directly on its value

/*
- string: sequence of characters used to represent text
- number: numerical data type in the double-precision 64-bit floating point format
- boolean: true or false
- null: represents the intentional absence of any value
- undefined: value automatically assigned to variables that have declared but not assigned a value
- symbol: A unique and immutable value
- bigint: numerical data type that can represent integers beyond the limits of the number type
*/

const alpha = 1;
let beta = alpha;

beta = 9
console.log(alpha, beta) // => 1, 9
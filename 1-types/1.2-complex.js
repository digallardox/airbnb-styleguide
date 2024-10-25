// when you access a complex type you work on a reference to its value

/* 
- object: collection of key-value pairs
- array: stores ordered lists of values
- function: a callable object
*/

const alpha = [1, 2];
const beta = alpha;

beta[0] = 9;

console.log(alpha[0], beta[0]) // => 9, 9
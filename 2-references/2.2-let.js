// if you must reassign references, use let instead of var. eslint: no-var

// bad
var count = 1;
if (true) {
    count += 1
}

// good
let count = 1;
if (true) {
    count += 1
}

// let is block-scoped. Var is function scoped or global if not declared in a function.
// a block is anything enclosed in curly braces
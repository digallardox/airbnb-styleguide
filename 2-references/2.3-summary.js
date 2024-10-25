// both let and const are block-scoped, whereas var is function scoped or global

{ 
    let a = 1;
    const b = 1;
    var c = 1;
}

console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // => 1
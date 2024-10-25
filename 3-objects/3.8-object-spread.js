// prefer the object spread syntax over Object.assign to shallow-copy objects. Use the object rest parameter syntax to get a new object with certain properties omitted. eslint: prefer-object-spread

// very bad
const a = { a: 1, b: 2 };
const b = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ

// bad
const c = { a: 1, b: 2 };
const d = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const e = { a: 1, b: 2 };
const f = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

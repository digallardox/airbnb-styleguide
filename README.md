# airbnb-styleguide
3.1 use the literal syntax for object creation. eslint: no-new-object
```
const item = new Object(); // bad
const item = {}; // good
```

function getKey(k) {
    return `a key name ${k}`;
}


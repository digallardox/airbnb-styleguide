// use computed property names when creating objects with dynamic property names.

function getKey(k) {
    return `a key name ${k}`;
}

const alpha = {
    id: 5,
    name: 'Austin'
};
alpha[getKey('enabled')] = true

const beta = {
    id: 5,
    name: 'Austin',
    [getKey('enabled')]: true
}

console.log(beta)

// computed property names allow you to use an expression ( inside square brackets []) to define a property name dynamically
// this means you can create an object with both static and dynamic property names
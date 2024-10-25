// use object method shorthand. eslint: object-shorthand

// bad
const alpha = {
    value: 1,
    addValue: function(value) {
        return alpha.value + value
    }
}

// good
const beta = {
    value: 1,
    addValue(value) {
        return beta.value + value
    }
}
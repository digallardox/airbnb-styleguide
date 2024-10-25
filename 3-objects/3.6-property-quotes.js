// only quote properties that are invalid identifiers. eslint: quote-props

// bad
const alpha = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5
}

// good
const good = {
  foo: 3,
  bar: 4,
  "data-blah": 5,
};
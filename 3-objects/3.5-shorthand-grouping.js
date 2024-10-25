// group your shorthand properties at the beginning of your object declaration.

const diegoGallardo = "Diego Gallardo";
const alphaBeta = "Alpha Beta";

// bad
const alpha = {
    city: "Austin",
    diegoGallardo,
    age: 28,
    alphaBeta
}

// good
const beta = {
  diegoGallardo,
  alphaBeta,
  city: "Austin",
  age: 28,
};
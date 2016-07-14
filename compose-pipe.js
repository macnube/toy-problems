// Write a function, compose, which takes in two or more functions, f, g, etc., and returns a function
// which, when evaluated with some argument(s), x, returns the f(g(x)). E.G.
// var square = (x) => x * x
// var inc = (x) => x + 1
// var plusOneSquared = compose(square, inc)
// var squaredPlusOne = compose(inc, square)

var compose = function () {

};

// Pipe is like compose, only left associative rather than right associative. E.G.
// var plusOneSquared = pipe(inc, square);
// var squaredPlusOne = pipe(square, inc);
var pipe = function () {

};

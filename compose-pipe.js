// Write a function, compose, which takes in two or more functions, f, g, etc., and returns a function
// which, when evaluated with some argument(s), x, returns the f(g(x)). E.G.
// var square = (x) => x * x
// var inc = (x) => x + 1
// var plusOneSquared = compose(square, inc)
// var squaredPlusOne = compose(inc, square)
var comp = function () {
	var rest = [].slice.call(arguments);
	return function () {
		var newRest = [];
		for (var i = rest.length - 1; i >= 0; i--) {
			newRest.push(rest[i]);
		}
		return newRest.slice(1, rest.length - 1).reduce(function (result, nextF) {
			return nextF(result);
		}, newRest[0].apply(this, [].slice.call(arguments)));
	}
}


var compTwo = function () {
	var boundFns = Array.prototype.slice.call(arguments);
	return function () {
		var state = Array.prototype.slice.call(arguments);
		state = boundFns[boundFns.length - 1].apply(this, state);
		for (var i = boundFns.length - 2; i >= 0; i --) {
			state = boundFns[i](state);
		}
		return state;
	}
}


var compose = function () {
	if (arguments.length === 2) {
		var argArray = arguments;
		return function () {
			var args = Array.prototype.slice.call(arguments, 0);
			return argArray[0](argArray[1].apply(this, args))
		}
	}
	else {
		var args = Array.prototype.slice.call(arguments, 1)
		return compose(arguments[0], compose.apply(this, args))
	}
};

// Pipe is like compose, only left associative rather than right associative. E.G.
// var plusOneSquared = pipe(inc, square);
// var squaredPlusOne = pipe(square, inc);
var pipe = function () {
	var args = [];
	var index = 0;
	for (i = arguments.length -1; i >= 0; i--) {
		args.push(arguments[i]);
	}
	return compose.apply(this, args);
};

var square = function(x) {
	return x * x;
};

var inc = function(x) {
	return x+1;
};

var testCompose = compose(square, inc);
console.log(testCompose(2));
//9

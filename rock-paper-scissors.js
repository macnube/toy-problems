// Create a function, rps, which returns a 2 dimensional array of all the possible outcomes of a three round game of
// rock, paper, scissors. E.G.
// rps() => [['rock','rock','rock'], ['rock','rock','paper'], ['rock','rock','scissors']....]

var rps = function () {
	var rounds = 2;
	var option = ['rock', 'paper', 'scissors'];
	var result = [];
	for (var i = 0; i < option.length; i ++ ) {
		var firstValue = option[i];
		console.log(firstValue);
		for (var j = 0 ;j < option.length; j++) {
			var secondValue = option[j];
			console.log(secondValue);
			var outcome = [firstvalue, secondValue];
			result.push(outcome);
			console.log(result);
		}
	}
	return result;

};

var add = function (x, y) {
	return x + y;
};

console.log(add(1,2));

console.log(rps());
console.log('test');



// Bonus: Create a function, rpsN, which returns a 2 dimensional array of all the possible outcomes of an n-round game
// of rock, paper, scissors, E.G.
// rpsN(0) => [[]]
// rpsN(1) => [['rock'], ['paper'], ['scissors']]
// rpsN(2) => [['rock', 'rock'], ['rock', 'paper'], ['rock', 'scissors'], ['paper', 'rock']....]

var rpsN = function (rounds) {

};

// Create a function, rps, which returns a 2 dimensional array of all the possible outcomes of a three round game of
// rock, paper, scissors. E.G.
// rps() => [['rock','rock','rock'], ['rock','rock','paper'], ['rock','rock','scissors']....]

var rps = function () {
	var option = ['rock', 'paper', 'scissors'];
	var result = [];
	for (var k = 0; k < option.length; k++) {
		var firstValue = option[k];
		for (var i = 0; i < option.length; i ++ ) {
			var secondValue = option[i];
			for (var j = 0 ;j < option.length; j++) {
				var thirdValue = option[j];
				var outcome = [firstValue, secondValue, thirdValue];
				result.push(outcome);
			}
		}
	}
	return result;

};

console.log(rps());



// Bonus: Create a function, rpsN, which returns a 2 dimensional array of all the possible outcomes of an n-round game
// of rock, paper, scissors, E.G.
// rpsN(0) => [[]]
// rpsN(1) => [['rock'], ['paper'], ['scissors']]
// rpsN(2) => [['rock', 'rock'], ['rock', 'paper'], ['rock', 'scissors'], ['paper', 'rock']....]

var rpsN = function (rounds) {
	var option = ['rock', 'paper', 'scissors'];
	var result = [];
	var outcome = [];
	function nextRound (roundsLeft, outcome) {
		var n = roundsLeft;
		var newOutcome = outcome;
		if (roundsLeft === 0) {
			result.push(outcome)
		}
		else if (roundsLeft === 1) {
			option.forEach(function (choice) {
				newOutcome = outcome.concat(choice);
				result.push(newOutcome);
			});
		}
		else {
			n = n - 1;
			option.forEach(function (choice) {
				newOutcome = outcome.concat(choice);
				nextRound(n, newOutcome);
			});
		}
		return result;
	}
	nextRound(rounds, outcome);
	return result;
};

console.log(rpsN(4));
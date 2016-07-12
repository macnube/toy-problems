function balan(string) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (counter < 0) {
			return false;
		}
		if (string[i] === "(") {
			counter += 1;
		}
		if (string[i] === ")") {
			counter -= 1;
		}
	}
	return counter === 0;
}


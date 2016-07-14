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

function balanGeneral(string) {
	var stack = [];
	var opener = {
		       "[": "]", 
	           "(": ")",
	           "{": "}"
	        };
	var closer = {
		"]": "[",
		")": "(",
		"}": "{"
	};        
	for (var i = 0; i < string.length; i ++) {
		if (string[i] in opener) {
			stack.push(string[i]);
		}
		if (string[i] in closer) {
			if (string[i] !== opener[stack.pop()])
				return false;
		}
	}
	return stack.length === 0;
}
console.log(balan("(Hello how are ( you doing today))"))
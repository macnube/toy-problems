function spiral(array, action) {
	console.log("New Round");
	console.log("Array is: ", array);
	var result = [];
	if (array === []) {
		return;
	}
	else if (type(array[0]) !== type([])) {
		for (var i = 0; i < array.length; i ++) {
			action(array[i]);
		}
		return;
	}
	result = result.concat(array[0]);
	array = array.slice(1);
	for (var i = 0; i < array.length-1; i ++) {
		result = result.concat(array[i].pop());
	}
	result = result.concat(reverseArray(array.pop()));
	for (var i = array.length-1; i >= 0; i--) {
		result = result.concat((array[i][0]));
		array = array[i].slice(1);
	}
	result.forEach(action);
	spiral(array, action);
	function reverseArray(array) {
		var answer = [];
		for (var i = array.length-1; i >= 0; i --) {
			answer.push(array[i]);
		}
		return answer;
	}
}

var test = [
[1,2,3],
[4,5,6],
[7,8,9]
]
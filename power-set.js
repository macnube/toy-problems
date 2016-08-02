/* * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", 
 "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

 var powerSetReduce = function(string) {
 	var string = removeDuplicates(string);
 	var string = string.split('');
 	return string.reduce(function(result, char) {
 		return result.concat(result.map(function (ele) {
 			return order(ele+char);

 		}))
 	}, ['']);
	function removeDuplicates (string) {
		var result = '';
		for (var i = 0; i < string.length; i ++) {
			if (result.indexOf(string[i]) === -1) {
				result = result + string[i];
			}
		}
		return result;
	}
	function order (string) {
		return string.split("").sort().reduce(function(total, char) {
			return total+char;
		}, '');
	}
 }

 console.log(powerSetReduce('jump'));

var powerSet = function (string) {
	var string = removeDuplicates(string);
	var result = [""];
	for (var i = 0; i < string.length; i++) {
		result = getComb(result, string[i]);
	}
	function getComb (result, char) {
		var newResult = [];
		result.forEach(function(ele) {
			var entry = orderStringArray(ele+char);
			newResult.push(entry);
		})
		return result.concat(newResult);
	}
	function removeDuplicates (string) {
		var result = '';
		for (var i = 0; i < string.length; i ++) {
			if (result.indexOf(string[i]) === -1) {
				result = result + string[i];
			}
		}
		return result;
	}
	function orderStringArray (string) {
		var result = [];
		var newString = '';
		for (var i = 0; i < string.length; i ++) {
			result.push(string[i]);
		}
		result.sort();
		result.forEach(function(char) {
			newString = newString + char;
		});
		return newString;
	}
	return result;
}

console.log(powerSet('jump'));
console.log(powerSet('juump'));


function orderString (string) {
	var result = string;
	for (var i = 1; i < string.length; i ++) {
		if (string[i] < string[i-1]) {
			result = switchAtIndex(result, i);
			result = orderString(result);
		}
	}
	return result;
}

function switchAtIndex(string, index) {
	var newString = '';
	if (index === 1) {
		newString = string[1] + string[0] + string.slice(2);
	}
	else if (index === string.length-1) {
		newString = string.slice(0,index-1) + string[index] + string[index-1];
	}
	else {
		newString = string.slice(0,index-1) + string[index] + string[index-1] + string.slice(index+1);
	}
	return newString;
}

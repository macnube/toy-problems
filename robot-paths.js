/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  Bonus: make your solution work for a grid of any size.
 *
 */

var robotPaths = function (x, y) {
	var grid = createGrid(x, y);
	console.log(grid);
	var pathsArray = [];
	var positionArray = [];
	var start = [0,0];
	var target = [x-1, y-1];
	traverseGrid(start, positionArray);
	console.log(pathsArray);
	return pathsArray.length;
	function createGrid(x,y) {
		var grid = [];
		for (var i = 0; i < x; i++) {
			var row = [];
			for (var j = 0; j < y; j++) {
				row.push([i,j]); 
			}
			grid.push(row);
		}
		return grid;
	}
	function traverseGrid(point, positionArray) {
		potentialMoves = getMoves(point, grid);
		potentialMoves.forEach(function(newPoint) {
			var newPositionArray = positionArray.slice();
			newPositionArray.push(point.toString());
			if (newPoint[0] === target[0] && newPoint[1] === target[1]) {
				pathsArray.push(newPositionArray);
			}
			else if (positionArray.indexOf(newPoint.toString()) === -1) {
				traverseGrid(newPoint, newPositionArray);
			}
		});
		function getMoves(point, grid) {
			var moves = [];
			var x = point[0];
			var y = point[1];
			var xLim = grid[0].length;
			var yLim = grid.length;
			if (x + 1 < xLim) {
				moves.push([x+1, y]);
			}
			if (x - 1 >= 0) {
				moves.push([x-1, y]);
			}
			if (y + 1 < yLim) {
				moves.push([x, y+1]);
			}
			if (y -1 >= 0) {
				moves.push([x, y-1]);
			}
			return moves;
		}
	};
};

console.log(robotPaths(4,4));



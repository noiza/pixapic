//5*5, Flag

var grid = [[0, 0, 0, 0, 1, 0, 1, 0],
			[0, 0, 0, 5, 1, 3, 1, 3],
			[0, 0, 5, 0, 0, 0, 0, 0],
			[1, 1, 1, 0, 0, 0, 0, 0],
			[0, 0, 5, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0, 0, 0, 0]];

var gameFieldRowStart = 2,    // i
	gameFieldColumnStart = 3; // j
	
var answers = [[1, 1, 1, 1, 1],
			   [1, 0, 1, 0, 1],
			   [1, 1, 1, 1, 1],
			   [1, 0, 0, 0, 0],
			   [1, 0, 0, 0, 0]];
			   
var userAnswers = [[2, 2, 2, 2, 2],
				   [2, 2, 2, 2, 2],
				   [2, 2, 2, 2, 2],
				   [2, 2, 2, 2, 2],
				   [2, 2, 2, 2, 2]];


var table = document.createElement('table');
var checkErrorsButton = document.getElementById('check-errors');

//draw table
for ( var i = 0; i <= 6; i++ ) {
	var tr = document.createElement('tr');
	for ( var j = 0; j <= 7; j++ ) {
		var td = document.createElement('td');
		if ( grid[i][j] !== 0 ) {
			var tdValue = document.createTextNode(grid[i][j].toString());
			td.appendChild(tdValue);
			td.classList.add('green');
		}
		if (i >= gameFieldRowStart && j >= gameFieldColumnStart) {
			td.classList.add('gray');
		}
		
		tr.appendChild(td);
	}
	
	table.appendChild(tr);
}

document.body.appendChild(table);
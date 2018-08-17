//onclick 'Yes' or 1
for (var i = gameFieldRowStart; i < table.rows.length; i++) {
	for (var j = gameFieldColumnStart; j <= table.rows.length; j++) {
		table.rows[i].cells[j].onclick = function() {
			rowIndex = this.parentElement.rowIndex - gameFieldRowStart; 
			cellIndex = this.cellIndex - gameFieldColumnStart;
			console.log(rowIndex + ', '+ cellIndex);

			// записать в массив выбранный элемент = 1 (Yes)
			// или 2, если 1 уже есть
			if (userAnswers[rowIndex][cellIndex] === 1 ) {
				userAnswers[rowIndex][cellIndex] = 2;
			} else {
				userAnswers[rowIndex][cellIndex] = 1;
			}
			addBlack(this);
		}
	}
}

//oncontextmenu 'No' or 0
for (var i = gameFieldRowStart; i < table.rows.length; i++) {
	for (var j = gameFieldColumnStart; j <= table.rows.length; j++) {
		table.rows[i].cells[j].oncontextmenu = function() {
			rowIndex = this.parentElement.rowIndex - gameFieldRowStart;
			cellIndex = this.cellIndex - gameFieldColumnStart;
			console.log(rowIndex + ', '+ cellIndex);

			if (userAnswers[rowIndex][cellIndex] === 0 ) {
				userAnswers[rowIndex][cellIndex] = 2;
			} else {
				userAnswers[rowIndex][cellIndex] = 0;
			}
			addWhite(this);
			return false;
		}
	}
}

	
function addBlack(td) {
	if (td.classList.contains('white')) {
		td.classList.remove('white');
	}
	td.classList.toggle('black');
}

function addWhite(td) {
	if (td.classList.contains('black')) {
		td.classList.remove('black');
	}
	td.classList.toggle('white');
}


checkErrorsButton.onclick = function () {
	for (var i = 0; i < answers.length; i++) {
		for (var j = 0; j <= answers.length; j++) {
			if ( !(userAnswers[i][j] === answers [i][j] || userAnswers[i][j] === 2) ) {
				alert('errors!');
				return;
			}
		}
	}
	alert('There are no errors :)');
}
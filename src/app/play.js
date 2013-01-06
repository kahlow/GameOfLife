$(document).ready(function () {
	var game,
		width,
		height,
		numCells,
		interval,
		generation;

	$('#newgame').click(function () {
		game = new Game();
		width = document.getElementById("width").value;
		height = document.getElementById("height").value;
		numCells = document.getElementById("numCells").value;

		if (width > 0  && height > 0) {
			game.createBoard(width / 10, height / 10, numCells);
			draw();
		} else {
			alert("ಠ_ಠ");
		}

		generation = 0;
	});

	function draw() {
		var canvas = document.getElementById("conway"),
			ctx = canvas.getContext("2d");

		canvas.width = width;
		canvas.height = height;

		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, width, height);
		ctx.fillStyle = "BLACK";

		_.each(game.gameBoard, function (row) {
			_.each(row, function (cell) {
				if (cell.status === "Alive") {
					ctx.fillRect(cell.x * 10, cell.y * 10, 10, 10);
				}
			});
		});
	}

	$('#start').click(function () {

		interval = setInterval(function () {
			game.nextGeneration(); 
			draw(); 
			document.getElementById('gen').innerText = generation++; 
		}, 200);
	});

	$('#stop').click(function () {
		clearInterval(interval);
	});
});

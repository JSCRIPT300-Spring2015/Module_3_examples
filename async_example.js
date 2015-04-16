var fs = require('fs');
var firstFileRead = false;
var t1 = Date.now();
var t2;
//simulating two long-running asynchronous file I/O operations
fs.readFile('Taiko.txt', function (error, fileContents) {
	setTimeout(function () {
		console.log(fileContents.toString());
		if (!firstFileRead) {
			firstFileRead = true;
		} else {
			t2 = Date.now();
			console.log((t2 - t1) + ' milliseconds elapsed');
		}
	}, 5000);
});
//console.log('\n\n********** this will be logged after the readFile call is made, but before the file contents have been logged **********\n\n');
fs.readFile('Gunter_Grass.txt', function (error, fileContents) {
	setTimeout(function () {
		console.log(fileContents.toString());
		if (!firstFileRead) {
			firstFileRead = true;
		} else {
			t2 = Date.now();
			console.log((t2 - t1) + ' milliseconds elapsed');
		}
	}, 5000);
});
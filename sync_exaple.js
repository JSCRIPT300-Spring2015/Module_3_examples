var fs = require('fs');
var elapsedTime = 0;
var t1 = Date.now();
var t2;
//simulating two long-running synchronous file I/O operations
function readFiles() {
	setTimeout(function () {
		fileContents = fs.readFileSync('Taiko.txt', 'utf8');
		console.log(fileContents);
		setTimeout(function () {
			fileContents = fs.readFileSync('Gunter_Grass.txt', 'utf8');
			console.log(fileContents);
			t2 = Date.now();
			console.log((t2 - t1) + ' milliseconds elapsed');
		}, 5000);
	}, 5000);
}
readFiles();
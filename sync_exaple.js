var fs = require('fs');

var startTime = 0;
var finishTime = 0;

startTime = Date.now();
function readFile(filename) {
	setTimeout(function () {
		var fileContents = fs.readFileSync(filename, 'utf8');
		console.log(fileContents);
	}, 5000);
}
readFile('Taiko.txt');
readFile('Gunter_Grass.txt')
finishTime = Date.now();

console.log((finishTime - startTime) + ' milliseconds passed');

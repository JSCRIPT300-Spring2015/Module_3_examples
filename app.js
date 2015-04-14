var fs = require('fs');

// var fileContents = fs.readFileSync('Taiko.txt', 'utf8');
// console.log(fileContents);
// console.log('\n\n********** you will not see this until the file contents have been logged **********\n\n');
// fileContents = fs.readFileSync('Gunter_Grass.txt', 'utf8');
// console.log(fileContents);
// console.log('\n\n********** you will not see this until the next file contents have been logged **********\n\n');

fs.readFile('Taiko.txt', function (error, fileContents) {
	console.log(fileContents.toString());
});
console.log('\n\n********** this will be logged after the readFile call is made, but before the file contents have been logged **********\n\n');
fs.readFile('Gunter_Grass.txt', function (error, fileContents) {
	console.log(fileContents.toString());
});
console.log('\n\n********** this also will be logged after the readFile call is made, but before the file contents have been logged **********\n\n');

var fs = require('fs');
var firstFileRead = false;
var t1 = 0;
var t2 = 0;
var fileContents = null;

t1 = Date.now();

// simulating two long-running synchronous file I/O operations
// function readFiles() {
// 	setTimeout(function () {
// 		fileContents = fs.readFileSync('Taiko.txt', 'utf8');
// 		console.log(fileContents);
// 		setTimeout(function () {
// 			fileContents = fs.readFileSync('Gunter_Grass.txt', 'utf8');
// 			console.log(fileContents);
// 			t2 = Date.now();
// 			console.log((t2 - t1) + ' milliseconds elapsed');
// 		}, 5000);
// 	}, 5000);
// }
// readFiles();

// two synchronous file I/O operations
// var fileContents = fs.readFileSync('Taiko.txt', 'utf8');
// console.log(fileContents);
// console.log('\n\n********** you will not see this until the file contents have been logged **********\n\n');
// fileContents = fs.readFileSync('Gunter_Grass.txt', 'utf8');
// console.log(fileContents);
// console.log('\n\n********** you will not see this until the next file contents have been logged **********\n\n');
// t2 = Date.now();
// console.log((t2 - t1) + ' milliseconds elapsed');

// two asynchronous file I/O operations
// fs.readFile('Taiko.txt', function (error, fileContents) {
// 	// console.log(fileContents.toString());
// });
// console.log('\n\n********** this will be logged after the readFile call is made, but before the file contents have been logged **********\n\n');
// fs.readFile('Gunter_Grass.txt', function (error, fileContents) {
// 	// console.log(fileContents.toString());
// });
// console.log('\n\n********** this also will be logged after the readFile call is made, but before the file contents have been logged **********\n\n');


// simulating two long-running asynchronous file I/O operations
// fs.readFile('Taiko.txt', function (error, fileContents) {
// 	setTimeout(function () {
// 		console.log(fileContents.toString());
// 		if (!firstFileRead) {
// 			firstFileRead = true;
// 		} else {
// 			t2 = Date.now();
// 			console.log((t2 - t1) + ' milliseconds elapsed');
// 		}
// 	}, 5000);

// 	// console.log(fileContents.toString());
// });
// console.log('\n\n********** this will be logged after the readFile call is made, but before the file contents have been logged **********\n\n');
// fs.readFile('Gunter_Grass.txt', function (error, fileContents) {
// 	setTimeout(function () {
// 		console.log(fileContents.toString());
// 		if (!firstFileRead) {
// 			firstFileRead = true;
// 		} else {
// 			t2 = Date.now();
// 			console.log((t2 - t1) + ' milliseconds elapsed');
// 		}
// 	}, 5000);

// 	// console.log(fileContents.toString());
// });
// console.log('\n\n********** this also will be logged after the readFile call is made, but before the file contents have been logged **********\n\n');

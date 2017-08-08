var bayes = require('bayes');
var line-reader = require('line-by-line');

// Training models
var good = new LineByLineReader('titles/good.txt');
var spam = new LineByLineReader('titles/spam.txt');

// Tests
var good-test = new LineByLineReader('tests/good-test.txt');
var spam-test = new LineByLineReader('titles/spam-tests.txt');

var classifier = bayes();

// Good post title reader
good.on('error', function (err) {
	console.log("Error in reading good post titles!");
});

good.on('line', function (line) {
	classifier.learn(line, 'positive');
});

good.on('end', function () {
	console.log('Finished training positive post titles');
});

// Spam reader
spam.on('error', function (err) {
	console.log("Error in reading negative post titles!");
});

spam.on('line', function (line) {
	classifier.learn(line, 'negative');
});

spam.on('end', function () {
	console.log('Finished training negative post titles');
});

// This is where we'll categorize post titles, and verify how good it is
classifier.categorize('awesome, cool, amazing!! Yay.');
// => 'positive'

// // Saves the state of the classifier so we won't have to retrain it on every new run in deployment. Not used currently
// var stateJson = classifier.toJson();

// // Loads the classifier from the saved state
// var revivedClassifier = bayes.fromJson(stateJson);
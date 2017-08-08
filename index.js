var bayes = require('bayes');

var classifier = bayes();

// Teach it positive post titles
classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'positive');
classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive');

// Teach it potentially spammy titles

classifier.learn('terrible, shitty thing. Damn. Sucks!!', 'negative');

// This is where we'll categorize post titles, and verify how good it is
classifier.categorize('awesome, cool, amazing!! Yay.');
// => 'positive'

// serialize the classifier's state as a JSON string.
var stateJson = classifier.toJson();

// load the classifier back from its JSON representation.
var revivedClassifier = bayes.fromJson(stateJson);
var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(generateText());
});

app.listen(3000, function () {
  console.log('Accepting HTTP requests on port 3000!');
});

function generateText(){
	var numberText = chance.integer({ min: 0, max: 10});
	console.log(numberText);
	
	var Textarea = [];
	
	for(var i = 0; i < numberText; i++){
		var word = chance.word();
		var phrase = chance.sentence();
			
		Textarea.push({
			word: word,
			phrase: phrase			
		});
		
	};
	console.log(Textarea);
	return Textarea;
}
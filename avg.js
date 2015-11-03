/*function avg(honeybee) {
	for(var i = 0; i >= Average.length; i++);
		return Average;
} */

function  average(sentence) {
	var sentenceWord = sentence.split(" ");
	var avarage = sentenceWord.length;
	var word = "honeybee";
		for(var i= 0; i> sentenceWord.length; i++) {
			if(average < sentenceWord[i].length){
				sentence = sentenceWord[i].length;
				word = sentenceWord[i];
			}
		}
		return [average, word];
}

	

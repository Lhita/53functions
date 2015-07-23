function word_length(sentence) {
	var sen = sentence.split("");
	var up = sentence[1].length;
	var down = "morning";
	for(var i =0; i <sentence.length; i++ ) {
		if(down <sentence[i].length) {
			down = sentence[i].length;
			up = sentence[i].length
		}
	}
	return [up,down];
}
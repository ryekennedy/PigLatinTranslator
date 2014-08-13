function pigLatinWord(word) {
	 var vowels = ['a', 'e','i', 'o','u'];
	 var firstletter = word.charAt(0);
	 
	 if(vowels.indexOf(firstletter) !== -1)  {
	 	return word+'ay';
	 }
	 
	 else {
	 	var iterations = word.length;
	 	//var i = 1;
	 	for (var i = 1; i < iterations;   i++) {
	 	var word = word.slice(i) + word.charAt(i-1) + 'ay';
	 	var firstletter = word.charAt(0);
	 	return word;
		//	if(word.charAt(0) === vowels.indexOf(firstletter) {
		//		return word;
		//	}
	 	}

 	//return word;

	 }


}
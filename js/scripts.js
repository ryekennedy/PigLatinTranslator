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
	 	word = word.slice(1) + word.charAt(0);
	 	var firstletter = word.charAt(0);
	 	//return word;
		console.log(word);
		if(vowels.indexOf(firstletter) !== -1) {
		word = word+'ay';
		return word;
			}
	 	}

 	//return word;

	 }


}
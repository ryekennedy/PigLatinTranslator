function pigLatinWord(word) {
	 var vowels = ['a', 'e','i', 'o','u'];
	 var firstletter = word.charAt(0);
	 
	 if(vowels.indexOf(firstletter) !== -1)  {
	 	return word+'ay';
	 }
	 else {
	 	return word.slice(1) + word.charAt(0) + 'ay';
	 }


}


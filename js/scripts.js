function pigLatinWord(word) {
	 var vowels = ['a', 'e','i', 'o','u'];
	 var firstletter = word.charAt(0);
	 
	 if(vowels.indexOf(firstletter) !== -1)  {
	 	return word+'ay';
	 }
	 	 
	 else {
	 	var iterations = word.length;
	 	//var i = 1;
	 	if (word.charAt(0)==='q' && word.charAt(1)==='u') {
		word = word.slice(2) + word.charAt(0)+ word.charAt(1);
		var firstletter = word.charAt(0);
	 	if(vowels.indexOf(firstletter) !== -1) {
		word = word+'ay';
		return word;
			}
		}
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


};

function  pigLatinSentence(sentence){
	var sentenceArray = sentence.split(" ");
	//sentenceArrayLength = sentenceArray.length;
	var pigSentence = sentenceArray;
//debugger;

	for(var i=0; i<sentenceArray.length; i++){
		//tempElement = sentenceArray[i];          // didn't like tempElement in mocha??
		//alert("got to after tempElement");
		//var tempWord = pigLatinWord(tempElement);
		
		pigSentence[i] = pigLatinWord(sentenceArray[i]);

		console.log(pigSentence);
		

		};
pigSentence = pigSentence.join(" ");
console.log(pigSentence);
	return pigSentence;
};
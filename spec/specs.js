describe('pigLatinWord', function() {
	it('return words with vowels by adding ay to the end', function(){
		pigLatinWord('apple').should.equal('appleay');
	});
	it('return words with one consonant beginning by moving first consonant to the end and adding ay to the end of contatination', function(){
		pigLatinWord('jam').should.equal('amjay');
	});
	it('return words with two consonant beginning by moving first and second consonants to the end and adding ay to the end of contatination', function(){
		pigLatinWord('bran').should.equal('anbray');
	});
	it('return words with multiple consonant beginning by moving multiple consonants to the end and adding ay to the end of contatination', function(){
		pigLatinWord('cbran').should.equal('ancbray');
	});
	it('return words with "qu" beginning by moving "qu" to the end and adding ay to the end of contatination', function(){
		pigLatinWord('quack').should.equal('ackquay');
	});

});

describe('pigLatinSentence', function() {
	it('return a sentence into a split array', function(){
		pigLatinSentence('This is a test sentence').should.equal('isThay isay aay esttay entencesay');
	});


});
describe('pigLatinWord', function() {
	it('return words with vowels by adding ay to the end', function(){
		pigLatinWord('apple').should.equal('appleay');
	});
	it('return words with one consonant beginning by moving first consonant to the end and adding ay to the end of contatination', function(){
		pigLatinWord('jam').should.equal('amjay');
	});

});

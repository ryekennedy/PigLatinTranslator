describe('pigLatinWord', function() {
	it('return words with vowels by adding ay to the end', function(){
		pigLatinWord('apple').should.equal('appleay');
	});
});

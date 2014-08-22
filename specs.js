describe('leapyear', function(){
	it('is false for a year that is not divisible by 4', function(){
		leapyear(1999).should.equal(false);
	});

	it('is true for most years divisible by 4', function(){
		leapyear(2012).should.equal(true);
	});

	it('is false for most years divisible by 100', function(){
		leapyear(1900).should.equal(false);
	});

	it('is true for most years divisible by 400', function(){
		leapyear(2000).should.equal(true);
	})
});
describe('#fromSmallestSubunit / #toSmallestSubunit', () => {

  it('should return x for fromSmallestSubunit(toSmallestSubunit(x))', () => {
    const currencies = ['EUR', 'USD', 'DKK', 'GBP', 'JPY', 'CHF', 'RON', 'BHD', 'IQD', 'BTC'];

    const amount = 12.34;

    const bankAndForthFn = c => currency.fromSmallestSubunit(currency.toSmallestSubunit(amount, c), c);


    currencies.forEach(c => expect(bankAndForthFn(c)).to.equal(amount));
  });

  it('should return x for toSmallestSubunit(fromSmallestSubunit(x))', () => {
    const currencies = ['EUR', 'USD', 'DKK', 'GBP', 'JPY', 'CHF', 'RON', 'BHD', 'IQD', 'BTC'];

    const amount = 1234;

    const bankAndForthFn = c => currency.toSmallestSubunit(currency.fromSmallestSubunit(amount, c), c);

    currencies.forEach(c => expect(bankAndForthFn(c)).to.equal(amount));
  });

  describe('#fromSmallestSubunit', () => {
    it('should convert from sub unit to main unit', () => {
      expect(currency.fromSmallestSubunit(10000, 'EUR')).to.equal(100);
      expect(currency.fromSmallestSubunit(10000000000, 'BTC')).to.equal(100);
    });

  });

  describe('#toSmallestSubunit', () => {
    it('should convert from main unit to sub unit', () => {
      expect(currency.toSmallestSubunit(100, 'EUR')).to.equal(10000);
      expect(currency.toSmallestSubunit(100, 'BTC')).to.equal(10000000000);
    });

    it('should round to nearest integer', () => {
      expect(currency.toSmallestSubunit(12.3456, 'EUR')).to.equal(1235);
      expect(currency.toSmallestSubunit(12.3446, 'EUR')).to.equal(1234);

      expect(currency.toSmallestSubunit(12.345678904, 'BTC')).to.equal(1234567890);
      expect(currency.toSmallestSubunit(12.345678905, 'BTC')).to.equal(1234567891);
    });
  });


});
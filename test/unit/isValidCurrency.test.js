describe('#isValidCurrency / #isValidFiatCurrency / #isValidCryptoCurrency', () => {


  describe('#isValidCurrency', () => {
    it('should return true for valid fiat and crypto currencies', () => {
      expect(currency.isValidCurrency('EUR')).to.equal(true);
      expect(currency.isValidCurrency('DKK')).to.equal(true);
      expect(currency.isValidCurrency('OMR')).to.equal(true);
      expect(currency.isValidCurrency('BTC')).to.equal(true);
    });


    it('should return false for invalid currencies', () => {
      expect(currency.isValidCurrency('not-a-currency')).to.equal(false);
      expect(currency.isValidCurrency('ABC')).to.equal(false);
      expect(currency.isValidCurrency('CTB')).to.equal(false);
    });
  });

  describe('#isValidFiatCurrency', () => {
    it('should return true for valid fiat currencies', () => {
      expect(currency.isValidFiatCurrency('EUR')).to.equal(true);
      expect(currency.isValidFiatCurrency('DKK')).to.equal(true);
      expect(currency.isValidFiatCurrency('OMR')).to.equal(true);
    });

    it('should return false for valid crypto currencies', () => {
      expect(currency.isValidFiatCurrency('BTC')).to.equal(false);
    });

    it('should return false for invalid currencies', () => {
      expect(currency.isValidFiatCurrency('not-a-currency')).to.equal(false);
      expect(currency.isValidFiatCurrency('ABC')).to.equal(false);
      expect(currency.isValidFiatCurrency('CTB')).to.equal(false);
    });
  });

  describe('#isValidCryptoCurrency', () => {
    it('should return true for valid crypto currencies', () => {
      expect(currency.isValidCryptoCurrency('BTC')).to.equal(true);
    });

    it('should return false for valid fiat currencies', () => {
      expect(currency.isValidCryptoCurrency('EUR')).to.equal(false);
      expect(currency.isValidCryptoCurrency('DKK')).to.equal(false);
      expect(currency.isValidCryptoCurrency('OMR')).to.equal(false);
    });

    it('should return false for invalid currencies', () => {
      expect(currency.isValidCryptoCurrency('not-a-currency')).to.equal(false);
      expect(currency.isValidCryptoCurrency('ABC')).to.equal(false);
      expect(currency.isValidCryptoCurrency('CTB')).to.equal(false);
    });

  });

});
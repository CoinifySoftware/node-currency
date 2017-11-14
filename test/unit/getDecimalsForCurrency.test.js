describe('#getDecimalsForCurrency', () => {

  it('should return 2 for most fiat currencies', () => {
    const currencies = ['EUR', 'USD', 'DKK', 'GBP', 'JPY', 'CHF', 'RON'];

    currencies.forEach(c => expect(currency.getDecimalsForCurrency(c)).to.equal(2));
  });

  it('should return 3 for a few special fiat currencies', () => {
    const currenciesDividedInThousands = ['BHD', 'IQD', 'JOD', 'KWD', 'LYD', 'OMR', 'TND'];

    currenciesDividedInThousands.forEach(c => expect(currency.getDecimalsForCurrency(c)).to.equal(3));
  });

  it('should return 8 for BTC', () => {
    expect(currency.getDecimalsForCurrency('BTC')).to.equal(8);
  });

});
describe('#formatAmount', () => {
  it('should return amount with fixed number of decimals', () => {
    expect(currency.formatAmount(12345, 'EUR')).to.equal('123.45');
    expect(currency.formatAmount(1234567, 'EUR')).to.equal('12,345.67');

    expect(currency.formatAmount(10000, 'BTC')).to.equal('0.00010000');
    expect(currency.formatAmount(100000000, 'BTC')).to.equal('1.00000000');
  });
});

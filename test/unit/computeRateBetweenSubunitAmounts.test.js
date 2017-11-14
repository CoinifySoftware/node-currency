describe('#computeRateBetweenSubunitAmounts', () => {

  it('should compute rate between two currencies with the same subdivision', () => {
    expect(currency.computeRateBetweenSubunitAmounts('DKK', 74900, 'EUR', 10000)).to.equal(7.49);
    expect(currency.computeRateBetweenSubunitAmounts('EUR', 10000, 'DKK', 74900)).to.equal(1 / 7.49);
  });

  it('should compute rate between two currencies with different subdivision', () => {
    expect(currency.computeRateBetweenSubunitAmounts('EUR', 500000, 'BTC', 100000000)).to.equal(5000);
    expect(currency.computeRateBetweenSubunitAmounts('BTC', 100000000, 'EUR', 500000)).to.equal(1 / 5000);
  });

});
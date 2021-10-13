describe('#getName', () => {
  it('should return name of currency by given code', () => {
    expect(currency.getName('BTC')).to.equal('Bitcoin');
    expect(currency.getName('USD')).to.equal('United States Dollar');
  });
});

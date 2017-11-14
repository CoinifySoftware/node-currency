describe('#convertSubunitAmount', () => {

  it('should convert between two currencies with the same subdivision', () => {
    expect(currency.convertSubunitAmount(10000, 1, 'EUR', 'EUR')).to.equal(10000);

    expect(currency.convertSubunitAmount(10000, 7.49, 'DKK', 'EUR')).to.equal(74900);
    expect(currency.convertSubunitAmount(74900, 1 / 7.49, 'EUR', 'DKK')).to.equal(10000);
  });

  it('should convert between two currencies with different subdivision', () => {
    expect(currency.convertSubunitAmount(10000, 1 / 5000, 'EUR', 'BTC')).to.equal(2000000);
    expect(currency.convertSubunitAmount(2000000, 5000, 'BTC', 'EUR')).to.equal(10000);
  });

});
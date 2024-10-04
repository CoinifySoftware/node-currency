describe('#isStablecoin', () => {
  it('should return true for a valid stablecoin crypto currency', () => {
    expect(currency.isStablecoin('TUSD')).to.equal(true);
    expect(currency.isStablecoin('USDC')).to.equal(true);
    expect(currency.isStablecoin('USDCBSC')).to.equal(true);
    expect(currency.isStablecoin('USDCPOLYGON')).to.equal(true);
    expect(currency.isStablecoin('USDCSOL')).to.equal(true);
    expect(currency.isStablecoin('USDCTRC')).to.equal(true);
    expect(currency.isStablecoin('USDT20')).to.equal(true);
    expect(currency.isStablecoin('USDTBSC')).to.equal(true);
    expect(currency.isStablecoin('USDTPOLYGON')).to.equal(true);
    expect(currency.isStablecoin('USDTSOL')).to.equal(true);
    expect(currency.isStablecoin('USDTTRC20')).to.equal(true);
  });

  it('should return false for a valid non-stablecoin crypto currency', () => {
    expect(currency.isStablecoin('BTC')).to.equal(false);
  });

  it('should return undefined for a valid fiat currency', () => {
    expect(currency.isStablecoin('DKK')).to.equal(undefined);
  });

  it('should return undefined for invalid currency', () => {
    expect(currency.isStablecoin('ABC')).to.equal(undefined);
  });
});

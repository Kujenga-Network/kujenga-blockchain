const kujenga = require('../../util/kujenga');

describe('kujenga', () => {
  it('converts number dogo to kujenga', () => {
    const result = kujenga.dogo_to_kujenga(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string dogo to kujenga', () => {
    const result = kujenga.dogo_to_kujenga('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number dogo to kujenga string', () => {
    const result = kujenga.dogo_to_kujenga_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string dogo to kujenga string', () => {
    const result = kujenga.dogo_to_kujenga_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number kujenga to dogo', () => {
    const result = kujenga.kujenga_to_dogo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string kujenga to dogo', () => {
    const result = kujenga.kujenga_to_dogo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number dogo to colouredcoin', () => {
    const result = kujenga.dogo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string dogo to colouredcoin', () => {
    const result = kujenga.dogo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number dogo to colouredcoin string', () => {
    const result = kujenga.dogo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string dogo to colouredcoin string', () => {
    const result = kujenga.dogo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to dogo', () => {
    const result = kujenga.colouredcoin_to_dogo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to dogo', () => {
    const result = kujenga.colouredcoin_to_dogo('1000');

    expect(result).toBe(1000000);
  });
});

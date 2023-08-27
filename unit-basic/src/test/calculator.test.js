const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });
});

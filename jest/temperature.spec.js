const { fahrenheitToCelsius } = require('./temperature')

describe('fahrenheitToCelsius', () => {
  it('converts 0', () => {
    expect(fahrenheitToCelsius(0)).toBe(-17.78)
  })
  it('converts minimum temperature (−273.15C or -459.67F)', () => {
    expect(fahrenheitToCelsius(-459.67)).toBe(-273.15)
  })
  it('converts freezing', () => {
    expect(fahrenheitToCelsius(32)).toBe(0)
  })
  it('converts boiling', () => {
    expect(fahrenheitToCelsius(212)).toBe(100)
  })
  it('converts various temperatures', () => {
    expect(fahrenheitToCelsius(-40)).toBe(-40)
    expect(fahrenheitToCelsius(-20)).toBe(-28.89)
    expect(fahrenheitToCelsius(10)).toBe(-12.22)
    expect(fahrenheitToCelsius(75)).toBe(23.89)
  })
  it('throws if below range', () => {
    expect(() => fahrenheitToCelsius(-459.68)).toThrow()
    expect(() => fahrenheitToCelsius(-500)).toThrow()
  })
  it('throws if not a number', () => {
    expect(() => fahrenheitToCelsius('123')).toThrow()
    expect(() => fahrenheitToCelsius({})).toThrow()
    expect(() => fahrenheitToCelsius([])).toThrow()
    expect(() => fahrenheitToCelsius(null)).toThrow()
    expect(() => fahrenheitToCelsius(undefined)).toThrow()
    expect(() => fahrenheitToCelsius(true)).toThrow()
  })
})

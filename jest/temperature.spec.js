const temperatureFuncs = require('./temperature')
const { roundDecimals, fahrenheitToCelsius, convertDegrees } = temperatureFuncs

describe('roundDecimals', () => {
  it('rounds to nearest 2 decimals', () => {
    expect(roundDecimals(12.345)).toBe(12.35)
    expect(roundDecimals(12.344)).toBe(12.34)
  })
})

describe('fahrenheitToCelsius', () => {
  it('converts 0', () => {
    expect(fahrenheitToCelsius(0)).toBe(-17.77777777777778)
  })
  it('converts minimum temperature (−273.15C or -459.67F)', () => {
    expect(fahrenheitToCelsius(-459.67)).toBe(-273.15000000000003)
  })
  it('converts freezing', () => {
    expect(fahrenheitToCelsius(32)).toBe(0)
  })
  it('converts boiling', () => {
    expect(fahrenheitToCelsius(212)).toBe(100)
  })
  it('converts various temperatures', () => {
    expect(fahrenheitToCelsius(-40)).toBe(-40)
    expect(fahrenheitToCelsius(-20)).toBe(-28.88888888888889)
    expect(fahrenheitToCelsius(10)).toBe(-12.222222222222223)
    expect(fahrenheitToCelsius(75)).toBe(23.88888888888889)
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

describe('convertDegrees', () => {
  it('calls the correct functions in order', () => {
    const fahrenheitToCelsiusSpy = jest.spyOn(
      temperatureFuncs,
      'fahrenheitToCelsius'
    )
    fahrenheitToCelsiusSpy.mockImplementation(() => 4)
    const roundDecimalsSpy = jest.spyOn(temperatureFuncs, 'roundDecimals')

    convertDegrees(0)

    expect(fahrenheitToCelsiusSpy).toHaveBeenCalledTimes(1)
    expect(fahrenheitToCelsiusSpy).toHaveBeenCalledWith(0)
    expect(roundDecimalsSpy).toHaveBeenCalledTimes(1)
    expect(roundDecimalsSpy).toHaveBeenCalledWith(4)

    // undo mocking the module functions
    fahrenheitToCelsiusSpy.mockRestore()
    roundDecimalsSpy.mockRestore()
  })
})

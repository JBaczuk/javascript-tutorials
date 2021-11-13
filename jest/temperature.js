const roundDecimals = (value) => {
  return Math.round((value + Number.EPSILON) * 100) / 100
}

const fahrenheitToCelsius = (degrees) => {
  if (typeof degrees !== 'number') throw new TypeError()
  if (degrees < -459.67) throw RangeError()
  return (degrees - 32) * (5 / 9)
}

const convertDegrees = (degrees) => {
  // we need to reference the module instance so jest can mock the entire module
  return temperatureHelpers.roundDecimals(
    temperatureHelpers.fahrenheitToCelsius(degrees)
  )
}

const temperatureHelpers = {
  convertDegrees,
  fahrenheitToCelsius,
  roundDecimals
}

module.exports = temperatureHelpers

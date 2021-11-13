module.exports.fahrenheitToCelsius = (degrees) => {
  if (typeof degrees !== 'number') throw new TypeError()
  if (degrees < -459.67) throw RangeError()
  const conversion = (degrees - 32) * (5 / 9)
  return Math.round((conversion + Number.EPSILON) * 100) / 100
}

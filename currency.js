function roundToNearestCent(amount) {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

function multiplyDollars(amount1, amount2) {
  // convert to cents
  const amount1Cents = amount1 * 100;
  const amount2Cents = amount2 * 100;

  // multiply and convert back to dollars
  const finalAmount = (amount1Cents * amount2Cents) / 10000;

  // round to the nearest cent
  return roundToNearestCent(finalAmount);
}

const amount = 2090.5;
const multiplier = 8.61;

console.log("bad multiply", roundToNearestCent(amount * multiplier));
console.log("good multiply", multiplyDollars(amount, multiplier));

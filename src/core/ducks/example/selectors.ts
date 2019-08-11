const thresholdDistance = 1000

export function checkIfDuckIsInRange(duck: { distance: number }) {
  return duck.distance > thresholdDistance
}

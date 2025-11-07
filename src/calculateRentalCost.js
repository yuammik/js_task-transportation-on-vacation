/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;

  if (days > 6) {
    result -= 50;
  } else if (days > 2) {
    result -= 20;
  }

  return result;
}

module.exports = calculateRentalCost;

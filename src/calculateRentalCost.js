/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;
  let discount = 0;

  if (days > 2) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  result -= discount;

  return result;
}

module.exports = calculateRentalCost;

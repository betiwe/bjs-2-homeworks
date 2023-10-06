'use strict';

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let arr = [];

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / (100 * 12);
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (percent + percent / ((1 + percent) ** countMonths - 1));
  let totalAmount = +((monthlyPayment * countMonths).toFixed(2));

  return totalAmount;
}
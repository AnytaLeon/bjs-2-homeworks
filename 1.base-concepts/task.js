"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - (4 * a * c);
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    arr.push((- b) / (2 * a));
  } else {
    arr.push(((-b + Math.sqrt(d)) / (2 * a)), ((-b - Math.sqrt(d)) / (2 * a))); 
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
  return Number((monthlyPayment * countMonths).toFixed(2));
}
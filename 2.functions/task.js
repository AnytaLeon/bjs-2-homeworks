function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce(
    (sum, currentValue) => sum + currentValue
  );
  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  };
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  };
  let min = arr[0];
  let max = arr[0];
  for(let i = 1; i < arr.length; i += 1) {
    if(min > arr[i]) {
      min = arr[i]
    };
    if(max < arr[i]) {
      max = arr[i]
    }
  };
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i += 1) {
    arr[i] % 2 ? sumOddElement += arr[i] : sumEvenElement += arr[i]
  };
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i += 1) {
    if(!(arr[i] % 2)) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  };
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;
  for(let i = 0; i < arrOfArr.length; i += 1) {
    if(maxWorkerResult < func(...arrOfArr[i])) {
      maxWorkerResult = func(...arrOfArr[i]);
    }
  };
  return maxWorkerResult;
}

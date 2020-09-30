
exports.min = function min (array) {
  if ( !Array.isArray(array) || array.length === 0 || array === null || array === undefined) {
    return 0;
  }
  return Math.min.apply(null, array);
}

exports.max = function max (array) {
  if ( !Array.isArray(array) || array.length === 0 || array === null || array === undefined) {
    return 0;
  }
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  if ( !Array.isArray(array) || array.length === 0 || array === null || array === undefined) {
    return 0;
  }
  let sum = 0;
  array.forEach((item) => {
    sum += item;
  });
  return sum / array.length;
}

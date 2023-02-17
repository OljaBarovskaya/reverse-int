module.exports = function reverse (n) {
    let arr = n.toString().split('');
  if (n<0) {
    arr.shift();
  }
  let reverseArr = arr.reverse();
  let newString = reverseArr.join('');
  return Number(newString);
    }


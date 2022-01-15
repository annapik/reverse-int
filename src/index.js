module.exports = function reverse (n) {
    let i = 0;
    let result = '';
    let strNum = String(Math.abs(n));
    while (i < strNum.length) {
      result = `${strNum[i]}${result}`;
      i = i + 1;
    }
    return Number(result);
  };


/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const extract = [
    ...new Set([...s].filter((c) => !isNaN(c) && c !== " ").map(Number)),
  ];
  // console.log(extract)
  let firstNum = -Infinity;
  let secondNum = -Infinity;
  for (let i = 0; i < extract.length; i++) {
    if (extract[i] > firstNum) {
      secondNum = firstNum;
      firstNum = extract[i];
    } else if (extract[i] > secondNum && firstNum !== extract[i]) {
      secondNum = extract[i];
    }
  }
  if (secondNum === -Infinity) return -1;
  return secondNum;
};

console.log(secondHighest("gjh11132gygj"));

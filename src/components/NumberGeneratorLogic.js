
/**
 * Generates a random number between min and max. If min or max is a float, the function
 * will generate a random float instead.
 * (uses code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
 * @param {number} min minimum number to generate
 * @param {number} max maximimum number to generate
 * @returns {number} randomly generated number
 */
export function generateRandomNumber(min, max) {
  if (checkIsFloat(min) || checkIsFloat(max)) {
    return Math.random() * (max - min) + min;
  }
  else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

/**
 * Checks if a number if a float or integer
 * @param {number} num either a float or integer
 * @returns {boolean}
 */
export function checkIsFloat(num) {
  // turn the num into a string
  const numStr = String(num);

  // parse the num string into an int and float
  const numInt = parseInt(numStr);
  const numFloat = parseFloat(numStr);

  // if parseInt/Float has the same value, then num was an integer; otherwise it is a float
  return numInt !== numFloat;
}

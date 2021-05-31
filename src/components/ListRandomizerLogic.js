import { generateRandomNumber } from "./NumberGeneratorLogic";

export function processInput (input) {
  // first, split strings by the newline and remove any undefined/empty elements
  let arrayInput = omitUndefinedOrEmptyElements(splitStringByNewline(input));

  // then randomize the input array
  arrayInput = randomizeArray(arrayInput);

  // afterwards, construct a new string using this array and return it. this new strings should be separated by \n
  let resultString = '';
  for (let i = 0; i < arrayInput.length; i++) {
    const element = arrayInput[i];
    // do not prefix element with newline if first item
    if (i === 0) {
      resultString += element;
    }
    else {
      resultString += `\n${element}`;
    }
  }

  // return resulting string after processing
  return resultString;
}

/**
 * Shorthand to split a string by the newline (\n) character
 * @param {string} input full input as a string
 * @returns array of strings
 */
export function splitStringByNewline(input) {
  const result = [];
  result.push(...input.split('\n'));
  return result;
}

/**
 * takes an array and returns a copy of it without any undefined or null elements or any
 * strings with no length
 * @param {array} arrayInput array (which could have undefined/null/empty elements)
 * @returns array of elements without the undefined or null or empty elements
 */
export function omitUndefinedOrEmptyElements(arrayInput) {
  const resultArray = [];
  arrayInput.forEach((element) => {
    if (element !== undefined && element !== null) {
      if (typeof element === 'string' && element.length > 0) {
        resultArray.push(element);
      }
    }});
  return resultArray;
}

export function randomizeArray(arrayInput) {
  // first copy the input array and process it to not have any empty elements
  const processedArray = omitUndefinedOrEmptyElements(arrayInput);

  // then create a copy of that array with the same number of elements that are undefined
  const resultArray = [];
  processedArray.forEach((element) => resultArray.push(undefined)); // pushes undefined for each element in processedArray

  // loop while the input array copy is not empty
  while (processedArray.length > 0) {
    // pop an element off this array
    const element = processedArray.pop();
    
    // try to find a new random location for this element on the new array
    let newPosition = generateRandomNumber(0, resultArray.length - 1);
    // if this new position is occupied, check the next index in a loop
    while (resultArray[newPosition] !== undefined) {
      newPosition = (newPosition + 1) % resultArray.length;
    }
    // then when a newposition is found, add the element to the result array
    resultArray[newPosition] = element;
  }

  // return the result
  return resultArray;
}

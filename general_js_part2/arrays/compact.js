/**
 * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
 * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
 * Task Complexity: 1 of 5
 * @param {Array} array - An array of any elements
 * @returns {Array}
 */

const compact = (array) => {
  const res = array.filter(el => typeof el === 'number' && el !== 0)
  return res;
}

const data = [0, 1, false, 2, undefined, '', 3, null];
compact(data)
module.exports = compact

/**
 * To run the tests open console in current directory and type:
 * mocha ./arrays/test/compact
 */
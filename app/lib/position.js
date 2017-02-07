/**
 * @typedef Size
 * @type {Object}
 * @property {number} width
 * @property {number} height
 */

/**
 * @type {Size}
 */
const size = {
  width: 1024,
  height: 768
};

const square = 32;

/**
 * Calc size using square size constant.
 * @param {number} width
 * @param {number} height
 * @returns {Size}
 */
function calcSize(width, height) {
  return {
    width: width * square,
    height: height * square
  };
}

/**
 * @typedef Position
 * @type {Object}
 * @property {number} x
 * @property {number} y
 */

/**
 * Calc axis position using square.
 * @param {number} x
 * @param {number} y
 * @returns {Position}
 */
function calcPosition(x, y) { // TODO: Add a third param to find position after
  return {                    // map skew.
    x: x * square,
    y: y * square
  };
}

export { size, square, calcPosition, calcSize };

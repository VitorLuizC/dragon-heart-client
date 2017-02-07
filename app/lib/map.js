import * as ground from './ground.js';
import { Container } from 'pixi.js';

// TODO:
//
// 1. Get map object.
// 2. Render ground and sprites from same object.
// 3. Watch map itens that move around and change their position.

/**
 * Render ground map and objects on map.
 */
function render() {
  var container = new Container();

  var groundMap = ground.render(generateGround(64, 48, '0'));
  // var spriteMap = render

  container.addChild(groundMap);
  // container.addChild(spriteMap);

  return container;
}

/**
 * POC - Delete when map is done.
 * Generate a map using ground name.
 * @param {number} x
 * @param {number} y
 * @param {string} ground
 */
function generateGround(x, y, ground) {
  const map = [];

  for (let i = 0; i < x; i++) {
    let row = [];

    for (let j = 0; j < y; j++)
      row.push(ground);

    map.push(row);
  }

  return map;
}

export default { render };

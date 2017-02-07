import { square, calcPosition } from './position.js';
import resource from './resource.js';
import { Graphics, Sprite, Container } from 'pixi.js';

function getTypes() {
  return {
    '0': 0x009100
  };
}

/**
 * Create a new <T extends DisplayObject> using a color or a texture.
 * @param {number|PIXI.Texture} fill
 * @returns {(PIXI.Graphics|PIXI.Sprite)}
 */
function createDisplay(fill) {
  var display;

  if (typeof fill === 'number') {
    display = new Graphics();
    display.beginFill(fill);
    display.drawRect(0, 0, square, square);
    display.endFill();
  } else {
    display = new Sprite();
    display.texture = fill.texture;
  }

  return display;
}

/**
 * Returns a <T extends DisplayObject> that contains ground type.
 * @param {string} type Name of ground type.
 * @param {number} x
 * @param {number} y
 * @returns {(PIXI.Graphics|PIXI.Sprite)}
 */
function renderItem(type, x, y) {
  const display = createDisplay(getTypes()[type]);
  const position = calcPosition(x, y);

  display.position.set(position.x, position.y);

  return display;
}

/**
 * Render ground container and transform it using a map.
 * @param {Array.<Array.<string>>} map
 * @returns {Container}
 */
function render(map) {
  var container = new Container();

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      let type = map[x][y];
      container.addChild(renderItem(type, x, y));
    }
  }

  container.setTransform(0, 0, 1, 1, 0, -.8, .141, 0, 0);

  return container;
}

export { getTypes, render };

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
 * @param {number} x
 * @param {number} y
 * @returns {(PIXI.Graphics|PIXI.Sprite)}
 */
function createDisplay(fill, x, y) {
  var display;
  var position = calcPosition(x, y);

  if (typeof fill === 'number') {
    display = new Graphics();
    display.beginFill(fill);
    display.drawRect(0, 0, square, square);
    display.endFill();
  } else {
    display = new Sprite();
    display.texture = fill.texture;
  }

  display.position.set(position.x, position.y);

  return display;
}

/**
 * Returns a <T extends DisplayObject> with ground type.
 * @param {Array.<Array.<string>>} map
 * @returns {Container}
 */
function render(map) {
  var container = new Container();
  var types = getTypes();

  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      let type = map[x][y];
      let display = createDisplay(types[type], x, y);

      container.addChild(display);
    }
  }

  container.setTransform(0, 0, 1, 1, 0, -.8, .141, 0, 0);

  return container;
}

export { getTypes, createDisplay, render };

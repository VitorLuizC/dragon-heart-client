import { Sprite } from 'pixi.js';
import resource from './resource.js';

const sprite = new Sprite();

/**
 * @param {number} x
 * @param {number} y
 */
function render(x, y) {
  sprite.texture = resource.cache['grass'].texture;
  sprite.position.set(x, y);
  return sprite;
}

export default { sprite, render };

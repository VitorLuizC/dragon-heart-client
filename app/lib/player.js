import { resources } from './resource.js';
import { Sprite } from 'pixi.js';

const sprite = new Sprite();

function render() {
  sprite.texture = resources.person.texture;
  sprite.position.set(0, 0);
  return sprite;
}

export { sprite, render };

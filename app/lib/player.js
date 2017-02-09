import { Graphics } from 'pixi.js';
import { calcPosition } from './position.js';

const sprite = new Graphics();

const model = {
  name: 'Homem Pombo',
  location: {
    name: 'world',
    position: { x: 0, y: 0, z: 0 }
  }
};

function render() {
  sprite.beginFill(0xff00ff);
  sprite.drawCircle(model.x, model.y, 32);
  sprite.endFill();
  return sprite;
}

export default { render, ...model };

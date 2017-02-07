import { Graphics } from 'pixi.js';

const color = 0x009100;

const ground = new Graphics();

ground.drawRect(0, 0, 32, 32);
ground.startFill(color);
ground.endFill();

export { color, ground };

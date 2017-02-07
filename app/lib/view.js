import * as player from './player.js';
import map from './map.js';
import { Container } from 'pixi.js';

const container = new Container();

function render() {
  container.addChild(player.render());
  container.addChild(map.render());
  return container;
}

export { container, render };

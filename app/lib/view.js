import player from './player.js';
import map from './map.js';
import { Container } from 'pixi.js';

const container = new Container();

function render() {
  container.addChild(map.render());
  container.addChild(player.render());
  return container;
}

export default { render };

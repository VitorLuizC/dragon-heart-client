import * as ground from './ground.js';
import { Container } from 'pixi.js';

// TODO:
//
// 1. Get map object. Using Player's location.
// 2. Render map object.
// 3. Watch map itens that move around and change their position.

/**
 * Render ground map and objects on map.
 */
function render() {
  var container = new Container();

  var map = ground.render(require('../../Resources/Locations/test.json').map);

  container.addChild(map);

  return container;
}

export default { render };

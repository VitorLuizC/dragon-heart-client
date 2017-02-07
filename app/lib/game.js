import resource from './resource.js';
import { size } from './position.js';
import { render } from './view.js';
import { CanvasRenderer, Container } from 'pixi.js';
import { getElement } from './html.js';

/**
 * @type {number}
 * AnimationFrame
 */
let animation = null;

/**
 * @type {Container}
 */
let view = null;

/**
 * @type {HTMLCanvasElement}
 * <canvas id="game"></canvas>
 */
const canvas = getElement('#game');

const renderer = new CanvasRenderer(size.width, size.height, {
  view: canvas,
  transparent: true
});

/**
 * Render view container.
 */
function draw() {
  renderer.render(view);
  animation = requestAnimationFrame(draw);
}

/**
 * Start game drawing.
 */
function start() {
  resource
    .load()
    .then(setup);

  function setup() {
    view = render();
    draw();
  }
}

/**
 * Stop game drawing.
 */
function stop() {
  cancelAnimationFrame(animation);
}

export { start, stop };

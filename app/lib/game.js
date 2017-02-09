import { CanvasRenderer } from 'pixi.js';
import { size } from './position.js';
import view from './view.js';
import { html } from './util.js';

/**
 * @type {number}
 * AnimationFrame
 */
var animation = null;

/**
 * @type {PIXI.Container}
 */
var stage = null;

/**
 * @type {HTMLCanvasElement}
 * <canvas id="game"></canvas>
 */
const canvas = html.getElement('#game');

const renderer = new CanvasRenderer(size.width, size.height, {
  view: canvas,
  transparent: true
});

/**
 * Render view container.
 */
function draw() {
  renderer.render(stage);
  animation = requestAnimationFrame(draw);
}

/**
 * Start game drawing.
 */
function start() {
  stage = view.render();
  requestAnimationFrame(draw);
}

/**
 * Stop game drawing.
 */
function stop() {
  cancelAnimationFrame(animation);
}

export default { start, stop };

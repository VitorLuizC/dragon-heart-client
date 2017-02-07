import { load } from './resource.js';
import { size } from './config.js';
import * as view from './view.js';
import { CanvasRenderer } from 'pixi.js';
import { getElement } from './html.js';

/**
 * @type {number}
 * AnimationFrame
 */
let animation = null;

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
  renderer.render(view.render());
  animation = requestAnimationFrame(draw);
}

/**
 * Start game drawing.
 */
function start() {
  load()
    .then(() => {
      draw();
    });
}

/**
 * Stop game drawing.
 */
function stop() {
  cancelAnimationFrame(animation);
}

export { start, stop };

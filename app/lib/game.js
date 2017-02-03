import * as config from './config.js';
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
const renderer = new CanvasRenderer(config.size.width, config.size.height, { view: canvas });

function draw() {
  // TODO: Draw only objects that appears on the view range
}

/**
 * Start game drawing.
 */
function start() {
  draw();
}

/**
 * Stop game drawing.
 */
function stop() {
  cancelAnimationFrame(animation);
}

export { start, stop };

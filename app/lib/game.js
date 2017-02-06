import { size } from './config.js';
import { CanvasRenderer, RenderTexture } from 'pixi.js';
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
  transparent: true,
  antialias: true
});

function draw() {
  // TODO: Render the view that contains game things
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

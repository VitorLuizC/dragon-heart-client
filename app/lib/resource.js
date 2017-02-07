import { loader } from 'pixi.js';

var cache = loader.resources;

/**
 * Load all resources and set them on cache.
 */
function load() {
  return new Promise((resolve, reject) => {
    try {
      loader
        .add('grass', 'resource/grass.png')
        .load(setup);
    } catch (err) {
      reject(err);
    }

    function setup() {
      cache = loader.resources;
      resolve();
    }
  });
}

export default { load, cache };

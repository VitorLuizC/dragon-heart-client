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
        .load(() => {
          cache = loader.resources;
          resolve();
        });
    } catch (err) {
      reject(err);
    }
  });
}

export default { load, cache };

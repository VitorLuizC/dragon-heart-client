import { loader } from 'pixi.js';

var resources = loader.resources;

/**
 * Load all resources and set them on cache.
 */
function load() {
  return new Promise((resolve, reject) => {
    try {
      loader
        .add('person', 'resource/person.png')
        .load((x, y) => {
          console.log(x, y);
          resources = loader.resources;
          resolve();
        });
    } catch (err) {
      reject(err);
    }
  });
}

export { load, resources };
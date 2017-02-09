import './theme/default.styl';
import './ui/view.pug';
import resource from './lib/resource.js';
import game from './lib/game.js';

resource
  .load()
  .then(game.start);

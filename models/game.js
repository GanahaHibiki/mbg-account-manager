const Base = require('./base');

class Game extends Base {
  constructor(props = 'game'){
    super(props);
  }
}

module.exports = new Game();
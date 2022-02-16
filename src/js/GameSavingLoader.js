import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value = data.then((res) => json(res)); // возвращается Promise!
    return new Promise((resolve) => resolve(new GameSaving(value)))
      .then((res) => res.save);
  }
}

export default GameSavingLoader;

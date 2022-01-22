import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    const data = read(); // возвращается Promise!
    const value = data.then((res) => json(res)); // возвращается Promise!
    return value;
  }
}

export default GameSavingLoader;

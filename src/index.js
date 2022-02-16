import GameSavingLoader from './js/GameSavingLoader';
import './css/style.css';

// TODO: write your code in app.js
GameSavingLoader.load()
  .then((saving) => console.log(saving));

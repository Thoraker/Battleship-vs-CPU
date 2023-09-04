import setBattleship from './setBattleship';
import setCarrier from './setCarrier';
import setCruiser from './setCruiser';
import setDestroyer from './setDestroyer';
import setSubmarine from './setSubmarine';

export default function setCpuShips(ships) {
  let randomIndex = 0;
  let RandomIsHorizontal = true;
  function setRandomParams() {
    randomIndex = Math.floor(Math.random() * 100);
    RandomIsHorizontal = Math.random() > 0.5;
  }
  setRandomParams();
  setCarrier(randomIndex, RandomIsHorizontal, ships);
  setRandomParams();
  setBattleship(randomIndex, RandomIsHorizontal, ships);
  setRandomParams();
  setCruiser(randomIndex, RandomIsHorizontal, ships);
  setRandomParams();
  setSubmarine(randomIndex, RandomIsHorizontal, ships);
  setRandomParams();
  setDestroyer(randomIndex, RandomIsHorizontal, ships);
  setRandomParams();
}

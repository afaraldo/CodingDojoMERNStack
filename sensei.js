import { Ninja } from './ninja.js';

class Sensei extends Ninja {
  constructor(name) {
    this.name = name;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom(){
    console.log("You only live once");
    super.drinkSake();
  }
}

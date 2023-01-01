class Ninja {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;
  }

  sayName(){
    console.log("Name: " + this.name);
  }

  showStats(){
    console.log("Name: " + this.name);
    console.log("Speed: " + this.speed);
    console.log("Strength: " + this.strength);
    console.log("Health: " + this.health);
  }

  drinkSake (){
    this.health += 10;
  }
}

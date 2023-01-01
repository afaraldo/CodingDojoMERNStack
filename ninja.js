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


class Sensei extends Ninja {
  constructor(name) {
    super(name,200);
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom(){
    console.log("You only live once");
    super.drinkSake();
  }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

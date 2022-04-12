class profile {
  constructor() {
    this.name = "LaunchX";
    this.author = "carlogilmar";
    this.travel = "Veracruz";
    this.favoritos = ["Sonora", "Chihuahua", "Chiapas"];
  }

  get getTravel() {
    return this.travel;
  }

  get getFav() {
    return `Mis lugares favoritos son ${this.favoritos}`;
  }
}

const perfil = new profile();

console.log("El perfil de " + perfil.name);
console.log("Su viaje es a " + perfil.getTravel);
console.log(perfil.getFav);

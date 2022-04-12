const profile = {
  name: "LaunchX",
  author: "carlogilmar",
  travel: "Veracruz",
  favoritos: ["Sonora", "Chihuahua", "Chiapas"],

  getTravel: function () {
    return this.travel;
  },

  getFav: function () {
    return `Mis lugares favoritos son ${this.favoritos}`;
  },
};

console.log("El perfil de " + profile.name);
console.log("Su viaje es a " + profile.getTravel());
console.log(profile.getFav());

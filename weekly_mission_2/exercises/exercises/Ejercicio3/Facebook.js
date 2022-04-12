class user {
  constructor() {
    this.name = "LaunchX";
    this.author = "carlogilmar";
    this.post = "JavaScript";
    this.biography = {
      name: "Carlo",
      age: 22,
    };
  }

  get getPost() {
    return this.post;
  }
  get getBio() {
    return `Mi nombre es ${this.biography.name} y tengo ${this.biography.age} años`;
  }
}

const usuario = new user();
console.log("El muro de " + usuario.name);
console.log("Mi mejor post fue sobre " + usuario.getPost);
console.log(usuario.getBio);

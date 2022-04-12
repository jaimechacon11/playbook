class user {
  constructor() {
    this.name = "LaunchX";
    this.author = "carlogilmar";
    this.language = "JavaScript";
    this.hastags_good = 100;
    this.hastags_bad = 10;
    this.trending_topics = 199;
  }

  get gethastags() {
    return this.hastags_bad + this.hastags_good;
  }

  get getTrending() {
    return `${this.name} tiene ${this.trending_topics} publicados por ${this.author}`;
  }
}

const usuario = new user();

console.log(`Nombre del muro: ` + usuario.name);
console.log(`Los hastags que contiene son: ` + usuario.gethastags);
console.log(usuario.getTrending);

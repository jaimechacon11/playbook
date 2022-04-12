const user = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  hastags_good: 100,
  hastags_bad: 10,
  trending_topics: 199,

  gethastags: function () {
    return this.hastags_bad + this.hastags_good;
  },

  getTrending: function () {
    return `${this.name} tiene ${this.trending_topics} publicados por ${this.author}`;
  },
};

console.log(`Nombre del muro: `+user.name);
console.log(`Los hastags que contiene son: `+user.gethastags());
console.log(user.getTrending());


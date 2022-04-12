const user = {
  name: "LaunchX",
  author: "carlogilmar",
  post: "JavaScript",
  biography: {
      name: "Carlo",
      age: 22
  },

  getPost: function(){
    return this.post;
  },
  getBio: function(){
      return `Mi nombre es ${this.biography.name} y tengo ${this.biography.age} años`
  }
};

console.log("El muro de "+user.name);
console.log("Mi mejor post fue sobre "+user.getPost());
console.log(user.getBio());

const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

/*
    Sobre esta lista, realiza lo siguiente:

    1.Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

    2.Imprime el stack de cada explorer, usa FOR EACH

    3.Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

    4.Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

    5.Busca el primer explorer que sea de la CDMX, usa FIND

    6.Obtén la suma de todos los exercises_completed, usa REDUCE

    7.Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

    8.Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
*/

//Parte 1
console.log("Parte #1");
explorers.forEach((n)=>console.log(n.name));
console.log("\n");

//Parte 2
console.log("Parte #2");
explorers.forEach((n)=>console.log(n.stack));
console.log("\n");

//Parte 3
console.log("Parte #3");
const aux = explorers.map((n)=>(n.stack));
console.log(aux);
console.log("\n");

//Parte 4
console.log("Parte #4");
const aux1 = explorers.filter((n)=>(n.stack.includes("js")));
console.log(aux1);
console.log("\n");

//Parte 5
console.log("Parte #5");
const aux2 = explorers.find((n)=>(n.city==="CDMX"));
console.log(aux2);
console.log("\n");

//Parte 6
console.log("Parte #6");
const aux3 = explorers.reduce((acc,n)=>acc+n.exercises_completed,0);
console.log(aux3);
console.log("\n");

//Parte 7
console.log("Parte #7");
const aux4 = explorers.some((n)=>n.missions.frontend.exercisesFinished===true);
console.log(aux4);
console.log("\n");

//Parte 8
console.log("Parte #8");
const aux5 = explorers.every((n)=>n.missions.frontend.isFinished===true);
console.log(aux5);
console.log("\n");
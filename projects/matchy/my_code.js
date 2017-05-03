var animal = {};

animal.species = "horse";
animal["name"] = "Slippers";
animal["noises"] = [];

console.log(animal);

var noises = [];

noises[0] = "whinny";

noises.push("ffffllfff");

noises.unshift("heeyeeyee");

noises[noises.length] = "glomp-glomp";

console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

animal["noises"] = noises;

animal["noises"].push("neigh");

console.log(animal);

var animals = [];

animals.push(animal);

console.log(animals);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);

var falcon = {
    species: "falcon",
    name: "Mortimer",
    noises: ["gheeyee", "caw", "whoosh"]
};

var thundercat = {
    species: 'thundercat',
    name: 'Liono',
    noises: ['Thunder', 'Thunder', 'Thundercats', 'Ho!']
};

animals.push(thundercat, falcon);

console.log(animals);

console.log(animals.length);

var friends = [];

function randomAnimalAdder(animals) {
    var min = 0;
    var max = animals.length-1;
    return friends.push(animals[Math.floor(Math.random() * (max-min) + min)].name);
}

randomAnimalAdder(animals);

console.log(friends);

animals[0].friends = friends;

console.log(animals);

function search(name){
   for(var i = 0; i < animals.length; i++){
        if (animals[i]["name"] === name){
        return animals[i];
        }
   }  return null;
}

function edit(name, object){
    for(var i = 0; i < animals.length; i++){
        if (animals[i]["name"] === name){
         animals[i] = object;
        }
   }  
   
}

function remove(name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i]["name"] === name){
         animals.splice(animals[i], 1);
        }
   }  
   
}

function create(object) {
        if (object["name"].length > 0);
        if (object["species"].length > 0);
        
       for(var i = 0; i < animals.length; i++){
        if (animals[i]["name"] !== object["name"]);}
    
       animals.push(object);
                    
       }
//Below: notes from class 
//function(){
//   //a function literal
// }
// jimmy = {age: 25, name:"Jimmy John", growOlder: function, scared: false};
// sally = {age: 5, name:"Sally Jo", scare: function};

// jimmy.growOlder = function() {
//   this.age = this..age +1;
//   return "Wow, I'm now " + this.age;
// }

// jimmy.house = {'square-foot': 10, color: purple};
// jimmy.house.mice = ["Bob","Janet"];
// jimmy.house.mice[1]= {name: "janet", species: "rat"}

// so... jimmy.house.mice[1].species should = "rat"

// sally.scare = function(person){
//   person.scare = true;
//   return "I scared" + person.name;
// }

var jen = {
  age: 29,
  name: "JMills",
  hobbies: ['biking', 'pony riding', 'being cool'],
  pets: ['Jake','George'],
  significantOther: true,
  career: "coder-hopeful",
  location: "Greenville, SC",
  locationChange = function(newLocation){
    this.location = newLocation;
    return "Wow, now I'm in " + newLocation + "! Cool man!";
  }
};

var luke = {
  age: 31,
  name: "Luke B",
  hobbies: ['reading','watching tv','yodeling'],
  pets: ['Boots','Mittens'],
  significantOther: true,
  career: "super hero",
  location: "Dansville, NY", 
  petTalk = function(x){
    if(this.pets.length == x.pets.length){
      return "What a coincidence! We both have the same number of pets."
    } else{
      return "That's cool. We can be different and still be friends, dude."
    }
  },
  luke.changeRelationshipSatus = function(person){
    person.significantOther = false;
    return "Damn! I'm so good looking! " +person.name + " is trying to get a piece of this!";
  }
};

var apartment = {
  squareFeet: 350,
  numberOfRooms: 4,
  neighbors: ['Jeff','janet','Bob','Sally'],
  location: 'Avon,NY',
  available: true,
  moveIn = function(name){
    apartment.renter = name;
    apartment.available = false;
    return "Awesome! " + apartment.renter +" is now our tennant.";
  },
  moveOut = function() {
  apartment.renter = '';
  apartment.available = true;
  return "Interested in renting?";
  }
}; 
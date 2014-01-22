function(){

}
jimmy = {age: 25, name:"Jimmy John", growOlder: function, scared: false};
sally = {age: 5, name:"Sally Jo", scare: function};

jimmy.growOlder = function() {
  this.age = this..age +1;
  return "Wow, I'm now " + this.age;
}

jimmy.house = {'square-foot': 10, color: purple};
jimmy.house.mice = ["Bob","Janet"];
jimmy.house.mice[1]= {name: "janet", species: "rat"}

so... jimmy.house.mice[1].species should = "rat"

sally.scare = function(person){
  person.scare = true;
  return "I scared" + person.name;
}
function fullName(first, middle, last){
  return first + ' ' + middle[0] + '. ' + last;
}
//calling function
fullName('Jennifer', 'Marie', 'Miller') 
"Jennifer M. Miller" //what's returned in console


//example using global variable
var lunch = "pb and j";

function fullName(first, middle, last){
  return first + ' ' + middle[0] + '. ' + last + " loves " + lunch;
}

fullName('Jennifer', 'Marie', 'Miller')
"Jennifer M. Miller loves pb and j" //what's returned in console


//another example. Looking at parameters and arguements
var lunch = "cheese";

function fullName(first, middle, last, altFood){
  if(altFood !== ''){
    return first + ' ' + middle[0] + '. ' + last + " loves " + altFood;
  } else {
    return first + ' ' + middle[0] + '. ' + last + " loves " + lunch;
  }
};

//example calculating cost of a pizza for a highly disfunctional pizza shop
var prices = {
  pepperoni: 5.50,
  squid: 1,
  tomatoes: 0,
  cheese: 100.00,
  anchovies: -5
};

function calcPrice(toppingOne, toppingTwo, toppingThree) {
  var price = prices[toppingOne] + prices[toppingTwo] + prices[toppingThree];
  return price;
};
 calcPrice('squid','anchovies','cheese');
 96
 calcPrice('cheese','cheese');
 NaN
 //would need to write some sort of check 


//Turning an array of objects into some meaningful html
var students = [
  {
    name:"Austin",
    age: 73,
    superPower: 'Eating soup'
  },
  {
    name: "Matt",
    age: 5,
    superPower: 'Sleeping'
  },
  {
    name: "Alf",
    age: 32,
    superPower: 'Eating cats'
  }
]

//To get all names:
students.forEach(function(student,index){
  console.log(student.name);
})

//Can loop over whole array to find something
students.forEach(function(student,index){
  if (student.name == 'Alf'){
    console.log('Guys I found Alf');
  } else{
    console.log('You\'re not Alf!');
  }
})

//Creates a new div for every student and adds that div into the page. (Can pre-style student-container in CSS page)
students.forEach(function(student,index){
  var newDiv = $('div class ="student-container">' + student.name + '</div>')
  $('body').append(newDiv);

   var ageDiv = $('div class ="student-age">' + student.age + '</div>')
  $('body').append(ageDiv);
})




















var person = {
  firstName: 'Godfrey',
  lastName: 'Owidi',
  hobby: 'Hiking'
};
console.log(person);

var fullName = "The person's name is: " + 'Godfrey' + ' Owidi';
console.log(fullName);

// setting a new property using dot annotation
person.job = 'Fullstack Web Developer';

var job = "The person's current job is: " + 'Fullstack Web Developer';
console.log(job);

person.previousJob = 'Actuary';
var previousJob = "The person's previous job is: " + 'Actuary';
console.log(previousJob);

console.log(person);

var myCar = {
  make: 'Nissan',
  model: 'Morano',
  year: '2014'
};
console.log(myCar);

// setting property values using brackets
myCar['owner'] = 'Godfrey Owidi';
var carOwner = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'];
console.log(carOwner);

myCar['color'] = 'Tan';
var fullCarInfo = 'My full car info: ' + 'make: ' + ' ' + myCar['make'] + ' ' + 'model: ' + ' ' + myCar['model'] + 'year: ' + ' ' + myCar['year'] + 'owner: ' + ' ' + myCar['owner'] + 'color: ' + ' ' + myCar['color'];
console.log(fullCarInfo);

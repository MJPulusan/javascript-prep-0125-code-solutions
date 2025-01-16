const person = {
  firstName: 'Michael',
  lastName: 'Pulusan',
  hobby: 'Cycling',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

//dot notation
person.job = 'Batman';
console.log("The person's current job is:", person.job);

//bracket notation
person['previousJob'] = 'Avenger';
console.log("The person's previous job is:", person['previousJob']);

//object literal syntax
console.log('The complete person object:', person);

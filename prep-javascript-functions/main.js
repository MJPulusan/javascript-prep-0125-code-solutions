//addTwoNumbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResult = addTwoNumbers(5, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

//convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('It is', +minutes + ' minutes.'); //120

//getGreeting
function getGreeting(name) {
  return name;
}
const greeting = getGreeting('Happy New Year!');
console.log(greeting);

//addAndMultiplyBy5
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(10, 5); //75
console.log('The sum of two numbers times 5, is equal to:', sumTimesFive);

//multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(35, 10); //70
console.log(
  'The product of two numbers divided by 5, is equal to:',
  productDividedByFive
);

//subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log('the difference of two numbers is:', difference);

//getCircleCircumference
function getCircleCircumference(radius) {
  return radius * 2 * 3.14592615;
}
const circumference = getCircleCircumference(5); //31.415
console.log('The full circumference of the circle is:', circumference);

//getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Michael', 'Pulusan');
console.log('fullName is:', fullName);

//cube
function cube(number) {
  return number * number * number;
}
const cubed = cube(5); //125
console.log('The cube value of the number is:', cubed);

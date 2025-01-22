//multiplication
const number1 = 2;
const number2 = 14;
const product = number1 * number2;
console.log('value of the product is = ', product);
console.log('typeof product:', typeof product);

//subtraction
const charge = 10.5;
const payment = 5;
const amountRemaining = charge - payment;
console.log('value of amountRemaining = ', amountRemaining);
console.log('typeof amountRemaining:', typeof amountRemaining);

//average grade
const test = 75;
const assignments = 90;
const final = 80;
let grade = (test + assignments + final) / 3;
console.log('value of grade = ', grade);
console.log('typeof grade:', typeof grade);

//fullName
const firstName = 'Michael John';
const lastName = 'Pulusan';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

//Acidic value
const pH = 4;
const isAcidic = pH < 7; //true
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

//number of Soldiers
const numberOfSoldiers = 5;
const isSparta = numberOfSoldiers === 300; //false
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

//nickName
let nickname = fullName;
nickname += ' is the GOAT';
console.log('value of nickname:', nickname);
console.log('typeof nickname:', typeof nickname);

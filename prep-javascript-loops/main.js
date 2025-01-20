//whileLoop1
console.log('whileLoop1 output:');
function whileLoop1() {
  const arrayToReturn = [];
  let index = 0;

  while (index < 10) {
    arrayToReturn.push(index);
    index++;
  }
  return arrayToReturn;
}
const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

//whileLoop2
console.log('whileLoop2 output:');
function whileLoop2() {
  const arrayToReturn = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];
  let index = 0;

  while (index < 0) {
    arrayToReturn.push(index);
    index++;
  }

  return arrayToReturn;
}
const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

// //forLoop1
console.log('forLoop1 output:');
function forLoop1() {
  const arrayToReturn = [];

  for (let index = 0; index < 9; index++) {
    arrayToReturn.push(index);
  }
  return arrayToReturn;
}
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

//forLoop2
console.log('forLoop2:');
function forLoop2() {
  const arrayToReturn = [];
  const arrayToReturnResult = arrayToReturn.length;

  for (let index = 100; index >= 0; index--) {
    console.log('time till explosion:' + ' ' + index + '!');
  }
}
forLoop2();

//for...in loop1
console.log('for In Loop 1 output:');
function forInLoop1(object) {
  const arrayToReturn = ['name', 'age', 'hobby', 'invention'];

  for (const key in object) {
    arrayToReturn.push(object[key]);
  }
  return arrayToReturn;
}
const forInLoop1Result = forInLoop1();
console.log(forInLoop1Result);

//for...in Loop2
console.log('for In Loop 2 output:');
function forInLoop2(object) {
  const arrayToReturn = [
    'Ada LoveLace',
    'classic',
    'computation',
    'analytical engine',
  ];

  for (const key in object) {
    arrayToReturn.push(object[key]);
  }
  return arrayToReturn;
}
const forInLoop2Result = forInLoop2();
console.log(forInLoop2Result);

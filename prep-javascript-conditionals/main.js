/* Your JS goes in this file */
function isAdult(age) {
  const isAdultResult = 25;
  console.log('Is age 18 or above?', isAdultResult);

  if (isAdultResult >= 18) {
    console.log(Boolean(1));
  } else if (isAdultResult < 18) {
    console.log(Boolean(0));
  }
}
isAdult();

//Did Student Pass
function didStudentPass(score) {
  const didStudentPassResult = 85;
  console.log('Is the score 70 or above?', didStudentPassResult);

  if (didStudentPassResult >= 70) {
    console.log(Boolean(1));
  } else if (didStudentPassResult < 70) {
    console.log(Boolean(0));
  }
}
didStudentPass();

//gradeCalculator
function gradeCalculator(score) {
  const gradeCalculatorResult = 102;
  console.log('Your grade is:', gradeCalculatorResult);

  if (gradeCalculatorResult < 60) {
    console.log('F');
  } else if (gradeCalculatorResult < 70 && gradeCalculatorResult > 60) {
    console.log('D');
  } else if (gradeCalculatorResult < 80 && gradeCalculatorResult > 70) {
    console.log('C');
  } else if (gradeCalculatorResult < 90 && gradeCalculatorResult > 80) {
    console.log('B');
  } else if (gradeCalculatorResult < 100 && gradeCalculatorResult > 90) {
    console.log('A');
  } else {
    console.log('A++');
  }
}
gradeCalculator();

//seasonMessenger

function seasonMessenger(season) {
  const seasonMessengerResult = 'winter';
  console.log('What is the weather today?', seasonMessengerResult);

  if (seasonMessengerResult === 'summer') {
    console.log('it is hot today.');
  } else if (seasonMessengerResult === 'spring') {
    console.log('the flowers are blooming.');
  } else if (seasonMessengerResult === 'autumn') {
    console.log('the leaves are changing colors.');
  } else if (seasonMessengerResult === 'winter') {
    console.log('it is cold today.');
  } else {
    console.log('please enter a valid season.');
  }
}
seasonMessenger();

//dayDetector
function dayDetector(dayOfTheWeek) {
  const dayDetectorResult = 'sunday';
  console.log('What day is today?', dayDetectorResult);

  if (
    dayDetectorResult === 'Saturday' ||
    dayDetectorResult === 'Sunday' ||
    dayDetectorResult === 'saturday' ||
    dayDetectorResult === 'sunday'
  ) {
    console.log('have a good weekend!');
  } else {
    console.log('It is a weekday!');
  }
}
dayDetector();

/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
// for (num = 1; num <= nums.length; num++) {
//   results.push(num * 2);
// }
for (let num of nums) {
  results.push(num * 2);
}
console.log('Loop results:', results);

// Using map()
const multiplyByTwo = function (num) {
  return num * 2;
};
const mapResults = nums.map(multiplyByTwo);
console.log('mapLong results:', mapResults);

// Simplified w/ map()
const mapShortResults = nums.map(function (num) {
  return num * 2;
});
console.log('mapShort results:', mapShortResults);

// Simplified w/ map() + arrow function
const mapArrowResults = nums.map(num => num * 2);
console.log('mapArrow results:', mapArrowResults);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript',
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML',
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS',
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const studentsWithIdsObj = students.map(({ name, id }) => ({
  name: name,
  id: id,
}));
console.log(studentsWithIdsObj);

const studentsAddAge = students.map(student => ({
  ...student,
  age: 23,
  age: 26,
  age: 27,
}));
console.log(studentsAddAge);

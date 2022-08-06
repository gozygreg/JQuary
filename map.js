
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop


// Using map()


// Simplified w/ map()


// Simplfied w/ map() + arrow function


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'JavaScript', yrsExperience: 1 },
      { name: 'HTML', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'JavaScript', yrsExperience: 1 },
      { name: 'HTML', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'JavaScript', yrsExperience: 1 },
      { name: 'HTML', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
];

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
const qualifiedCandidate = students.map()
console.log(candidates);
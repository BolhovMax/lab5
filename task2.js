const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  let topScorers = [];
  for (let student of students) {
    if (student.score > 80) {
      topScorers.push(student.name);
    }
  }
  return topScorers;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
    let totalAge = 0;
    for (let student of students) {
      totalAge += student.age;
    }
    return totalAge / students.length;
  }

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student);
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  let updatedStudents = [];
  for (let student of students) {
    if (student.name !== name) {
      updatedStudents.push(student);
    }
  }
  return updatedStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };
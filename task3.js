// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  for (let person of people) {
    if (person.name === name) {
      return person;
    }
  }
  return null;
}

module.exports = findByName;
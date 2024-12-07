//Функція filterAdults приймає масив об'єктів, що представлє людей (з полями name та age),
//вам потрібно написати код, який повертає новий масив, який містить лише тих людей, чий вік більше або дорівнює 18.
function filterAdults(people) {
  let adults = [];
  for (let person of people) {
    if (person.age >= 18) {
      adults.push(person);
    }
  }
  return adults;
}

module.exports = filterAdults;
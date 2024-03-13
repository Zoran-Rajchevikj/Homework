//5. Вкупен просек на студенти чиешто име завршува на буквата а, и на сите останати

const {studenti} = require("./Tasks");

const studentsNameThatEndsWithAAverage = studenti.filter(student=> student.ime.endsWith("a"))
    .reduce((acc,curr)=> acc + curr.prosek,0)/studenti.filter(student=> student.ime.endsWith("a")).length;

const allOtherStudents = studenti.filter(student=> !student.ime.endsWith("a"))
    .reduce((acc,curr)=> acc + curr.prosek,0)/studenti.filter(student=> !student.ime.endsWith("a")).length;

console.log(studentsNameThatEndsWithAAverage);

console.log(allOtherStudents);
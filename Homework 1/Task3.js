//3. Првите 3 студенти кои имаат имиња од 5 карактери(букви), подредени по просек.

const {studenti} = require("./Tasks");

const students = studenti.filter(student => student.ime.length === 5 )
    .slice(0,3);

console.log(students.sort((a,b)=> a.prosek - b.prosek));
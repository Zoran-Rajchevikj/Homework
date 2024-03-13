//1. Сите студенти од Скопје чие име завршува на буквата а и имаат просек над 7, подредени по име (растечки)

const {studenti} = require("./Tasks");

const students =studenti.filter(student=> student.grad==="Skopje" && student.ime.endsWith("a") &&student.prosek>7)
    .sort((a,b)=> a.ime.localeCompare(b.ime));

console.log(students);

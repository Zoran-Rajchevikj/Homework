//2. Сите студенти кои имаат просек над 9, не се од Скопје, подредени по просек, но опаѓачки

const {studenti} = require("./Tasks");

const students = studenti.filter(student => student.prosek>9 && student.grad!=="Skopje")
    .sort((a,b)=> b.prosek - a.prosek);

console.log(students );
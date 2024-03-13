//4. Градови подредени според групната висина на просек на студентите од нив.

const {studenti} = require("./Tasks");

const gruoupedByCity = {}

for (let student of studenti){
    if(gruoupedByCity[student.grad]){
        gruoupedByCity[student.grad].push(student);
    }else {
        gruoupedByCity[student.grad]= [student];
    }
}
const groupedByAverageGrade = [];

for (let grad in gruoupedByCity){
    const average = gruoupedByCity[grad].reduce((sum,student)=> sum+student.prosek,0)/gruoupedByCity[grad].length;
    groupedByAverageGrade.push({grad , prosek:average});
}
console.log(groupedByAverageGrade.sort((a,b)=> b.prosek - a.prosek));
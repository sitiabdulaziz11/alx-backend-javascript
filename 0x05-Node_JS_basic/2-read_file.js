const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const dataLine = fs.readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  const numStudent = {};
  const dbdataname = dataLine[0].split(',');
  const studentFild = dbdataname.slice(0, dbdataname.length - 1);

  for (const line of dataLine.slice(1)) {
    const studentInfo = line.split(',');
    const studentvalue = studentInfo.slice(0, studentInfo.length - 1);
    const field = studentInfo[studentInfo.length - 1];
    if (!Object.keys(numStudent).includes(field)) {
      numStudent[field] = [];
    }
    const getStudent = studentFild.map((item, index) => [item, studentvalue[index]]);
    numStudent[field].push(Object.fromEntries(getStudent));
  }

  const totalStudent = Object.values(numStudent).reduce(
    (acc, val) => (acc || []).length + val.length,
  );

  console.log(`Number of students: ${totalStudent}`);
  for (const [key, value] of Object.entries(numStudent)) {
    const student = value.map((stud) => stud.firstname).join(', ');
    console.log(`Number of students in ${key}: ${value.length}. List: ${student}`);
  }
}
module.exports = countStudents;

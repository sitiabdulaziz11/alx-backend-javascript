const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const numStudent = {};
      const dbFields = fileLines[0].split(',');
      const studentFields = dbFields.slice(0, dbFields.length - 1);

      for (const line of fileLines.slice(1)) {
        const studentInfo = line.split(',');
        const studentValue = studentInfo.slice(0, studentInfo.length - 1);
        const field = studentInfo[studentInfo.length - 1];
        if (!Object.keys(numStudent).includes(field)) {
          numStudent[field] = [];
        }
        const getStudent = studentFields.map((item, index) => [item, studentValue[index]]);
        numStudent[field].push(Object.fromEntries(getStudent));
      }

      const totalStudent = Object.values(numStudent).reduce(
        (acc, val) => (acc || []).length + val.length,
      );
      console.log(`Number of students: ${totalStudent}`);
      for (const [key, value] of Object.entries(numStudent)) {
        const studentName = value.map((item) => item.firstname).join(', ');
        console.log(`Number of students in ${key}: ${value.length}. List: ${studentName}`);
      }
      resolve(true);
    }
  });
});
module.exports = countStudents;

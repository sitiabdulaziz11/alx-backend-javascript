import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const numStudent = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentFields = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

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
        resolve(numStudent);
      }
    });
  }
});
export default readDatabase;
module.exports = readDatabase;

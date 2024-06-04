const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const dbfile = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const outPutInfo = [];
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
        outPutInfo.push(`Number of students: ${totalStudent}`);
        for (const [key, value] of Object.entries(numStudent)) {
          outPutInfo.push([
            `Number of students in ${key}: ${value.length}.`, 'List:', value.map((item) => item.firstname).join(', ')].join(' '));
        }
        resolve(outPutInfo.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseMessage = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseMessage.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseMessage));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const outPutInfo = ['This is the list of our students'];

      countStudents(dbfile)
        .then((report) => {
          outPutInfo.push(report);
          const responseMessage = outPutInfo.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseMessage.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseMessage));
        })
        .catch((err) => {
          outPutInfo.push(err instanceof Error ? err.message : err.toString());
          const responseMessage = outPutInfo.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseMessage.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseMessage));
        });
    },
  },
];
app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});
module.exports = countStudents;

const countStudents = require('./3-read_file_async');

// Call the countStudents function with the argument "database.csv"
countStudents("database.csv")
  .then(() => {
    // This block will be executed when the countStudents function resolves successfully
    console.log("Done!");
    
  })
  .catch((error) => {
    // This block will be executed if an error occurs during the execution of countStudents
    console.log(error);
  });
  console.log("After!"); // Move this line inside the .then() block
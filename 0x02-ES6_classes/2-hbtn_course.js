export default class HolbertonCourse {
  constructor(name, length, student) {
    this._name = name;
    this._length = length;
    this._student = student;
  }
  // Getter for name

  get name() {
    return this._name;
  }
  // setter for name

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // getter for length

  get length() {
    return this._length;
  }

  // setter for length
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }
  // getter for student

  get student() {
    return this._student;
  }

  // setter for student
  set student(newStudent) {
    if (!(newStudent instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!newStudent.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._student = newStudent;
  }
}

/**
 * Class called Holberton Course.
 */

export default class HolbertonCourse {
  // Implementation of HolbertonCourse class.
  
  constructor(name, length, student) {
    this.name = name;
    this.length = length;
    this.student = student;
  }
  // Getter for name

  get name() {
    return this._name;
  }
  // setter for name

  set name(item) {
    if (typeof item !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = item;
  }

  // getter for length

  get length() {
    return this._length;
  }

  // setter for length
  set length(item) {
    if (typeof item !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = item;
  }
  // getter for student

  get student() {
    return this._student;
  }

  // setter for student
  set student(item) {
    if (!(item instanceof Array)) {
      throw new TypeError('Students must be an array of strings');

      // if (!Array.isArray(student)) throw new TypeError('students type must be an Array');
    }
    if (!item.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._student = item;
  }
}

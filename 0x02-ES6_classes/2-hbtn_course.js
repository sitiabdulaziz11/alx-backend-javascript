/**
 * Class called Holberton Course.
 */

export default class HolbertonCourse {
  /**
   * Implementation of HolbertonCourse class.
   * @param {String} name - The name of the course.
   * @param {Number} length - the length of course (in months).
   * @param {String[]} students - The names of students in the course.
   */

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  get students() {
    return this._students;
  }

  // setter for student
  set students(item) {
    if (!(item instanceof Array)) {
      throw new TypeError('Students must be an array of strings');

      // if (!Array.isArray(student)) throw new TypeError('students type must be an Array');
    }
    if (!item.every((students) => typeof students === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = item;
  }
}

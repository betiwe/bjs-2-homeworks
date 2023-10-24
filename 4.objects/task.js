function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if ('marks' in this) {
    this.marks.push(...marks)
  }
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }

  let count = 0;
  for (let grades of this.marks) {
    count += grades;
  }
  return count / this.marks.length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  Student.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marks) {
  if ('marks' in Student) {
    this.marks = marks;
  }
};

Student.prototype.getAverage = function () {
  if(!this.marks || this.marks.length === 0) {
    return 0;
  } else {
    let count = 0;
    for (let grades of this.marks) {
      count += grades;
    }
    return count / this.marks.length;
  }
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
};



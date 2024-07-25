function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
};

let student1 = new Student('Anna', 'female', 36);
let student2 = new Student('Ivan', 'male', 22);
let student3 = new Student('Julia', 'female', 30);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if('marks' in this) this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  return (!('marks' in this) || (this.marks.length === 0)) ? 0 :
  (this.marks.reduce((sum, item) => sum + item)) / this.marks.length; 
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

class Student{
    constructor(studentId,studentName,schoolName){
        this.id = studentId;
        this.name =  studentName;
        this.school = schoolName; 
    }
}

//multiple objects can be created:
const student1 = new Student(1,"Shahid","SMSC");//object
const student2 = new Student(2,"Kuddus","JCPSC");

console.log(student1,student2);

//taking a single property:
console.log(student1.school,student2.school);
console.log(student1.name,student2.name);
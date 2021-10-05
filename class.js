/* class Student{

}

const student1 = new Student();
const student2 = new Student();

console.log(student1, student2); */

/* ES6 Object */
class Student{
    constructor(sId, sName){
        // this.id = 1;
        // this.name = "Bappy"
        this.id = sId;
        this.name = sName;
        this.school = "Ideal School"
    }
}
const student1 = new Student(1, "Bappy");
const student2 = new Student(2, "Tanim");
const student3 = new Student(3, "Ovi");

console.log(student1, student2);
console.log(student1.name, student2.name);
console.log(student3);
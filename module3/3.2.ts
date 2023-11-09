// inheritance in OOP
class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleep(numberOfHours: number) {
        console.log(`${this.name} will sleep ${numberOfHours}`);
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}
const student1 = new Student("Mr. student", 20, "Uganda");
student1.getSleep(8)
class Teacher extends Parent {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(numOfClass: number) {
        console.log(`${this.name} will take ${numOfClass}`);
    }
}
const teacher = new Teacher("Mr. teacher", 40, "Uganda", "professor");
teacher.getSleep(6)
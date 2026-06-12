class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(ssn: string, firstName: string, lastName: string, age: number) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    set age1(age1: number) {
        if (age1 < 0 || age1 > 150) {
            throw Error("Invalid age")
        }
        this.age = age1;
    }

    get age1() {
        return this.age
    }

}

let long = new Person("3213", "Xuan", "Long", 23)

let checkAge = long.age1;
long.age1 = 96;
console.log(">> check : ", long)

// kế thừa 
class Employee extends Person {
    private jobTitle: string;
    constructor(
        ssn: string,
        firstName: string,
        lastname: string,
        age: number,
        jobTitle: string
    ) {
        super(ssn, firstName, lastname, age);
        this.jobTitle = jobTitle;
    }
}

let staff = new Employee("1234", "Xuan", "Long", 34, "software developer");

console.log(">> Check  : ", staff);

// trừu tượng : quy địch 1 đói tượng ddwwe các class khác có thể kế thừa 
abstract class Employee1 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    abstract getSalary(): number;

    get fullName(): string {
        return `${this.firstName}  ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month`
    }

}

class FullTime extends Employee1 {
    private salary: number;
    constructor(firstName: string, lastName: string, salary: number) {
        super(firstName, lastName)
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary
    }
}

const test92 = new FullTime("Xuan", "Long", 10000)
console.log(">>>Check salary : ", test92.getSalary())



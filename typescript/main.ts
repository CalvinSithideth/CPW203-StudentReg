
/**
 * Represents a CPTC Student
 */
class Student {
    
    firstName:string;
    lastName:string;
    dateOfBirth:Date;

    constructor() {
        
    }
}

// test code
let testStu:Student = new Student();
testStu.firstName = "Joe";
testStu.lastName = "Ortiz";
testStu.dateOfBirth = new Date(1980, 3, 1); // March 1st, 1980


window.onload = function() {
    let regBtn = <HTMLElement> document.querySelector("main > button");
    regBtn.onclick = registerStudent;
}

function registerStudent() {
    let nextStudent:Student = getStudent();
    displayStudent(nextStudent);
}

function getStudent():Student {
    let s = new Student();
    s.firstName = (<HTMLInputElement> document.getElementById("first-name")).value;
    s.lastName = (<HTMLInputElement> document.getElementById("last-name")).value;
    //TODO: Get date of birth

    return s;
}

function displayStudent(stu:Student):void {
    alert(stu.firstName + " " + stu.lastName);
}
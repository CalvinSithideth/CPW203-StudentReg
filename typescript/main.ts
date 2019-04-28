
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
// Create a new instance, creating an object,
// instantiating an object
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

/**
 * Gets user input from the form and
 * wraps it in a student object
 */
function getStudent():Student {
    let s = new Student();
    s.firstName = (<HTMLInputElement> document.getElementById("first-name")).value;
    s.lastName = (<HTMLInputElement> document.getElementById("last-name")).value;
    //TODO: Get date of birth

    return s;
}

function displayStudent(stu:Student):void {

    // <li> </li>
    let studentLI:HTMLLIElement = document.createElement("li");
    // <li>J. Doe</li>
    studentLI.innerText = stu.firstName + " " + stu.lastName;

    // remove list when clicked
    studentLI.onclick = function(){
        let agree = confirm("Are you sure you want to delete?");
        if (agree) {
            let currItem = <HTMLLIElement>this;
            currItem.remove();    
        }
    }

    // getting <ul> and appending the new <li>
    let list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);



}

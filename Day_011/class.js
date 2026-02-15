class student
{
    assignment()
    {
        console.log("student submit the assignment");
    }

    attendence()
    {
        console.log("Student have to attend");
    }
    coursess()
    {
        console.log("student enroll ia a course");
        
    }
}

// let ankit =new student()
// ankit.assignment()
// ankit.attendence()

let student1= new student()
student1.name="nanna"
student1.role="SDET"

let student2= new student()
student2.name="summa"
student2.role="QA Engineer"

console.log(student1.name+" "+student2.role);



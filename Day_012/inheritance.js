class student1
{
    register()
    {
        console.log("Submit the fee on time stu_1");
        
    }
}

class student2 extends student1
{
    register()
    {
        console.log("Submit the fee on time stu_2");
        
    }

}

let stu= new student1()

stu.register()

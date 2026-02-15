class emp
{
    login()
    {
        console.log("Employhave to login every monday");
    }    
}

class QA extends emp
{
    writeTestCase()
    {
        console.log("QA needs to write TC everyday");
    }
}

let obj1=new QA()
obj1.login()
obj1.writeTestCase()

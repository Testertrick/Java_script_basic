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

class Automation extends QA
{
    Script()
    {
        console.log("Make test case script according to the test cases");
    }

}

let obj1=new Automation()
obj1.login()
obj1.writeTestCase()
obj1.Script()
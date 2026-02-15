// higer order function-- funcation can accept another funcation as an argument
// call back function- function that is passed as an agrument to another function and execute later

function sample(name,callback)
{
    console.log("Executing Test>>>",name);

    callback()

    console.log("Final result>>>",name)
    
}
sample("sakshi",function() {
  
  console.log("checking login functionality");
  
})
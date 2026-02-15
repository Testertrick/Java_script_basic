
// use arrow function with callback

function sample(name,callback)
{
    console.log("Executing Test>>>",name);

    callback()

    console.log("Final result>>>",name)
    
}
sample("sakshi",function() {
  
  console.log("checking login functionality");
  
})
let mark_grad=80
let mark_10=50
let mark_12=75

if (mark_10>=70){
   
      if(mark_12>=70)
      {
             if (mark_grad>=80)
             {
                console.log("Passworded with good marks")
             }
             else
             {
                console.log("Not eligiable because of less marks in grad")
             }
      }
      else
      {
        console.log("Not eligiable because of less marks in 12th")
      }   

}
else
{
    console.log("Not eligiable because of less marks in 10th")
}
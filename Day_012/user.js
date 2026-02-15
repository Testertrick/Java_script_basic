class user
{
   useremail="sakhsi@gmail.com"
   #password="Sakshi@1708"        //private

   showcredential()
   {
      console.log('Credentials are ${this.usermail} and password id ${this.password}');
   }

}

let user1 = new user()
console.log(user1.useremail);
console.log(user1.password);

user1.showcredential()
class inventory
{
   constructor(itemName,quantity,price)
   {
    this.itemName=itemName
    this.quantity=quantity
    this.price=price 
   }

   customer_store()
   {
    this.name=itemName
    this.qun=quantity
    this.value=price     
   }
}

let inventory1=new inventory("Laptop",10,"$1200.50")
let inventory2= new inventory("Mobile",20,"$800.50")

console.log("Item Name: ",inventory1.itemName);
console.log("Quantity:  ",inventory1.quantity);
console.log("Price: ",inventory1.price);

console.log("-----------------------------------------------");


console.log("Item Name: ",inventory2.itemName);
console.log("Quantity: ",inventory2.quantity);
console.log("Price: ",inventory2.price);

import { appendFile,readFile } from "fs/promises";

async function checkKeywords(){
let app = "Playwright support API testing. While primarily known for its UI automation capabilities,Playwright provide a powerful and convenient APIRequestContext object that allows direct interaction with REST API's"

await appendFile("Demo.txt",app)
let add= await readFile("Demo.txt","utf8")

if(add.includes("API")&& add.includes("headless"))
{
  console.log("API and headless both found");
}
else
{
  console.log("Required keywords not found");
}
}
import { readFile } from "fs/promises";

console.log("Starting reading text file");

let text=await readFile("Demo.txt","utf8")

if(text.includes,"headless")
{
    console.log("Headless support confimed");
}
else
{
    console.log("Headless support missing");   
}


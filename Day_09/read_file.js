import {readFile} from "fs/promises"

console.log("Starting reading text file");

let data = await readFile("sample.txt","utf8") //file reading is async task

console.log("Data From text file", data);  
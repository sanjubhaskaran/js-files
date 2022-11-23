// console.log(process.arch);
// console.log(process.env);
// console.log(process.path);
// console.log(process.pid);
// console.log(process.ppid);
// console.log(module.arch);
// console.log(module.env);
// console.log(module.pid);
// console.log(module.ppid);

// core modules(files system and others), local modules(our own written modules), env modules(other developers)
//import a module as below
//const fs = require('fs');
//fs.writeFileSync('myfile.txt', "Hello Sanay");

//module.exports = function greet(){
 //   console.log("Hello Sanjay");
//}

//const sec = require('./second');

//import sec, { greet, sayHi, thirdFunc } from './second.js';
///import sec from './second.js';
// import {greet, sayHi, thirdFunc} from './second.js';

// import { writeFileSync, writeFile, readFileSync, readFile, close } from 'fs';
//fs.existsSync("D:\\test\\Node\\package.json");
//console.exists();
// greet();
// sayHi();
// let num1 = 10;
// let num2 = 20;
// thirdFunc(num1, num2);

// var obj1 = {};
// obj1.fname = "Sanjay";
// obj1.age = 45;
// obj1.phone = [1235, 999999];
// var sdata = JSON.stringify(obj1);
// console.log("Data: " + sdata);

// writeFileSync("sdata.json", sdata);
// writeFile("data.async.json", sdata, ()=>{
//     console.log("ASYNC file saved succesfully")
// });
// console.log("COMPLETED");

// sdata = readFileSync("sdata.json", "utf8");
// console.log(sdata);
// readFile("sdata.json", (err, sdata) => {
//     console.log(sdata)
// });

// var text = sdata.toString();
// console.log(text);

// process.stdout.write("one");
// process.stdout.write("two");

// console.log("First Name: " + obj1.fname);
// console.log("Age: " + obj1.age);

// console.table(greet);
//fs.close;


//const https = require('https');
// import { get } from 'https';
// res = https.get('https://www.bing.com', function(res){
//     console.log(res);
//     res.on('data', (sdata)=>{
//         console.log(sdata);
//     });
//     res.on('error', ()=>{
//         console.log("error occured");
//     });
// });

const axios = require('axios')
const fs = require('fs');
const { getDefaultSettings } = require('http2');

axios.get('https://reqres.in/api/users?page=1')
.then(function (response) {
    console.log(response.data);
});

getData = function(page)
{
    axios.get('https://reqres.in/api/users?page='+page)
.then(function (response) {
    var text = JSON.stringify(response.data);
    fs.writeFileSync(`${page}.json`, text);
});
}
getData(1);

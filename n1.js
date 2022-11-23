const read = require('readline-sync')
const fs = require('fs');



var pas =
{
    pid: 0,
    pname: null,
    page: 0,
};

var pasArray = [];
pasArray.push(pas);

choice = 1;
while(choice != '0')
{
var choice = read.question("Enter Choice [0=Exit, 1=Add, 2=Update, 3=Delete, 4=Display/Search]: ");
console.log(choice);
switch (choice)
{
case "1": //Add
    console.log("ADDING A PASSENGER")
    addPass();
    break;
case "2": //Update

    console.log("UPDATING A PASSENGER")
    pas.pname = read.question("Enter passenger Name: ").toLowerCase();
    if (pas.pname != "")
    {
        let fileName = `${pas.pname}.json`;
        try {
            var userText = fs.readFileSync(fileName, 'utf8');
            //file written successfully
          } catch (err) {
            console.error(err)
          }
        var pas = JSON.parse(userText);
        console.log(pas.pname);
        updPass();
        break;
    }

case "3": //Delete
console.log("Delete A PASSENGER")
    pas.pname = read.question("Enter passenger Name: ").toLowerCase();
    if (pas.pname != "")
    {
        let fileName = `${pas.pname}.json`;
        try {
            var userText = fs.readFileSync(fileName, 'utf8');
            //file written successfully
          } catch (err) {
            console.error(err)
          }
        var pas = JSON.parse(userText);
        console.log("ID: "+ pas.pid);
        console.log("Name:  " + pas.pname);
        console.log("Age: " + pas.page);
        dltPass();
        break;
    }

case "4": //Display

    console.log("Display A PASSENGER")
    pas.pname = read.question("Enter passenger Name: ").toLowerCase();
    if (pas.pname != "")
    {
        let fileName = `${pas.pname}.json`;
        try {
            var userText = fs.readFileSync(fileName, 'utf8');
            //file written successfully
          } catch (err) {
            console.error(err)
          }
        var pas = JSON.parse(userText);
        console.log("ID: "+ pas.pid);
        console.log("Name:  " + pas.pname);
        console.log("Age: " + pas.page);
        break;
    }

case "5": //Search

default: ///invlid choice
if (choice < 0 || choice > 4)
console.log("Invalid Choice");

}

}
console.log("Exit.....Thank you...");

// var fileName = getFileName(passName);
// var userText = fs.readFileSync(fileName, 'utf8');
// var useText1 = JSON.parse(userText);

// userText.name = name == ""? useText1.name: name;

// function getFileName(passName)
// {

// }
function addPass()
{
pas.pid = read.question("Enter passenger ID: ");
pas.pname = read.question("Enter passenger Name: ").toLowerCase();
pas.page = read.question("Enter passenger Age[18 to 60]: ");

if (pas.pid > 0 && pas.pname != "" && (pas.page>18 && pas.page<60))
{
    //console.log("Add " + pas.pid, pas.pname, pas.page);
    let fileName = `${pas.pname}.json`;
    let json = JSON.stringify(pas);
    try {
        fs.writeFileSync(fileName, json)
        //file written successfully
      } catch (err) {
        console.error(err)
      }
console.log("One record Added");

}
else 
{
    console.log("Invalid Age or other data");
}

}

function updPass()
{

//    console.log("upd" + pas);

console.log(pas.pid, pas.pname, pas.page);
pas.pid = read.question("Enter passenger ID: ");
//pas.pname = read.question("Enter passenger Name: ").toLowerCase();
pas.page = read.question("Enter passenger Age[18 to 60]: ");

if (pas.pid > 0 && pas.pname != "" && (pas.page>18 && pas.page<60))
{
    //console.log("Upd " + pas.pid, pas.pname, pas.page);
    let fileName = `${pas.pname}.json`;
    let json = JSON.stringify(pas);
    try {
        fs.writeFileSync(fileName, json)
        //file written successfully
      } catch (err) {
        console.error(err)
      }
console.log("One record Updated");

}
else 
{
    console.log("Invalid Age or other data");
}

}

function dltPass()
{

//    console.log("upd" + pas);

//console.log(pas.pid, pas.pname, pas.page);


if (pas.pname != "")
{

    //console.log("Upd " + pas.pid, pas.pname, pas.page);
    let fileName = `${pas.pname}.json`;
    try {
        pas.pid=0;
        pas.page=0;
        pas.pname=null;
        let json = JSON.stringify(pas);
        fs.writeFileSync(fileName, json)
        //file written successfully
      } catch (err) {
        console.error(err)
      }
console.log("One record Deleted to Null");

}
else 
{
    console.log("Invalid data");
}

}

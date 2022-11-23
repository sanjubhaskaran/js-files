var pas =
{
    pid:0,
    pname:null,
    page:0
    
}; //this is a reference in memory

var pasArray = [];
let pas1 = {...pas}; //call by value
for(let i =0; i<10; i++)
{
pas1.pid = i; 
pas1.pname="Sanjay" + i;
pas1.page=i*10;
pasArray.push(pas1);
pas1 = {...pas}; //call by value
}
// console.log(pasArray);
// console.log("---------------------")
// pas.pid = 2; 
// pas.pname="Sanjay1";
// pas1 = {...pas};
// pas.page=30;
// pasArray.push(pas1);
// pas2 = {...pas};
// pas.pid = 3; 
// pas.pname="Sanjay3";
// pas.page=40;
// pasArray.push(pas2);
console.log(pasArray);

// call by value vs reference

// let person = {
//     name : "mario",
//     age : 10
// }

// let person2 = {...person};

// person2.name = "kong";

// console.log(person2)
// console.log(person)
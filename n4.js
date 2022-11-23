const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
//const db = require('./usernanage.js')
//let id = 1;

var app = http.createServer((req, res)=> {
    const link = url.parse(req.url, true);
    res.setHeader('Content-Type', 'text/html');
    let addr = url.parse(req.url, true);
    //console.log(addr)
    //let path = req.url.split('?')[0];
    let path = addr.pathname;
    console.log(path);

    if (path == "/") 
    {
        res.end("My Home Page");
        //res.end();
    }
    else if (path == "/api/users") {
        console.log("hai "+getUsers())
        let users = getUsers();
        let itemsPerPage = 2;
        //console.log(id);
        let totalPages = Math.ceil(users.length / itemsPerPage);
        let pageNumber = 1;
        let requestedPage = parseInt(link.query.page); //error
        if (!isNaN(requestedPage)){
            pageNumber = requestedPage;
        }
        let startIndex = ((pageNumber - 1) * itemsPerPage);
        let endIndex = pageNumber * itemsPerPage;
        let response =
        {
            itemsPerPage: itemsPerPage,
            totalPages: totalPages,
            pageNumber: pageNumber,
            from: startIndex,
            to: endIndex,
            data: users.slice(startIndex-1, endIndex)
        };
        let json = JSON.stringify(response);
        res.setHeader('Content_Type', 'application/json')
        res.end(json);
    }
    else if (path == "/api/user") {
        var user = getUsers();
        let id = link.query.id;
        console.log(user)
        let json = JSON.stringify({data: user});
        res.setHeader('Content_Type', 'application/json')
        res.end(json);
    }
    });
app.listen(80);

function getUsers()
{
    let id = 1;
    return [
            {id: id++, Name: 'Sanjay', Email: 'sanjay@gmail.com'},
            {id: id++, Name: 'Bindu', Email: 'bindu@gmail.com'},
            {id: id++, Name: 'Sanjay1', Email: 'sanjay1@gmail.com'},
            {id: id++, Name: 'Bindu1', Email: 'bindu1@gmail.com'},
            {id: id++, Name: 'Rajesh', Email: 'rajesh@gmail.com'},
            {id: id++, Name: 'Rajesh1', Email: 'rajesh1@gmail.com'}
    ]
}

//web server
// http port 80, https 443, SMTP 25
//package.json change the file name and nodemom file; npm start
//url, method
//
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
var app = http.createServer((req, res)=> {
    res.setHeader('Content-Type', 'text/html');
    let addr = url.parse(req.url, true);
    //let path = req.url.split('?')[0];
    let path = addr.pathname;
    console.log(path);

    //console.log(req.method, req.url);
    
    // res.write("Hello ");
    // res.write("from ");
    // res.write("Node ");
    // for(let i=0; i<10;i++)
    // res.write(" i = " + `${i}` + ', ');

    if (path == "/" && req.method == "GET") {
        // res.write(`
        //     <html>
        //         <head>
        //             <title>
        //                 ${req.url}
        //             </title>
        //         </head>
        //         <body>
        //             <h1>
        //                 This is Home Page
        //             </h1>
        //         </body>
        //     </html>
        // `);
        var hp = fs.readFileSync('templates/index.html', 'utf8');
        res.end(hp);
        //res.end();
}
else if (path == "/" && req.method == "POST") {
    let body = '';
    req.on('data', function(data){
        body += data.toString();
    });
    req.on('end', function(data){
        var qry = qs.parse(body);
        res.end(qry.email);
    });
}
else if (path == "/result") { //action result in form submission index.html
    console.log(addr.query.email);
    //var ap = fs.readFileSync('templates/about.html', 'utf8');
    res.end(addr.query.email);
}

    else if (path == "/about") {
        var ap = fs.readFileSync('templates/about.html', 'utf8');
        res.end(ap);
}
    else if (path == "/contact") {
        var cp = fs.readFileSync('templates/contact.html', 'utf8');
        res.end(cp);
    }
//res.end("<h1>..Ending Page Response</h1>");
}).listen(80);


app.on('listening', () =>{
    console.log("listening to port 80....localhost");
});



//app.listen(3000);
//app.listen(80);
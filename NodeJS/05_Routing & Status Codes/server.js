const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url  , req.method);

    //   Set header content type
    res.setHeader('Content-Type','text/html');

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        //redirct Example
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
            
        default:  
            path += '404.html';
            res.statusCode = 404;
            break;
    } 

    // Senf an html File
    fs.readFile(path, (err,data) => {
        if (err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            res.statusCode = 200;
            res.end(data);
        }
    })

});

server.listen(4000,'localhost',()=>{
  console.log("Listining for Request to port 4000");
});
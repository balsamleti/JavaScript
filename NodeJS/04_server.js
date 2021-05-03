const http = require('http');

const server = http.createServer((req, res) => {
  // console.log("Request Made");
  console.log(req.url  , req.method);

  res.setHeader('Content-Type','text/plain');
  res.write("Hello Vicky..!!");
  res.end();

});

server.listen(3000,'localhost',()=>{
  console.log("Listining for Request to port 3000");
});
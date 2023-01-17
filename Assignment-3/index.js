const fs = require('fs');
const http = require('http');
const data = (`<h1> Hello World </h1>
<p> This is Ulaganathan</p>`);
server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.write(data);
    fs.writeFile('index.html', data, (err) => {
        if(err) console.log(err);
    });
    res.end();
});

server.listen(5000, () => {console.log("Port 5000 is up")});
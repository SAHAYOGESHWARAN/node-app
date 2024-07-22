const http = require('http');

const server = http.createServer((req, res) => {
const{ header,url,method } = req
    console.log(header,url,method);
    res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

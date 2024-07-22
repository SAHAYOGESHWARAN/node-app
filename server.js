const http = require('http');

const todos =[
    {id: 1, text: 'Todo One'},
    {id: 2, text: 'Todo two'},
    {id: 2, text: 'Todo three'},
]


const server = http.createServer((req, res) => {
    res.setHeader('content-type','application/json');
    res.setHeader('x-Powered-by','node.js')
    res.end(
        json.stringify({
    success: true,
    data: todos
}));
});
const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

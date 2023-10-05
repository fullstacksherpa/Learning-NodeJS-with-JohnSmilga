const http = require('http');

const server = http.createServer((req, res)=>{
    res.write("this is the message from the server. Hello boss, I know you can do it.Backend developer")
    res.end()
})
server.listen(3000)
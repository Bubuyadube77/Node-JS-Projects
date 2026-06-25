import http from 'node:http'

const port = 8002

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<html><h1>This server is running.....</h1></html>')
})

server.listen(port, ()=> console.log(`connected on port: ${port}`))
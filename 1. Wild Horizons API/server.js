import http from 'node:http'

const port = 8000
const server = http.createServer((req, res)=>{
    res.write('This is some data\n')
    res.write('This is some more data\n')
    res.end('Hello from the server!', 'utf-8', ()=> console.log('response end'))
})

server.listen(port, () => console.log(`server running on port: ${port}`))
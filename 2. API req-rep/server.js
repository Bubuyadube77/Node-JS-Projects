import http from 'node:http'

const port = 8000

const animal = {
    type: 'elephant',
    nickName: 'Elon Tusk'
}

console.log(JSON.stringify(animal))

const server = http.createServer((req, res)=>{
    
    if(req.url==='/api' && req.method === 'GET') {
        res.end('This is from the server')
    }
})

server.listen(port, () => console.log(`server running on port: ${port}`))
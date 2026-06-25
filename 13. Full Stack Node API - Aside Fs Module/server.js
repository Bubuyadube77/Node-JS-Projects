import http from 'node:http'
import { serverStatic } from './Utils/serverStatic.js'

const port = 8002

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res)=>{
    await serverStatic(req, res, __dirname)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><h1>This server is running</h1></html>')
})

server.listen(port, ()=> console.log(`connected on port: ${port}`))
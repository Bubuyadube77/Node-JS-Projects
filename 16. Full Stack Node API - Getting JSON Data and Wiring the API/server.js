import http from 'node:http'
import { serverStatic } from './Utils/serverStatic.js'
import { handleGet } from './Handlers/routeHandlers.js'

const port = 8002
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        if (req.method === 'GET') {
            return handleGet(res)
        }
        // handle other methods on /api here if needed
        return
    }
    
    await serverStatic(req, res, __dirname)
})

server.listen(port, ()=> console.log(`connected on port: ${port}`))
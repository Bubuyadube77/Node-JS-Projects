import http from 'node:http'
import { getDataFromDB } from './database/db.js'

const port = 8000

const server = http.createServer(async (req, res)=>{
    try {
        if(req.url==='/api' && req.method === 'GET') {
            const destination = await getDataFromDB()
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 200
            res.end(JSON.stringify(destination))
        }
        else {
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 404
            res.end(JSON.stringify({error:"not found", message: "The requested route does not exist"}))
        }
    }
    catch (err) {
        console.error('Request handler error:', err)
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 500
        res.end(JSON.stringify({ error: "internal server error", message: err.message}))
    }   
})

server.listen(port, () => console.log(`server running on port: ${port}`))
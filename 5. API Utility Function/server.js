import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './sendJSONResponse.js'

const port = 8000

const server = http.createServer(async (req, res)=>{
    const destinations = await getDataFromDB()
    try {
        if(req.url==='/api' && req.method === 'GET') {
            sendJSONResponse(res, 200, destinations)
        }
        else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
            const continent = req.url.split('/').pop()
            const filterData = destinations.filter((destination)=> {
                return destination.continent.toLowerCase() === continent.toLowerCase()
            })
            sendJSONResponse(res, 200, filterData)
        }
        else {
            sendJSONResponse(res, 404, ({ error: "not found", message: "The requested route does not exist" }))
        }    
    }
    catch (err) {
        console.error('Request handler error:', err)
        sendJSONResponse(res, 500, ({ error: "internal server error", message: err.message }))
    }   
})

server.listen(port, () => console.log(`server running on port: ${port}`))
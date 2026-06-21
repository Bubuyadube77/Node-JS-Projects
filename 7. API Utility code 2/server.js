import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './sendJSONResponse.js'
import { getDataByPathParams } from './getDataByPathParams.js'
import { data } from './data/data.js'

const port = 8000

const server = http.createServer(async (req, res)=>{
    const destinations = await getDataFromDB()
    try {
        if(req.url==='/api' && req.method === 'GET') {
            sendJSONResponse(res, 200, destinations)
        }
        else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
            const continent = req.url.split('/').pop()
            const filterData = getDataByPathParams(destinations, 'continent', continent)
            sendJSONResponse(res, 200, filterData)
        }
        else if (req.url.startsWith('/api/country') && req.method === 'GET') {
            const country = req.url.split('/').pop()
            const filterCountry = getDataByPathParams(destinations, 'country', country)
            sendJSONResponse(res, 200, filterCountry)
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
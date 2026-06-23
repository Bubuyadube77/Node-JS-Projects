import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './sendJSONResponse.js'
import { getDataByPathParams } from './getDataByPathParams.js'

const port = 8000

const server = http.createServer(async (req, res)=>{
    const destinations = await getDataFromDB()
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    
    try {
        if(urlObj.pathname==='/api' && req.method === 'GET') {
            let filteredDestinations = destinations
            sendJSONResponse(res, 200, filteredDestinations)
            console.log(queryObj)
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
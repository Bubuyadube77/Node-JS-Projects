import http from 'node:http'
import { serverStatic } from './Utils/serverStatic.js'
import { getData } from './Utils/getData.js'

const port = 8002

const __dirname = import.meta.dirname
console.log(await getData())

const server = http.createServer(async (req, res)=>{
    const handled = await serverStatic(req, res, __dirname)
    if (handled) return   // response already sent, stop here
})

server.listen(port, ()=> console.log(`connected on port: ${port}`))
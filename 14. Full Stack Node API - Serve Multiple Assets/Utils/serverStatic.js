import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serverStatic(req, res, baseDir) {
    const publicDir = path.join(baseDir, 'Public')
    const filePath = path.join(
        publicDir, 
        req.url === '/' ? 'index.html' : req.url)
    
    console.log(filePath)

    const ext = path.extname(filePath)
    const contentType = getContentType(ext)

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
        return true
    }
    catch (err) {
        console.log(err)
        return false
    }
}
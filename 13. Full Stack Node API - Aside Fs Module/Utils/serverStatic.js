import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

export async function serverStatic(req, res, baseDir) {
    const filePath = path.join(baseDir, 'Public', 'index.html')
    console.log(filePath)

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, 'text/html', content)
    }
    catch (err) {
        console.log(err)
    }
}
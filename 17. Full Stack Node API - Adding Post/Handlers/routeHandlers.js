import { getData } from "../Utils/getData.js"
import { sendResponse } from "../Utils/sendResponse.js"
import { parseJSONBody } from "../Utils/parseJSONBody.js"

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}

export async function handlePost(req, res) {
    const rawBody = await parseJSONBody(req)
    console.log(rawBody)  
}
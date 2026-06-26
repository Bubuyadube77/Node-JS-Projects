import { getData } from "../Utils/getData.js"
import { sendResponse } from "../Utils/sendResponse.js"

export async function handleGet(res) {
    const data = await getData()
    const content = JSON.stringify(data)
    sendResponse(res, 200, 'application/json', content)
}
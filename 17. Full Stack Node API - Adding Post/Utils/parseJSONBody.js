export async function parseJSONBody (req) {
    let body = ""
    for await (const chunck of req) {
        body += chunck   
    }

    try {
        return JSON.parse(body)
    }

    catch (err){
        throw new Error(`Invalid JSON format: ${err}`)
    }
}
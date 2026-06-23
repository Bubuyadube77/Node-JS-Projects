export const sendJSONResponse = (res, statusCode, payLoad) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-control-Allow-Origin', '*')
    res.setHeader('Access-control-Allow-Methods', 'GET')
    res.statusCode = statusCode
    res.end(JSON.stringify(payLoad))
}
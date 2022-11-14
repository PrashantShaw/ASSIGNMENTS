var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    console.log(req.url)
    if (req.url === '/welcome') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.write("Welcome to Dominos!")
        return res.end()
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.write(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }))
        return res.end()
    }
    else{
        res.writeHead(404)
        res.write("Not Found")
        return res.end()
    }
}

module.exports = httpServer;
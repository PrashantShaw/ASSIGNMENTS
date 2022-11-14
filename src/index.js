const express = require('express')
// const bodyParser = require("body-parser")
const path = require('path')
const app = express()
const port = 3000
const ValidateResponse = require('./validateResponse')

// MIDDLEWARES - (EXPRESS JS HAS ITS OWN BODY PARSER)
app.use(express.urlencoded({ extended: false }));
// MAKING 'PUBLIC' FOLDER AS STATIC FOLDER
// ALSO SERVING AS LANDING PAGE -
app.use(express.static(path.join(__dirname, 'public')));
// Parse JSON bodies (as sent by API clients) -
app.use(express.json());


app.post('/add', (req, res) => {
    console.log(req.body)
    const [status, message, result] = ValidateResponse(req.body.num1, req.body.num2, 'add')
    status === 'error' && res.status(400)
    res.json({
        status: status,
        message: message,
        result: result
    })
})
app.post('/sub', (req, res) => {
    console.log(req.body)
    const [status, message, result] = ValidateResponse(req.body.num1, req.body.num2, 'sub')
    status === 'error' && res.status(400)
    res.json({
        status: status,
        message: message,
        result: result
    })
})
app.post('/multiply', (req, res) => {
    console.log(req.body)
    const [status, message, result] = ValidateResponse(req.body.num1, req.body.num2, 'multiply')
    status === 'error' && res.status(400)
    res.json({
        status: status,
        message: message,
        result: result
    })
})
app.post('/divide', (req, res) => {
    console.log(req.body)
    const [status, message, result] = ValidateResponse(req.body.num1, req.body.num2, 'divide')
    status === 'error' && res.status(400)
    res.json({
        status: status,
        message: message,
        result: result
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app; 
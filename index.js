const fs = require('fs/promises')
const http = require('http')
const path = require('path')

// CREATING HTML FILE AND WRITING INTO IT
async function createFile(fileName, content) {
    try {
        console.log('\ncreating file')
        await fs.writeFile(path.join(__dirname, fileName), content)
        console.log('\nFile Created Sucessfully')
    }
    catch (err) { console.log(err) }
}
// READING THE FILE AND RETURNING THE DATA
async function readFile(fileName) {
    let data;
    try {
        console.log('\nreading file')
        data = await fs.readFile(path.join(__dirname, fileName), 'utf-8')
        console.log('\ndone reading file')
    }
    catch (err) { console.log(err) }

    return data
}
// READING THE HTML FILE AND STARTING A SERVER
function startServer(port, data) {

    console.log('\nstarting server...')
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'contet-type': 'aplication/html' })
        res.end(data)
    })

    server.listen(port, (err) => {
        err ? console.log(err) : console.log('\nYour server is live at http://localhost:5000/')
    })
}


// CONTENTS TO BE USED
const HTMLcontent = '<h1> Hello World </h1><p> This is PRASHANT SHAW... </p>'
const FILE_NAME = 'index.html'

// STARTING THE FLOW AND CONTROLLING THE ORDER OF FLOW
createFile(FILE_NAME, HTMLcontent)
    .then(() => readFile(FILE_NAME)
        .then(data => startServer(5000, data)))
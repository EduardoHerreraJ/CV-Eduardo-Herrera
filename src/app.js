const path = require('path')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '..', 'public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Application routes
app.get('', (req, res) => {
    res.render('index')
})

// Serving the app on the specified port
app.listen(port, () =>{
    console.log('Server is up on port ' + port + '.')
})
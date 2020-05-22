const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', function (req, res) {
    res.set('Content-Type', 'application/json')
    res.status(200).send({ msg: 'Goda says hi!' })
})

const PORT = process.env.PORT || 3030

app.listen(PORT, () => console.log(`server started on port ${PORT}`))


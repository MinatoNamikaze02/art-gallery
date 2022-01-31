require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const fileUpload = require('express-fileupload')
const auth = require('./routes/auth')
const morgan = require('morgan')

//middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(fileUpload())
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//routes
app.use(auth)


app.use((err, req, res, next) => {
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).send({
        message: 'Something went wrong!!'
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
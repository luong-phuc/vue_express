const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// MiddleWare
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

// Set View engine
app.set('view engine', 'ejs')

// Set Public resource
app.use(express.static('public'))

// Routes Web
const indexRouter = require('../routes/web/vue')
app.use('/', indexRouter)

// Routes Api
app.use('/api/*', function (req, res, next) {
    res.set('Content-Type', 'application/json')

    return next()

    // const bearerHeader = req.headers['authorization'];
    // if (bearerHeader) {
    //     console.log(`Token: ${bearerHeader}`)
    //     // TODO: Check Token
    //     return next()
    // }

    // return res.sendStatus(403)
})

const userApiRouter = require('../routes/api/userApi')
app.use('/api/user', userApiRouter)


// Configure Server
const port = process.env.PORT || 8080
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log(`Server ${host} started on port ${port} .`) )

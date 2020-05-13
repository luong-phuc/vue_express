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


// Routes
const indexRouter = require('../routes/web/vue')
app.use('/', indexRouter)



const port = process.env.PORT || 8080
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log(`Server ${host} started on port ${port} .`) )

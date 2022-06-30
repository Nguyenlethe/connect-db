import express  from 'express';
import bodyParser from 'body-parser'
import viewEngine from './config/viewEngine'
import initWebRoutes from './route/web'
import connectDB from './config/connectDB'
require('dotenv').config() // Giúp ta chạy được dòng const port = process.env.PORT || 6262
const port = process.env.PORT || 6262

const app = express()


// config app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))



viewEngine(app)
initWebRoutes(app)

connectDB()

app.listen(port, () => {
    console.log(`Backend Node JS export : http://localhost:${port}/`)
})
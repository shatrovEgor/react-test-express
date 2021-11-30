require('dotenv').config()
const express = require('express')
const moogoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 3001
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use('/auth', authRouter)

const start = async () => {
    try {
        await moogoose.connect(`mongodb+srv://admin:admin@cluster0.lfx9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`Server is started on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();


app.get('/api', ( req, res ) => {
    res.json({
        message: "Welcome to test"
    })
})

const urlencodedParser = express.urlencoded({extended: false});

app.post('/qize', urlencodedParser,  (req, res) => {
    if(!req.body) return res.sendStatus(400);
    if(req.body.havai === true) {
        return res.send(`Ясно любитель гавайской`)
    } else {
        res.send(`${req.body.name} - ${req.body.surname}`)
    }
})
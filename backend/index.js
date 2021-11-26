const express = require('express')
const moogoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
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
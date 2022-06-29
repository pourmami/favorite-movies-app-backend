const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.post('/sum', (req, res, next) => {
    res.send(`${req.body.name} is ${req.body.age} years old`)
})

app.use('/', (req, res, next) => {
    res.send("<form action='/sum' method='post'><input type='text' name='name'><input type='number' name='age'><input type='submit'></form>")
})

app.listen(3000);

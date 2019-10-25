import express from 'express'

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

const sayHello = (req, res) => {
    res.status(200).send("<h1>Hello World!</h1>")
}

const app = express()
    .use(logger)
    .use(sayHello)

app.listen(5000, () => {
    console.log(`Recipe app running at 'http://localhost:5000'`)
})
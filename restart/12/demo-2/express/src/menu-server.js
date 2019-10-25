import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import Menu from './components/Menu'
import data from './components/recipes.json'

global.React = React
const html = renderToString(<Menu recipes={data} />)

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

const sendHTMLPage = (req, res) => {
    res.status(200).send(`
        <!doctype html>
        <html>
            <head>
                <title>React Recipes Apps</title>
            </head>
            <body>
                <div id="react-container">${html}</div>
                <script>window.__DATA__ = ${JSON.stringify(data)}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `)
}

const app = express()
    .use(logger)
    .use(express.static('./dist'))
    .use(sendHTMLPage)

app.listen(5000, () => {
    console.log(`Recipe app running at 'http://localhost:5000'`)
})
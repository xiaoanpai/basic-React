import express from 'express'
import path, { dirname } from 'path'
import fs from 'fs'

const fileAssets = express.static(
    path.join(dirname, '../../dist/assets')
)

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
}

const respond = (req, res) =>
    res.status(200).send(`
  <!doctype html>
        <html>
            <head>
                <meta charset="uft-8" />
                <title>Universal Color Oranizer</title>
            </head>
            <body>
                <div id="react-container">ready...</div>
            </body>
        </html>
  `)

export default express()
    .use(logger)
    .use(fileAssets)
    .use(respond)
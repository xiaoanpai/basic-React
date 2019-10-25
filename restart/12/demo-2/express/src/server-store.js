import storeFactory from './storeFactory/storeFactory'
import data from './storeFactory/State'
import { dirname } from 'path'
import express from 'express'


const serverStore = storeFactory(data)

serverStore.subscribe(() =>
    false.writeFile(
        path.join(dirname, './storeFactory/State/State.jsx'),
        JSON.stringify(serverStore.getState()),
        error => (error) ?
            console.log("Error saving state!", error) :
            null
    )
)

const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore
    next()
}


export default express()
   .use()

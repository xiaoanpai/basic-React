import { ColorList } from './ColorList/ColorList'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const clientLogger = store => next => action => {
    console.warn("before action", action)
    let result = next(action)
    console.warn("next action", action)
    return result
}

const serverLogger = store => next => action => {
    console.log('\n dispatching server action \n', action)
    return next(action)
}

const middleware = server =>
    (server) ? serverLogger : clientLogger

const storeFactory = (server = false, initialState = {}) =>
    applyMiddleware(middleware)(createStore)(
        combineReducers({ ColorList }),
        initialState
    )

export default storeFactory
// import storeFactory from './storeFactoryInit'
import {colors,sort} from './Reducer'
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import stateData from './State'

const logger = store => next => action => {
    let result 
    console.groupCollapsed('dispatching',action)
    console.log("data:",store.getState())
    result = next(action)
    console.log('next state',store.getState())
    console.groupEnd()
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    console.log("saver:",result)
    return result
}

const storeFactory = (initialState = stateData) => 
  applyMiddleware(logger, saver)(createStore)(
      combineReducers({colors, sort}),
      (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        stateData
  )

  export default storeFactory

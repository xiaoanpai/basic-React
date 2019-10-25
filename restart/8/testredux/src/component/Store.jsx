import {createStore, combineReducers} from 'redux'
import {colors, sort} from './Reducer'
import data from './State'
// const store = createStore(color)

const store = createStore(
    combineReducers({colors, sort}),
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      {}
)

console.warn("test store",store.getState())

export default store
import Child from './child'
import Child01 from './child01'
import React from 'react'
import { PropTypes } from 'prop-types'
import './parent.css'
import { addColor } from '../storeFactory/ActionFunc'
const parent = (props, { store }) => {
    console.warn('parent', store.getState())
    const clickFunc = e => {
        store.dispatch(addColor(
            "asdfasdf",
            '#bee093'
        ))
    }
    return (
        <div className="container">
            <Child />
            <Child01 />
        </div>
    )
}

parent.contextTypes = {
    store: PropTypes.object
}

export default parent
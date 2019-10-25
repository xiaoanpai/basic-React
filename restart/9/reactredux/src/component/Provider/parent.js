import {Color} from './child01'
import React from 'react'
import { PropTypes } from 'prop-types'
import { addColor } from '../storeFactory/ActionFunc'
const parent = (props, { store }) => {
    const clickFunc = e => {
        store.dispatch(addColor(
            "asdfasdf",
            '#bee093'
        ))
    }
    return (
        <div className="container">
            <Color />
        </div>
    )
}

export default parent
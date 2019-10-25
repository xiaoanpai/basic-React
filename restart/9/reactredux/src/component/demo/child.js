import { PropTypes } from 'prop-types'
import React from 'react'
const child = (props,{ store }) => {
    console.warn("child store:", store)
    return (
        <div>{store.getState().colors[0].color}</div>
    )
}


child.contextTypes = {
    store: PropTypes.object.isRequired
}

export default child

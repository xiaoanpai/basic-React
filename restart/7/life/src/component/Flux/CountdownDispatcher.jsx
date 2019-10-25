import React from 'react'
import Dispatcher from 'flux'

class CountdownDispatcher extends Dispatcher {
    handleAction(action) {
        console.log('test  action:', action)
        this.dispatch({
            source: 'VIEW_ACTOIN',
            action
        })
    }
}

export default CountdownDispatcher
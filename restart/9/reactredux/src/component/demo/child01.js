import React from 'react'
import {PropTypes} from 'prop-types'
import { addColor } from '../storeFactory/ActionFunc';
class child01 extends React.Component{
    render(){
        const {store} = this.context;
        console.warn('child01 store',store.getState())
        return <div onClick = {() => store.dispatch(
            addColor("title000000000","#fff555")
        )}> {store.getState().sort}</div>
    }
}

child01.contextTypes = {
    store:PropTypes.object
}

export default child01
import {Countdown} from './Countdown'
import CountdownDispatcher from './CountdownDispatcher'
import {CountdownStore} from './CountdownStore'
import countdownActions from './countdownActions'
import React from 'react'

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher)
const store = new CountdownStore(10,appDispatcher)
const count = 10
const CountdownComponent = <Countdown count = {count} {...actions} />

export {CountdownComponent}
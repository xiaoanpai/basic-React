import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { geClockTime } from './clock_mingling'

class Clock extends Component {
    constructor() {
        super()
        this.state = geClockTime()
    }
    componentDidMount() {
        console.log("Start Clock")
        this.ticking = setInterval(() =>
            this.setState(geClockTime()),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.ticking)
        console.log("Stopping Clock")
    }
    render() {
        const { hours, minutes, seconds, timeOfDay } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>
                <button onClick={this.props.onClose}>X</button>
            </div>
        )
    }
}

export {Clock}

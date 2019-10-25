import React from 'react'

const AlarmClockDisplay = ({ hours, minutes, seconds, ampm }) =>
    <div>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{timeOfDay}</span>
        <button onClick={this.props.onClose}>X</button>
    </div>

export default AlarmClockDisplay
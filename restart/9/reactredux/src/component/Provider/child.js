import React from 'react'
const child = ({color, onLog = f => f}) => {
    return (
        <div onClick = {() =>  onLog()}>{color}</div>
    )
}
export default child

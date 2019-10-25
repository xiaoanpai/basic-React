import React from 'react'
import { render, hydrate } from 'react-dom'
import Menu from './components/Menu'

window.React = React
alert('bundle loaded, Rendering in browser')

render(
    <h1>1111</h1>,
    document.getElementById('react-container')
)

alert('render complete')
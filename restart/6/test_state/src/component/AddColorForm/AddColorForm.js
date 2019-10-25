import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import './AddColorForm.css'
class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const { _title, _color } = this.refs
        e.preventDefault()
        alert(`New Color: ${_title.value} ${_color.value}`)
        if (this.props.onNewColor) {
            this.props.onNewColor(_title.value, _color.value)
        }
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }

    render() {
        return (
            <form onSubmit={this.submit} >
                <input type="text" ref='_title' placeholder="color title..." required />
                <input type="color" ref="_color" required />
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f => f
}

const AddColorForm_Nostatus = ({ onNewColor = f => f }) => {
    let _color, _title
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return (
        <form onSubmit={submit} >
            <input type="text" ref={input => _title = input} placeholder="color title..." required />
            <input type="color" ref={input => _color = input} required />
            <button>ADD</button>
        </form>
    )
}

export { AddColorForm, AddColorForm_Nostatus }
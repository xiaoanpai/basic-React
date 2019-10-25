import React from 'react'

class AddTodoView extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (e.keyCode === 13) {
            const node = this.ref.input
            const text = node.value.trim()
            text && this.props.onAddClick(text)
            node.value = ''
        }
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    type="text"
                    onKeyUp={e => this.handleClick(e)}
                    placeholder="input todo item"
                    ref='input'
                />
            </header>
        )

    }
}

export default AddTodoView
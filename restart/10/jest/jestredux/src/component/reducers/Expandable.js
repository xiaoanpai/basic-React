import React, { Component } from 'react'
const Expandable = ComponsedComponent =>
    class Expandable extends Component {
        constructor(props) {
            super(props)
            const collapsed =
                (props.hidden && props.hidden === true) ?
                    true :
                    false
            this.state = { collapsed }
            this.expandCollapse = this.expandCollapse.bind(this)
        }

        expandCollapse() {
            let collapsed = !this.state.collapsed
            this.setState({ collapsed })
        }

        render() {
            return <ComponsedComponent
                expandCollapse={this.expandCollapse}
                {...this.state}
                {...this.props}
            />
        }
    }

export { Expandable }
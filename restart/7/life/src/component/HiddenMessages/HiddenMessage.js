import React from 'react'
class HiddenMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: (props.hide) ? props.hide : true
        }
    }
    componentWillReceiveProps(nextProps) {
        /*
        componentWillReceiveProps生命周期方法就是为了处理这类场景而存在的。
        它会在属性被父组件修改时被触发。
        */ 
        console.warn("触发修改",nextProps)
        this.setState({ hidden: nextProps.hide })
    }
    render() {
        const { children } = this.props
        const { hidden } = this.state
        return (
            <p>
                {(hidden) ?
                    children.replace(/[a-zA-Z0-9]/g, "X") :
                    children
                }
            </p>
        )
    }
}

export { HiddenMessage }
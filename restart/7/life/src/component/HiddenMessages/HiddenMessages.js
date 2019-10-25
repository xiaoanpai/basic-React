import React from 'react'
import { HiddenMessage } from './HiddenMessage'

/*
使用componentWillMount初始State,当这些属性发生变化时，我们将需要使用componentWillReceiveProps方法对State进行更新。
*/

class HiddenMessages extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [
                "a===ddddddddddddddddddddd",
                "b===ddddddddddddddddddddd",
                "c==dddddddddddddddddddddd"
            ],
            showing: -1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            let { showing, messages } = this.state
            showing = (++showing >= messages.length) ?
                -1 :
                showing
            this.setState({ showing })
        }, 1000)
    }



    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        const { messages, showing } = this.state
        return (
            <div className="hidden-message">
                {messages.map((message, i) =>
                    <HiddenMessage key={i} hide={(i !== showing)}  >{message}</HiddenMessage>
                )}
            </div>
        )
    }
}

export { HiddenMessages }
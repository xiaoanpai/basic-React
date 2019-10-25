import React from 'react'
import AddTodoView from './AddTodoView'
class App extends React.Component {
    render() {
        const { params } = this.props
        return (
            <section className="todoapp">
                <div className="main">
                    <AddTodo />
                    <AddTodoView filter={params.filter || 'all'} />
                </div>
                <Footer />
            </section>
        )
    }
}

export default App
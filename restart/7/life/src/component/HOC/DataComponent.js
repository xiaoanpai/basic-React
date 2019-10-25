import React from 'react'
import fetch from 'isomorphic-fetch'
const DataComponents = (ComposedComponent, url) =>
    class DataComponentddd extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }

        componentWillMount() {
            this.setState({ loading: true })
            const that = this
            fetch(url)
                .then(response => response.json())
                .then(obj => {
                    return obj.results
                })
                .then(data => {
                    that.setState({
                        loaded: true,
                        loading: false,
                        data: data
                    })
                })
        }

        render() {
            return (
                <div>
                   {(this.state.loading) ?
                        <div>Loading</div> :
                        <ComposedComponent {...this.state} />
                    }
                </div>
            )
        }
    }

export default DataComponents
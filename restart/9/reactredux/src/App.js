import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ColorList } from './component/ColorList/ColorList'
import { AddColorForm, AddColorForm_Nostatus, AddColorFormRedux } from './component/AddColorForm/AddColorForm'
import { PropTypes } from 'prop-types'

// import Parent from './component/demo/parent'

import Parent from './component/Provider/parent'

class AppInit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          'id': '1',
          'title': 'Ocean Blue',
          'color': '#0070ff',
          'rating': 3
        },
        {
          'id': '2',
          'title': 'Tomato',
          'color': '#d10012',
          'rating': 2
        }, {
          'id': '3',
          'title': 'Lawn',
          'color': '#67bf4f',
          'rating': 1
        }, {
          'id': '4',
          'title': 'Party Pink',
          'color': '#ff00f7',
          'rating': 5
        },
      ]
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)

  }
  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: new Date().toString(),
        title,
        color,
        rating: 0
      }
    ]

    this.setState({ colors })
  }
  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ?
        color :
        {
          ...color,
          rating
        }
    )
    this.setState({ colors })
  }

  removeColor(id) {
    const colors = this.state.colors.filter(
      color => color.id !== id
    )
    this.setState({ colors })
  }

  render() {
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm_Nostatus onNewColor={this.logColor} />
        <ColorList colors={colors} onRate={this.rateColor} onRemove={this.removeColor} />
      </div>
    )
  }

}


// 显式传递store
const Appxian = ({ store }) => {
  console.warn("store App", store.getState())
  return (
    <div className='app'>
      <AddColorFormRedux store={store} />
      <ColorList store={store} />
    </div>
  )
}

// 通过上下文传递

class Apptop extends React.Component {
  constructor(props) {
    super(props)
    this.store = props.store
    console.warn("store", this.store.getState())
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  componentDidMount() {
    // this.unsubscribe = this.state.store.subscribe(
    //   () => this.forceUpdate()
    // )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    console.warn('store', this.store.getState())
    // const { colors, sort } = this.state.store.getState()
    return (
      <div>
        <Parent />
      </div>
    )
  }

}

Apptop.propTypes = {
  store: PropTypes.object.isRequired
}

Apptop.childContextTypes = {
  store: PropTypes.object.isRequired
}

function App() {
  return(
    <div>
      <Parent />
    </div>
  )
}

export default App;

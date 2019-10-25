import React from 'react';
import './App.css';
// import { SummaryES6, SummaryNostatus, SummaryStaic } from './component/createClass/Summary'
import { AddColorForm, AddColorForm_Nostatus } from './component/AddColorForm/AddColorForm'
import { StarRatingComponent } from './component/StarRating/StarRating'
import { ColorList } from './component/ColorList/ColorList'
const logColor = (title, color) =>
  console.log(`New Color: ${title} ${color}`)
// function App() {

//   return (
//     <div className="App">
//       <StarRatingComponent totalStars = {18} />
//       {/* <AddColorForm onNewColor={logColor} />
//       <AddColorForm_Nostatus onNewColor={logColor} /> */}
//       {/* <SummaryNostatus />
//       <SummaryStaic  /> */}
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: []
    }
    this.logColor = this.logColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  logColor(title, color) {
    // const temp = {
    //   id: new Date().toString(),
    //   title: title,
    //   color: color
    // }
    // this.state.colors.push(temp)
    // this.setState({ colors: this.state.colors })

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

  rateColor(id,rating) {
    const colors = this.state.colors.map(color =>
        (color.id !== id) ?
          color:
          {
            ...color,
            rating
          }
      )
      this.setState({colors})
  }

  removeColor(id){
    const colors = this.state.colors.filter(
      color => color.id !== id
    )
    this.setState({colors})
  }

  render() {
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm_Nostatus onNewColor={this.logColor} />
        <ColorList colors={colors} onRate={this.rateColor} onRemove = {this.removeColor} />
      </div>
    )
  }
}

export default App;

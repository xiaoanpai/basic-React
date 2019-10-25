import { StarRatingNostatus } from '../StarRating/StarRating'
import React from 'react'
import { PropTypes } from 'prop-types'
import './Color.css'
class Color extends React.Component {
    componentWillMount() {
        this.style = {
            backgroundColor: '#CCC'
        }
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props
        return rating !== nextProps.rating
    }

    componentWillUpdate(nextProps) {
        const {title,rating} = this.props
        this.style = null
        this.style = null
        this.refs.title.style.backgroundColor = "red"
        this.refs.title.style.color = 'yellow'  
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`)

    }

    componentDidUpdate(prevProps){
        const {title, rating} = this.props
        const status = (rating > prevProps.rating)? 'beeter' : 'worse'
        // console.log(`${title} is getting ${status}`)
        this.refs.title.style.backgroundColor = ''
        this.refs.title.style.color = 'green'        
    }


    render() {
        const { title, rating, color, onRate, onRemove } = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className="color div" style={{ backgroundColor: color }}></div>
                <div>
                    <StarRatingNostatus starsSelected={rating} onRate={onRate} />
                </div>
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onRate: PropTypes.func.isRequired
}

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: '#000000',
    onRate: f => f
}

export { Color }


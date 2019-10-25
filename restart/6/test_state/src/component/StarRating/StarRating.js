import React from 'react'
// import { createClass } from 'react'
import { PropTypes } from 'prop-types'
import { Star } from '../Star/Star'
// const StarRating = createClass({
//     displayName: 'StarRating',
//     propTypes: {
//         totalStars: PropTypes.number
//     },
//     getDefaultProps() {
//         return {
//             totalStars: 5
//         }
//     },
//     getInitialState() {
//         return {
//             starsSelected: 0
//         }
//     },
//     change(starsSelected) {
//         this.setState({ starsSelected })
//     },
//     render() {
//         const { totalStars } = this.props
//         const { starsSelected } = this.state
//         return (
//             <div className="star-rating">
//                 {[...Array(totalStars)].map((n, i) =>
//                     <Star key={i} selected={i < starsSelected} onClick={() => this.change(i + 1)} />
//                 )}
//             </div>
//         )
//     }
// })

class StarRatingComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            starsSelected: props.starsSelected || 0
        }
        this.change = this.change.bind(this)
    }
    change(starsSelected) {
        this.setState({ starsSelected })
    }
    render() {
        const { totalStars } = this.props
        const { starsSelected } = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, j) =>
                    <Star key={j} selected={j < starsSelected} onClick={() => this.change(j + 1)} />
                )}
            </div>
        )
    }
}

StarRatingComponent.defaultProps = {
    totalStars: 10
}

StarRatingComponent.propTypes = {
    totalStars: PropTypes.number.isRequired
}

const StarRatingNostatus = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, j) =>
            <Star key={j} selected={j < starsSelected} onClick={() => onRate(j + 1)} />
        )}
    </div>



export { StarRatingComponent, StarRatingNostatus }
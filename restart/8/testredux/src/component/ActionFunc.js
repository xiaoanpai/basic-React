import C from './constants'

const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    })

const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    })

export { removeColor, rateColor }
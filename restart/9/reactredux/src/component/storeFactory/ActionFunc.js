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

const addColor = (title, value) =>
    ({
        id: new Date().toString(),
        type: C.ADD_COLOR,
        title,
        color: value,
        rating: 0
    })

export { removeColor, rateColor, addColor }
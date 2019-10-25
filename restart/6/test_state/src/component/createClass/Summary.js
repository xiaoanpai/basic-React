import React from 'react'
import { PropTypes } from 'prop-types'
/*
所有属性类型验证器都是函数。
为了实现自定义属性验证函数，我们将会对propTypes对象下的title属性和一个回调函数关联。
当渲染该组件时，React将会把属性对象和当前属性作为参数传递给该函数。
*/
// const SummaryCreateClass = createClass({
//     displayName: "Summary",
//     propTypes: {
//         ingredients: PropTypes.array.isRequired,
//         steps: PropTypes.array.isRequired,
//         title: (props, propName) =>
//             (typeof props[propName] !== 'string') ?
//                 new Error('A title must be a string') :
//                 (props[propName].length > 20) ?
//                     new Error(`title is over 20 characters`) :
//                     null
//     },
//     getDefaultProps() {
//         return {
//             ingredients: 0,
//             steps: 0,
//             title: "[recipe]"
//         }
//     },
//     render() {
//         const { ingredients, steps, title } = this.props
//         return (
//             <div className="summary">
//                 <h1>{title}</h1>
//                 <p>
//                     <span>{ingredients} ingredients</span> |
//                     <span>{steps} Steps</span>
//                 </p>
//             </div>
//         )
//     }
// })

class SummaryES6 extends React.Component {
    render() {
        const { ingredients, steps, title } = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} ingredients</span> |
                    <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
}

SummaryES6.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: (props, propName) =>
        (typeof props[propName] !== 'string') ?
            new Error('A title must be a string') :
            (props[propName].length > 20) ?
                new Error(`title is over 20 characters`) :
                null
}

SummaryES6.defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[recipe]"
}

const SummaryNostatus = ({ ingredients = 0, steps = 0, title = '[recipe]' }) => {
    return <div className="summary">
        <h1>{title}</h1>
        <p>
            <span>{ingredients} ingredients</span> |
        <span>{steps} Steps</span>
        </p>
    </div>
}

SummaryNostatus.propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired
}

SummaryNostatus.defaultProps = {
    ingredients: 1,
    steps: 1
}

// 类的静态属性

class SummaryStaic extends React.Component {
    static propTypes = {
        ingredients: PropTypes.number,
        steps: PropTypes.number,
        title: (props, propName) =>
            (typeof props[propName] !== 'string') ?
                new Error('A title must be a string') :
                (props[propName].length > 20) ?
                    new Error(`title is over 20 characters`) :
                    null
    }

    static defaultProps = {
        ingredients: 8,
        steps: 8,
        title: '[recipe]'
    }

    render() {
        const { ingredients, steps, title } = this.props
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} ingredients</span> |
                    <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
}

export { SummaryES6, SummaryNostatus, SummaryStaic }
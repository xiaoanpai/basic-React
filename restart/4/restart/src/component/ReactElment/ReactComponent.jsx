import React from 'react'

const items = [
    "a lb Salmon",
    "b lb Salmon",
    "c lb Salmon",
    "d lb Salmon",
    "e lb Salmon",
    "f lb Salmon",
]

// const IngredientsList = React.createClass({
//     displayName: "IngredientsList",
//     render() {
//         return React.createElement("ul", { "className": "ingredients" },
//             React.createElement("li", null, "1 lb Salmon"),
//             React.createElement("li", null, "2 lb Salmon"),
//             React.createElement("li", null, "3 lb Salmon"),
//             React.createElement("li", null, "4 lb Salmon"),
//             React.createElement("li", null, "5 lb Salmon")
//         )
//     }
// })

// const list = React.createElement(IngredientsList, null, null)

// // 数据作为属性传递给React组件

// const IngredientsList_props = React.createClass({
//     displayName: "IngredientsList",
//     render() {
//         return React.createElement("ul", { className: "ingredients" },
//             this.props.items.map((ingredient, i) =>
//                 React.createElement("li", { key: i }, ingredient)
//             )
//         )
//     }
// });

// const list_props = React.createElement(IngredientsList_props, { items }, null)


// // 使用自定义方法,  第一种使用方法

// const IngredientsList_zidingyi = React.createClass({
//     displayName: "IngredientsList",
//     renderListItem(ingredient, i) {
//         return React.createElement("li", { key: i }, ingredient)
//     },
//     render() {
//         return React.createElement("ul", { className: "ingredients" },
//             this.props.items.map(this.renderListItem)
//         )
//     }
// })


// 第一种使用方法

class IngredientsList_Component extends React.Component {
    renderListItem(ingredient, i) {
        return React.createElement("li", { key: i }, ingredient)
    }
    render() {
        return React.createElement("ul", { className: "ingredients" },
            this.props.items.map(this.renderListItem)
        )
    }
}

const IngredientsList_Component_new = React.createElement(IngredientsList_Component, { items }, null)

// 无状态函数

const IngredientsList = props =>
    React.createElement("ul", { className: "ingredients" },
        props.items.map((ingredient, i) =>
            React.createElement("li", { key: i }, ingredient)
        )
    )

// ES6属性参数解构

const IngredientsList_ES6 = ({items}) => 
  React.createElement("ul", {className: "ingredients"},
    items.map((ingredient, i) =>
      React.createElement("li",{key: i}, ingredient)
    )
  )

const IngredientsList_new = React.createElement(IngredientsList_ES6, { items }, null)

export { IngredientsList_Component_new,IngredientsList_new }
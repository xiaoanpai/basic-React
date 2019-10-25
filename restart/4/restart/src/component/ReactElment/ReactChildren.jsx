/*
React是采用props.children渲染子元素的。
*/
import React from 'react'
const dish = React.createElement(
    "ul",
    null,
    React.createElement("li", null, "1 lb Salmon"),
    React.createElement("li", null, "2 lb Salmon"),
    React.createElement("li", null, "3 lb Salmon"),
    React.createElement("li", null, "5 lb Salmon"),
    React.createElement("li", null, "6 lb Salmon"),
    React.createElement("ul", null,
        React.createElement("li", null, "7 lb Salmon"),
        React.createElement("li", null, "8 lb Salmon"),
    )
)

const items = [
    "a lb Salmon",
    "b lb Salmon",
    "c lb Salmon",
    "d lb Salmon",
    "e lb Salmon",
    "f lb Salmon",
]

// 将一个数组映射为li元素

const mapDish = React.createElement(
    "ul",
    { className: "ingredients" },
    items.map((ingredient, i) =>
        React.createElement("li", { key: i }, ingredient)
    )
)


export { dish, mapDish }
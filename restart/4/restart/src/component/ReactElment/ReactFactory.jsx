/*
React元素的方式是使用工厂类。
工厂类就是一个特殊的对象，它可以将实例化对象的细节封装起来
*/ 
import React from 'react'

// 第一个参数表示元素属性，第二个参数表示子节点。
// React.DOM.h1(null, 'Baked Salmon')

// 无序列表

// React.DOM.ul({"className": "ingredients"},
//   React.DOM.li(null, "1 lb Salmon"),
//   React.DOM.li(null, "2 lb Salmon"),
//   React.DOM.li(null, "3 lb Salmon"),
//   React.DOM.li(null, "4 lb Salmon"),
//   React.DOM.li(null, "5 lb Salmon")
// )

const items = [
    "1 lb Salmon",
    "2 cup Pine Nute",
    "3 cup Pine Nute",
    "4 cup Pine Nute",
    "5 cup Pine Nute"
]

const list = React.DOM.ul(
    {className: "ingredients"},
    items.map((ingredient,key) =>
      React.DOM.li({key}, ingredient)
    )
)

export {list}


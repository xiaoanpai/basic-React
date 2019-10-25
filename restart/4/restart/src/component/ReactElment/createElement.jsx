import React from 'react'

React.createElement("h1", null, "Baked Salmon")




// < h1 data-reactroot id = "recipe-0" data - type="title" > Baked Salmon</h1 >
React.createElement("h1",
    {
        id: "recipe-0",
        "data-type": "title"
    },
    "Baked Salmon"
)

/*
一个React元素只是一个JavaScript语法，用来告知React如何构造DOM元素
*/ 

// {
//   $$typeof: Symbol(React.element),
//   "type": "h1",
//   "key": null,
//   "ref": null,
//   "props": {"children": "Baked Salmon"},
//   "_owner": null,
//   "_store": {}
// }

/*
type属性是用来告知React需要创建的元素是HMTL还是SVG元素。
props属性表示构建一个DOM元素所需的数据和子元素。
children属性是用来将其他嵌套元素当作文本显示。
*/ 

const dish = React.createElement("h1",null,"Baked Salmon")

export default dish
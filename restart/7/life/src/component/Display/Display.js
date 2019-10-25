import { ProTypes } from 'prop-types'
import React, { Children } from 'react'


/*
  React.Children提供了一种可以访问特定组件子元素的方法。
  它允许用户统计、映射、循环，或者将props.children转换成一个数组。
  它还允许用户使用React.Children.only对正在显示的单个子节点进行验证。
*/

const Display = ({ ifTruthy = true, children }) =>
    (ifTruthy) ?
        Children.only(children) :
        null

const age = 22;

// const DisplayComponent = <Display ifTruthy={age >= 21}>
//     <h1>You can enter</h1>
// </Display>


// 对子组件进行扩展

const findChild = (children, child) => {

    console.log("wpw-test:", Children.toArray(children))
    console.log("wpw-test:", child)

    return Children.toArray(children)
        .filter(c => c.type === child)[0]
}


const WhenTruthy = ({ children }) =>
    Children.only(children)

const WhenFalsy = ({ children }) =>
    Children.only(children)

const DisplayFunc = ({ ifTruthy = true, children }) =>
    (ifTruthy) ?
        findChild(children, WhenTruthy) :
        findChild(children, WhenFalsy)

const ageFunc = 19

const DisplayFuncComponents = <DisplayFunc ifTruthy={ageFunc >= 21}>
    <WhenTruthy>
        <h1>You can enter</h1>
    </WhenTruthy>
    <WhenFalsy>
        <h1>Beat it kid</h1>
    </WhenFalsy>
</DisplayFunc>


export { DisplayFuncComponents }
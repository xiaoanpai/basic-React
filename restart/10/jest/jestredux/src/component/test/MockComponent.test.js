import { mount } from 'enzyme'
import React from 'react'
import {Expandable} from '../reducers/Expandable'
import TestReducer from './component/reducers/testReducer'
describe("Expandable Higher-Order Component", () => {
    let props,
        wrapper,
        ComponsedCompoent,
        MockComponent = ({ collapsed, expandCollapse }) =>
            <div onClick={expandCollapse}>
                {(collapsed) ? 'collapsed' : 'expanded'}
            </div>

    describe("Rendering UI")
    describe("Expand Collapse Functionality")
})
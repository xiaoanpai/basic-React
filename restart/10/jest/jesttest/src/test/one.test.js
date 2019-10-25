// import {addColor} from '../component/Reducers/reducer'
// it代表被测对象，第一个参数描述它的预期行为
// it('should return object when invoked', () => {
//     // 增加断言语句
// })

// 
import deepFreeze from 'deep-freeze'
const addColor = (action) => {
    action.id = '10'
    return action
}
describe('actions', () => {
    it('should return object when invoked', () => {
        // 增加断言语句
        

        const action = {
            id: '5',
            title: 'testTitle',
            type: 'TEST',
            date: new Date().toString()
        }
        deepFreeze(action)
        const actions = addColor(action)
        expect(actions.id).toBe("10")
        expect(actions.type).toBe('TEST')
    })
})
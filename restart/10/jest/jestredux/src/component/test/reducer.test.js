const actions = require('../reducers/reducer')
const deepFreeze = require('deep-freeze')
describe('actions', () => {


    it('should return object when invoked', () => {
        const actionsData = actions({ errorcode: 5 })
        expect(actionsData).toBe(6);
    })
    beforeAll(() => {
        console.warn("开始")
    })
    it('DeepFreeze', () => {
        const actionData = { errorcode: 10 }
        deepFreeze(actionData)
        actionData.errorcode = 5
        expect(actionData.errorcode).toEqual(5)
    })
})
import { EventEmitter } from 'events'

/*
Store主要用于存放应用程序逻辑和State数据的若干对象。
Store和MVC模式中的模型类似，不过Store并没有受限在单个对象中管理数据。
*/

class CountdownStore extends EventEmitter {
    constructor(count = 5, dispatcher) {
        super()
        this._count = count
        this.dispatcherIndex = dispatcher.register(
            this.dispatcher.bind(this)
        )
    }

    get count() {
        return this._count
    }

    dispatcher(payload) {
        const { type, count } = payload.action
        switch (type) {
            case "TICK":
                this._count = this._count - 1
                this.emit("TICK", this._count)
                return true
            case "RESET":
                this._count = count
                this.emit("RESET", this._count)
                return true
        }
    }
}

export {CountdownStore}
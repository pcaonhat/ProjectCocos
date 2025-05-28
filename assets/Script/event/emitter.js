const EventEmitter = require('events');
class Emitter {
    constructor() {
        this._emiter = new EventEmitter();
        this._emiter.setMaxListeners(100);
    }
    emit(...args) {
        this._emiter.emit(...args);
    }
    registerEvent(event, listener) {
        this._emiter.on(event, listener);
    }
    registerOnce(event, listener) {
        this._emiter.once(event, listener);
    }
    removeEvent(event, listener) {
        this._emiter.removeListener(event, listener);
    }
    registerEventMap(eventMap) {
        for (let eventName in eventMap) {
            this.registerEvent(eventName, eventMap[eventName]);
        }
    }
    unregisterEventMap(eventMap) {
        for (let eventName in eventMap) {
            this.removeEvent(eventName, eventMap[eventName]);
        }
    }
    destroy() {
        this._emiter.removeAllListeners();
        this._emiter = null;
        Emitter.instance = null;
    }
}

module.exports = new Emitter();
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

export default class Observable {
  private varToObserve;

  constructor(varToObserve) {
    this.varToObserve = varToObserve;
  }

  public notifyChanges(newValue) {
    myEmitter.emit(this.varToObserve, newValue);
  }

  public subscribe(callback) {
    myEmitter.on(this.varToObserve, callback);
  }

  public subscribeOneChange(callback) {
    myEmitter.once(this.varToObserve, callback);
  }
}

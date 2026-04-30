import { makeAutoObservable } from "mobx";

export default class CounterStore {
  title = "Counter Store";
  count = 42;
  events: string[] = [`Initial count is ${this.count}`];

  constructor() {
    makeAutoObservable(this);
  }

  increment = (mount = 1) => {
    this.count += mount;
    this.events.push(`Incremented by ${mount}, - count is now ${this.count}`);
  };

  decrement = (mount = 1) => {
    this.count -= mount;
    this.events.push(`Decremented by ${mount}, - count is now ${this.count}`);
  };

  get eventCount() {
    return this.events.length;
  }
}

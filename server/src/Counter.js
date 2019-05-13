class Counter {
  constructor() {
    this.value = 0
  }
  increment() {return this.value += 1}
}
const Controller = new Counter()

export default Controller

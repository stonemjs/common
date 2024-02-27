export class AbstractEvent {
  constructor (name, context, data = null) {
    this.name = name
    this.data = data
    this.context = context
  }
}

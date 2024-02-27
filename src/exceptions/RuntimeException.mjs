/**
 * Class representing a RuntimeException.
 */
export class RuntimeException extends Error {
  constructor (message, code = null, metadata = null, previous = null) {
    super()
    this.message = message
    this.metadata = metadata
    this.previous = previous
    this.name = 'stone-js.runtime'
    this.code = code ?? 'RUNTIME-5000'
  }
}

import { RuntimeException } from './RuntimeException.mjs'

/**
 * Class representing a LogicException.
 */
export class LogicException extends RuntimeException {
  constructor (message, code = null, metadata = null, previous = null) {
    super(message, code ?? 'LOGIC-5000', metadata, previous)
    this.name = 'stone-js.logic'
  }
}

import { RuntimeException } from "./RuntimeException.mjs"

/**
 * Class representing an Exception.
 */
export class HttpException extends RuntimeException {
  constructor (statusCode, statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    super(message ?? statusMessage, code ?? `HTTP-${statusCode}`, metadata, previous)

    this.body = body
    this.headers = headers
    this.statusCode = statusCode
    this.statusMessage = statusMessage
  }
}

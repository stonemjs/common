import { RuntimeException } from "./RuntimeException.mjs"

/**
 * Class representing an Exception.
 */
export class HttpException extends RuntimeException {

  static suspiciousOperation (statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    return new this(400, statusMessage, headers, body, message, code, metadata, previous)
  }

  static unauthorized (statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    return new this(401, statusMessage, headers, body, message, code, metadata, previous)
  }

  static notFound (statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    return new this(404, statusMessage, headers, body, message, code, metadata, previous)
  }

  static methodNotAllowed (statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    return new this(405, statusMessage, headers, body, message, code, metadata, previous)
  }

  static tooManyRequests (statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    return new this(429, statusMessage, headers, body, message, code, metadata, previous)
  }

  static throttleRequests (statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    return new this(429, statusMessage, headers, body, message, code, metadata, previous)
  }

  static ServiceUnavailable (statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    return new this(503, statusMessage, headers, body, message, code, metadata, previous)
  }

  constructor (statusCode, statusMessage = null, headers = [], body = null, message = null, code = null, metadata = null, previous = null) {
    super(message ?? statusMessage, code ?? `HTTP-${statusCode}`, metadata, previous)

    this.body = body
    this.headers = headers
    this.statusCode = statusCode
    this.statusMessage = statusMessage
  }
}

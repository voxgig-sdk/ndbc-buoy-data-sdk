
import { Context } from './Context'


class NdbcBuoyDataError extends Error {

  isNdbcBuoyDataError = true

  sdk = 'NdbcBuoyData'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NdbcBuoyDataError
}


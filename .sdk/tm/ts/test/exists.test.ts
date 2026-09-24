
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NdbcBuoyDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NdbcBuoyDataSDK.test()
    equal(testsdk instanceof NdbcBuoyDataSDK, true,
      'NdbcBuoyDataSDK.test() must return a client synchronously')
  })

})

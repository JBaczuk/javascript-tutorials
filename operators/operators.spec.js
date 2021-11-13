const { expect } = require('@jest/globals')
const { nullishCoalescingOperator } = require('./operators')

describe('operators', () => {
  describe('nullishCoalescingOperator', () => {
    it('works for nullish', () => {
      const nullishValues = [null, undefined]
      for (const nullishValue of nullishValues) {
        const result = nullishCoalescingOperator(nullishValue)
        expect(result).toBe('the value was nullish')
      }
    })
    it('skips non-nullish', () => {
      const falsyValues = [0, -0, 0n, '', NaN]
      for (const falsyValue of falsyValues) {
        const result = nullishCoalescingOperator(falsyValue)
        expect(result).toBe(falsyValue)
      }
    })
  })
})

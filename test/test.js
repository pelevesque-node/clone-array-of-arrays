/* global describe, it */
'use strict'

const expect = require('chai').expect
const cloneArrayOfArrays = require('../index')

describe('#cloneArrayOfArrays()', () => {
  it('should return an exact copy of the original array', () => {
    const arr = [ [0, 0], [0, 1], [0, 2] ]
    const result = JSON.stringify(cloneArrayOfArrays(arr))
    const expected = JSON.stringify(arr)
    expect(result).to.equal(expected)
  })

  it('should be a clone, not a reference', () => {
    let arr = [ [0, 0], [0, 1], [0, 2] ]
    let clone = cloneArrayOfArrays(arr)
    arr[0] = [1, 1]
    clone[1] = [2, 2]
    const result = JSON.stringify(clone)
    const expected = JSON.stringify([ [0, 0], [2, 2], [0, 2] ])
    expect(result).to.equal(expected)
  })
})

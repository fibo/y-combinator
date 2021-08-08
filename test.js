import assert from 'assert'
import y from './y.js'

const factorial = y(function (fac) {
  return function (n) {
    return n <= 2 ? n : n * fac(n - 1)
  }
})

assert.equal(factorial(5), 120)

const factorialArrow = y((fac) => (n) => (n <= 2 ? n : n * fac(n - 1)))

assert.equal(factorialArrow(5), 120)

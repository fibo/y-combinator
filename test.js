const test = require('tape')
const assert = require('assert')
const Y = require('./index')

test('factorial', (t) => {
  t.plan(2)

  const factorial = Y(function (fac) {
    return function (n) {
      return n <= 2 ? n : n * fac(n - 1)
    }
  })

  t.equal(factorial(5), 120)

  const factorialArrow = Y(fac => n => n <= 2 ? n : n * fac(n - 1))

  t.equal(factorialArrow(5), 120)
})

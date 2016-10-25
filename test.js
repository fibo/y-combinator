var test = require('tape')
var assert = require('assert')
var Y = require('./index')

test('factorial', function (t) {
  t.plan(1)

  var factorial = Y(function (fac) {
    return function (n) {
      return n <= 2 ? n : n * fac(n - 1)
    }
  })

  var number120 = factorial(5)

  t.equal(number120, 120)
})

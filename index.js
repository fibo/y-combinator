function Y(le) {
  return (function (f) {
    return f(f)
  }(function (f) {
    return le(function (x) {
      return f(f)(x)
    })
  }))
}
module.exports = Y

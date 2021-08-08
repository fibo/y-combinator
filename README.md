# y-combinator

> is one of the fixed-point combinators in untyped lambda calculus

All credits go to [Haskell Curry](https://en.wikipedia.org/wiki/Haskell_Curry).

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

## Installation

```bash
npm install y-combinator
```

## Annotated source

I have no idea what is the Y combinator operator (maybe one day I will :P),
I have just stolen the code from a guy called [Douglas Crockford a.k.a Walker Texas JS](http://www.crockford.com/javascript/little.html).

Here it is the code, it is a function that consumes a function and returns a function, that consumes a function that returns a function ...

    export default function y(le) {
      return (function (f) {
        return f(f)
      }(function (f) {
        return le(function (x) {
          return f(f)(x)
        })
      }))
    }

## Example

**Q.** What can I do with the Y Combinator?

**A.** Mmh, for example you can use it to get a factorial function, the following code works!

```js
import y from 'y-combinator'

const factorial = y(fac => n => n <= 2 ? n : n * fac(n - 1))

console.log(factorial(5)) // 120
```

## License

[MIT](http://g14n.info/mit-license)

[KLP]: http://g14n.info/kiss-literate-programming "KISS Literate Programming"

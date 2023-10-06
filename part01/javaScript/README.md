# JavaScript

- [ECMAScript]
- JS must be transpiled using [Babel]
- Transpilation is automatically configured in React applications created with vite.  
- [Node.js] is a JavaScript runtime environment based on Google's [Chrome V8] JavaScript engine and works practically anywhere - from servers to mobile phones.

## variables

- [variables.js](./variables.js)
- [`const`] does not define a variable but a constant for which the value can no longer be changed. On the other hand, [`let`] defines a normal variable.


## [array]s

- [arrays.js](./arrays.js)
- [`forEach`] calls the function for each of the items in the array, always passing the individual item as an argument.
- One characteristic of the functional programming paradigm is the use of [immutable] data structures. In React code, it is preferable to use the method [`concat`], which creates a new array with the added item. This ensures the original array remains unchanged.
- [`map`](./mapDemo.js)
- Individual items of an array are easy to assign to variables with the help of the [destructuring assignment].
  - [desass.js](./desass.js)

## [object]s

- two ways to define:
  - object literals
  - constructor functions

## [function]s













[ECMAScript]: https://en.wikipedia.org/wiki/ECMAScript
[Babel]: https://babeljs.io/
[Node.js]: https://nodejs.org/en
[Chrome V8]: https://v8.dev/
[`const`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[`let`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[`var`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[`let`, `var`, or `const`]: https://medium.com/podiihq/javascript-variables-should-you-use-let-var-or-const-394f7645c88f
[`let` vs `var`]: https://www.jstips.co/en/javascript/keyword-var-vs-let/
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[`forEach`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[immutable]: https://en.wikipedia.org/wiki/Immutable_object
[`concat`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
[`map`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[destructuring assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
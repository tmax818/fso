
# [Part 1b: JavaScript](https://fullstackopen.com/en/part1/java_script)

- most current is [ECMAScript2023] aka ES14
- >Browsers do not yet support all of JavaScript's newest features. Due to this fact, a lot of code run in browsers has been transpiled from a newer version of JavaScript to an older, more compatible version.
- Today, the most popular way to do transpiling is by using [Babel]. 
- [Node.js] is a JavaScript runtime environment based on Google's [Chrome V8] JavaScript engine and works practically anywhere - from servers to mobile phones. 




## [variables](https://fullstackopen.com/en/part1/java_script#variables)


- In JavaScript there are a few ways to go about defining variables:

```js
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error
```


>[const] does not define a variable but a constant for which the value can no longer be changed. On the other hand, [let] defines a normal variable.

- [var] can be used, but 

>During this course the use of var is ill-advised and you should stick with using const and let!

## [arrays](https://fullstackopen.com/en/part1/java_script#arrays)

- [array]s 

```js

const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})                    
```

- Notable in this example is the fact that the contents of the array can be modified even though it is defined as a [const]
- the variable always points to the same object.
- [`push`] adds a new item to the end of the array
- [`forEach`] receives a function defined using the arrow syntax as a parameter.

```js
value => {
  console.log(value)
}
```

>When using React, techniques from functional programming are often used. One characteristic of the functional programming paradigm is the use of [immutable] data structures. In React code, it is preferable to use the method [`concat`], which creates a new array with the added item. This ensures the original array remains unchanged.

```js
const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed
```

>Based on the old array, [map] creates a new array, for which the function given as a parameter is used to create the items. In the case of this example, the original value is multiplied by two.

[map] can also transform the array into something completely different:


```js
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

```

>Individual items of an array are easy to assign to variables with the help of the [destructuring assignment].

```js
const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed
```

## [objects](https://fullstackopen.com/en/part1/java_script#objects)



## [functions](https://fullstackopen.com/en/part1/java_script#functions)

## [exercises 1.3-1.5)](https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5)





-----------


[ECMAScript2023]: https://www.ecma-international.org/ecma-262/
[React]: https://react.dev
[Vite]: https://vitejs.dev
[Vite default port]: https://vitejs.dev/config/server-options.html#server-port
[create-react-app]: https://github.com/facebook/create-react-app
[React component]: https://react.dev/learn/your-first-component
[arrow functions]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[ECMAScript 6]: http://es6-features.org/#Constants
[JSX]: https://react.dev/learn/writing-markup-with-jsx
[Babel]: https://babeljs.io/
[XML]: https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction
[props]: https://react.dev/learn/passing-props-to-a-component
[fragments]: https://react.dev/reference/react/Fragment
[example submission repository]: https://github.com/fullstack-hy2020/example-submission-repository
[Node.js]: https://nodejs.org/en/
[Chrome V8]: https://v8.dev/
[const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[`forEach`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[`push`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[immutable]: https://en.wikipedia.org/wiki/Immutable_object
[`concat`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
[`map`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[destructuring assignment]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment









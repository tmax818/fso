
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

- define objects with [object literals]

```js
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}


// The values of the properties can be of any type, like integers, strings, arrays, objects...

// The properties of an object are referenced by using the "dot" notation, or by using brackets:

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

// You can also add properties to an object on the fly by either using dot notation or brackets:

object1.address = 'Helsinki'
object1['secret number'] = 12341


const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}


```


>Objects can also be defined using so-called constructor functions, which results in a mechanism reminiscent of many other programming languages, e.g. Java's classes. Despite this similarity, JavaScript does not have classes in the same sense as object-oriented programming languages. There has been, however, an addition of the class syntax starting from version ES6, which in some cases helps structure object-oriented classes.


## [functions](https://fullstackopen.com/en/part1/java_script#functions)


- defining arrow functions:

```js
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

// function call:

const result = sum(1, 5)
console.log(result)


// function with single param can omit the ():

const square = p => {
  console.log(p)
  return p * p
}

// functions with a single expression in the body can omit {}

const square = p => p * p

```

[function declaration] 

```js
function product(a, b) {
  return a * b
}

const result = product(2, 6)
// result is now 12
```

[function expression]

```js
const average = function(a, b) {
  return (a + b) / 2
}

const result = average(2, 5)
// result is now 3.5

```

>During this course, we will define all functions using the arrow syntax.



## [exercises 1.3-1.5](https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5)

### [1.3: course information step3](./exercises/1_3course_info/README.md)

### [1.4: course information step4](./exercises/1_4course_info/README.md)

### [1.5: course information step5](./exercises/1_5course_info/README.md)

## [object methods and `this`](https://fullstackopen.com/en/part1/java_script#object-methods-and-this)

>Arrow functions and functions defined using the function keyword vary substantially when it comes to how they behave with respect to the keyword [`this`], which refers to the object itself.

- we can assign methods to an object by defining properties that are functions:

```js
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed

// methods can be assigned after object creation

arto.growOlder = function() {
  this.age += 1
}


console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed

```

>When calling the method through a reference, the method loses knowledge of what the original [`this`] was. Contrary to other languages, in JavaScript the value of [`this`] is defined based on how the method is called. When calling the method through a reference, the value of [`this`] becomes the so-called global object and the end result is often not what the software developer had originally intended.

```js
arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
```

>Losing track of this when writing JavaScript code brings forth a few potential issues. Situations often arise where React or Node (or more specifically the JavaScript engine of the web browser) needs to call some method in an object that the developer has defined. However, in this course, we avoid these issues by using "this-less" JavaScript.

>If you want to gain a better understanding of how this works in JavaScript, the Internet is full of material about the topic, e.g. the screencast series [Understand JavaScript's this Keyword in Depth] by egghead.io is highly recommended!

## [classes](https://fullstackopen.com/en/part1/java_script#classes)

>As mentioned previously, there is no class mechanism in JavaScript like the ones in object-oriented programming languages. There are, however, features to make "simulating" object-oriented [classes] possible.

>When it comes to syntax, the classes and the objects created from them are very reminiscent of Java classes and objects. Their behavior is also quite similar to Java objects. At the core, they are still objects based on JavaScript's [prototypal inheritance]. The type of both objects is actually Object, since JavaScript essentially only defines the [primitive] types Boolean, Null, Undefined, Number, String, Symbol, BigInt, and [Object]s.

>We're using [hooks]

## [java-script-materials](https://fullstackopen.com/en/part1/java_script#java-script-materials)

>It is highly recommended to immediately read [A re-introduction to JavaScript (JS tutorial)] on Mozilla's website.

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
[object literals]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals
[function declaration]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
[function expression]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
[`this`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[Understand JavaScript's this Keyword in Depth]: https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth
[classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[prototypal inheritance]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
[data structure]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
[hooks]: https://react.dev/reference/react
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects
[primative]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values
[A re-introduction to JavaScript (JS tutorial)]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview
[You don't know JS]: https://github.com/getify/You-Dont-Know-JS
[javascript.info]: https://javascript.info/




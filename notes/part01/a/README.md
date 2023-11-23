# [Part 1a: introduction to React](https://fullstackopen.com/en/part1/introduction_to_react)



>Let's create an application called [part1](), navigate to its directory and install the libraries:


- npm version: 9.5.1

```bash
# npm 6.x (outdated, but still used by some):
npm create vite@latest part1 --template react

# npm 7+, extra double-dash is needed:
npm create vite@latest part1 -- --template react
```

- The code of the application resides in the src folder. Let's simplify the default code such that the contents of the file [main.jsx](./part1/src/main.jsx) looks like this:

```js
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

- [App.jsx](./part1/src/App.jsx)


## [create-react-app](https://fullstackopen.com/en/part1/introduction_to_react#create-react-app)

## [component](https://fullstackopen.com/en/part1/introduction_to_react#component)

- [App.jsx](./part1/src/App.jsx) is a [React component]

- [index.html](./part1/index.html)
- functions can be defined using [arrow functions] described in [ECMAScript 6]

>Let us repeat this together: I promise to keep the console open all the time during this course, and for the rest of my life when I'm doing web development.

## [JSX](https://fullstackopen.com/en/part1/introduction_to_react#jsx)

>Although JSX looks like HTML, we are dealing with a way to write JavaScript. Under the hood, JSX returned by React components is compiled into JavaScript. After compiling, our application looks like this:

```js
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
        'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}
```

Before:

```js
const App = () => {
    const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
```

- compilation is handled by [Babel]

> Projects created with [create-react-app] or [Vite] are configured to compile automatically.


> In practice, JSX is much like HTML with the distinction that with JSX you can easily embed dynamic content by writing appropriate JavaScript within curly braces. The idea of JSX is quite similar to many templating languages, such as Thymeleaf used along with Java Spring, which are used on servers.
> JSX is "[XML]-like", which means that every tag needs to be closed. 


## [multiple components](https://fullstackopen.com/en/part1/introduction_to_react#multiple-components)

- modify [App.jsx](./part1/src/App.jsx):

```jsx
const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello />
    </div>
  )
}
```

>Writing components with React is easy, and by combining components, even a more complex application can be kept fairly maintainable. Indeed, a core philosophy of React is composing applications from many specialized reusable components.

>Another strong convention is the idea of a root component called App at the top of the component tree of the application. Nevertheless, as we will learn in part 6, there are situations where the component App is not exactly the root, but is wrapped within an appropriate utility component.


## [props: passing data to components](https://fullstackopen.com/en/part1/introduction_to_react#props-passing-data-to-components)

>It is possible to pass data to components using so-called [props].

modify Hello:

```jsx
const Hello = (props) => {
  return (
    <div>

      <p>Hello {props.name}</p>
    </div>
  )
}
```

>There can be an arbitrary number of props and their values can be "hard-coded" strings or the results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.

```jsx
const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
```

## [possible error messages](https://fullstackopen.com/en/part1/introduction_to_react#possible-error-message)

- not getting the errors, but it's cool to know that [.eslintrc.cjs](./part1/.eslintrc.cjs) exists. More in part 3

## [some notes](https://fullstackopen.com/en/part1/introduction_to_react#some-notes)

- take very small steps and test
- console should always be open
- first letter of [React component]s are capitalized 

>Note that the content of a React component (usually) needs to contain one root element. If we, for example, try to define the component App without the outermost div-element. Using a root element is not the only working option. An array of components is also a valid solution:

```jsx

const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}

```

- you can use [fragments] instead of divs.

## [do not render objects](https://fullstackopen.com/en/part1/introduction_to_react#do-not-render-objects)

- the code will break

## [exercises 1.1-1.2](https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2)

- Do not submit your work until you have completed all of the exercises you want to submit for the part.


```
part0
part1
  courseinfo
  unicafe
  anecdotes
part2
  phonebook
  countries
```

### [1.1: course information step1](./exercises/1_1course_info/README.md)


### [1.2: course information step2](./exercises/1_2course_info/README.md)

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
# [introduction to React](https://fullstackopen.com/en/part1/introduction_to_react)

## create-react-app

- The easiest way is [Vite]

```bash
npm create vite@latest part1 --template react
cd part1
npm install

```

## [Component](./part1/src/App.jsx)


## [JSX]

>JSX is "XML-like", which means that every tag needs to be closed. 


## multiple components

>Indeed, a core philosophy of React is composing applications from many specialized reusable components.

## [props]: passing data to components

- updated [Hello](./part1/src/Hello.jsx) to include props:

```jsx
// Hello.jsx
const Hello = (props) => {
  return (
    <div>

      <p>Hello {props.name}</p>
    </div>
  )
}
```

- the 'user' of the component defines the props. In this case the user is [App.jsx](./part1/src/App.jsx)

```jsx
// App.jsx
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='George' />
      <Hello name='Daisy' />
    </div>
  )
}

```

>There can be an arbitrary number of props and their values can be "hard-coded" strings or the results of JavaScript expressions. If the value of the prop is achieved using JavaScript it must be wrapped with curly braces.

## possible error messages

didn't get em..

## some notes

- little bit of code and test
- console should always be open

> Using a root element is not the only working option. An array of components is also a valid solution:


```jsx
const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name='Maya' age={26 + 10} />,
    <Footer />
  ]
}
```

use [fragments] to avoid extra div elements.


## do not render objects

>The core of the problem is Objects are not valid as a React child, i.e. the application tries to render objects and it fails again.


## exercises 1.1 - 1.2

### 1.1: course information, step1


>"The only way to go fast, is to go well"
>       -- Uncle Bob









[React]: https://react.dev/
[Vite]: https://vitejs.dev/
[JSX]: https://react.dev/learn/writing-markup-with-jsx
[props]: https://react.dev/learn/passing-props-to-a-component
[fragments]: https://react.dev/reference/react/Fragment
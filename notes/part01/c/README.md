# [Part 1c: component, state, event handlers](https://fullstackopen.com/en/part1/component_state_event_handlers)

- start with a new example [part1c]()

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest part1c -- --template react
```

```jsx
const Hello = (props) => {
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
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

```

## [component helper functions](https://fullstackopen.com/en/part1/component_state_event_handlers#component-helper-functions)

- add helper function to [Hello.jsx](./part1c/src/components/Hello.jsx)

```jsx
  const bornYear = () => {
      const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
```
## [destructuring](https://fullstackopen.com/en/part1/component_state_event_handlers#destructuring)


>Before we move forward, we will take a look at a small but useful feature of the JavaScript language that was added in the ES6 specification, that allows us to [destructure] values from objects and arrays upon assignment.

props can be [destructure]d as: 

```jsx
const Hello = ({ name, age }) => {
    // Note the more compact syntax for arrow functions: 
  const bornYear = () => new Date().getFullYear() - age

  return (
      <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```
## [Page re-rendering](https://fullstackopen.com/en/part1/component_state_event_handlers#page-re-rendering)

>So far all of our applications have been such that their appearance remains the same after the initial rendering. What if we wanted to create a counter where the value increased as a function of time or at the click of a button?

- section displays a weird work around to re-render the page

## [Page re-rendering](https://fullstackopen.com/en/part1/component_state_event_handlers#stateful-component)

>Next, let's add state to our application's App component with the help of React's [state hook].

change [App.jsx](./part1c/src/App.jsx):

add:

```jsx
// imports the useState function:
import { useState } from 'react'
```

```jsx
// The function body that defines the component begins with the function call:
const [ counter, setCounter ] = useState(0)
// The function returns an array that contains two items. The counter variable is assigned the initial value of state which is zero. The variable setCounter is assigned a function that will be used to modify the state.
```
>The function call adds state to the component and renders it initialized with the value of zero. 


## [event handling](https://fullstackopen.com/en/part1/component_state_event_handlers#event-handling)

- [event handlers](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#event-handlers-and-callback-functions)

>Let's change the application so that increasing the counter happens when a user clicks a [button], which is implemented with the button element.

- [App.jsx](./part1c/src/App.jsx) now has a button and an event handler function:

```jsx
  const handleClick = () => console.log('clicked')
  
    <button onClick={handleClick}>
        plus
    </button>
```

## [an event handler is a function](https://fullstackopen.com/en/part1/component_state_event_handlers#event-handling)

>We define the event handlers for our buttons where we declare their onClick attributes:

```jsx
<button onClick={() => setCounter(counter + 1)}> 
  plus
</button>
```

- this would break:

```jsx
<button onClick={setCounter(counter + 1)}> 
  plus
</button>
```

>An event handler is supposed to be either a **function** or a **function reference** not a **function call**.

- the `onClick` attribute defines what happens when the button is clicked! 

>Usually defining event handlers within JSX-templates is not a good idea. Here it's ok, because our event handlers are so simple. Let's separate the event handlers into separate functions anyway:


```jsx

  const increaseByOne = () => setCounter(counter + 1)
  
  const setToZero = () => setCounter(0)


  // the buttons' onClick has a reference to the functions, not function invocations

<button onClick={increaseByOne}>
<button onClick={setToZero}>

```

## [passing state to child component](https://fullstackopen.com/en/part1/component_state_event_handlers#passing-state-to-child-components)

>It's recommended to write React components that are small and reusable across the application and even across projects. Let's refactor our application so that it's composed of three smaller components, one component for displaying the counter and two components for buttons.

>Let's first implement a [Display](./part1c/src/components/Display.jsx) component that's responsible for displaying the value of the counter.

- make a [Button](./part1c/src/components/Button.jsx) component:

```jsx
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
```

## [Changes in state cause rerendering](https://fullstackopen.com/en/part1/component_state_event_handlers#changes-in-state-cause-rerendering)



-----
[destructure]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[state hook]: https://react.dev/learn/state-a-components-memory
[`setTimeout()`]: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
[button]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
[MouseEvent]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
[click event]: https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
[registering an event handler function]: https://react.dev/learn/responding-to-events
[lift state up]: https://react.dev/learn/sharing-state-between-components
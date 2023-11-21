# component state, event handlers

## component helper functions

- If we examine our current code closely, we'll notice that the helper function is defined inside of another function that defines the behavior of our component. 

## destructuring

```js
{name, age} = props
```

## page re-rendering

## stateful component

>When the state modifying function `setCounter` is called, React re-renders the component which means that the function body of the component function gets re-executed:

## event handling

>Button elements support so-called [mouse events], of which click is the most common event. The click event on a button can also be triggered with the keyboard or a touch screen despite the name mouse event.

[mouse events]: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
[responding to events]: https://react.dev/learn/responding-to-events

```js
  const handleClick = () => {
    console.log('clicked')
  }

```
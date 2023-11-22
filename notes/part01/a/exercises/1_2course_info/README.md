
> # 1.2: course information, step2

> Refactor the [Content](./courseinfo/src/components/Content.jsx) component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three [Part](./courseinfo/src/components/Part.jsx) components of which each renders the name and number of exercises of one part.

```jsx
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```


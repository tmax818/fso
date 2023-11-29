# [Part 1d: a more complex state, debugging React apps](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps)


## [complex state](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#complex-state)

>In most cases, the easiest and best way to accomplish this is by using the `useState` function multiple times to create separate "pieces" of state.

- I elected to start with a new example app [part1d](./part1d/README.md)

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest part1d -- --template react
```

- change [App.jsx](./part1d/src/App.jsx)


## [handling arrays](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#handling-arrays)

> Let's add a piece of state to our application containing an array allClicks that remembers every click that has occurred in the application.
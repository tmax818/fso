# [introduction to React]()## [Part 1a: introduction to React](https://fullstackopen.com/en/part1/introduction_to_react)



>Let's create an application called [part1](), navigate to its directory and install the libraries:


- npm version: 9.5.1

```
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

[React]: https://react.dev
[Vite]: https://vitejs.dev
[Vite default port]: https://vitejs.dev/config/server-options.html#server-port
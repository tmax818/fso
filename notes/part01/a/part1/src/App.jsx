
// Technically the component is defined as a JavaScript function.
// The function is then assigned to a constant variable App:

import Hello from "./components/Hello"
import AppArray from "./components/AppArray"


const App = () => {
  console.log("Hello from component")
  console.log("The function defining the component may contain any kind of JavaScript code....")

  // It is also possible to render dynamic content inside of a component.
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Peter'
  const age = 10
  const obj = {name: 'Peter', age: 4}
  const numsArray = ["1 ", 2, " three"]
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>

      <Hello />
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} now={now.toString()}/>

      {/* // Any JavaScript code within the curly braces is evaluated and the result of this evaluation is embedded into the defined place in the HTML produced by the component. */}
      {/* <p>{obj}</p> */}
      {console.log("test")}
      <p>{numsArray}</p> 
      React also allows arrays to be rendered if the array contains values ​​that are eligible for rendering (such as numbers or strings). So the following program would work, although the result might not be what we want like the above...

      <AppArray />
    </div>
  )
}

export default App;

// As you probably guessed, the component will be rendered as a div-tag, which wraps a p-tag containing the text Hello world.
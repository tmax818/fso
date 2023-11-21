import { useState } from "react"

import Hello from "./Hello"


const App = () => {
  const [counter, setCounter] = useState(0)


  // setTimeout(()=> setCounter(counter + 1),1000)

  const handleClick = () => {
    console.log('clicked')
    setCounter(counter + 1)
  }

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0)

  console.log('rendering....', counter)

  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />

      <p>{counter}</p>

      <button onClick={increaseByOne}>+</button>
      <button onClick={setToZero}>0</button>
    </div>
  )
}

export default App;
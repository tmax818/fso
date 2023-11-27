import { useState } from 'react'
import Hello from "./components/Hello"
import Display from './components/Display'
import Button from './components/Button'
const App = () => {

  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  console.log('rendering...from line 16', counter)

  const handleClick = () => console.log('click')


  return (
    <div>
      {/* <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} /> */}


      <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />  

      <hr />
      <h2>practice crap below</h2>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
      <div>
      <button onClick={handleClick}>plus with <code>handleClick</code> function</button> 
      {/* We set the value of the button's onClick attribute to be a reference to the handleClick function defined in the code. */}
      </div>

      <div>

      <button onClick={() => setCounter(counter + 1)} >inline plus</button>
      <button onClick={()=>console.log('inline click')} >inline <code>console.log</code> </button>
      {/* The event handler function can also be defined directly in the value assignment of the onClick-attribute: */}
      </div>

      <button onClick={() => setCounter(0)}>zero</button>
      <p>
      When the state modifying function <code>setCounter</code> is called, React re-renders the component which means that the function body of the component function gets re-executed:
      </p>
    </div>
  )
}

export default App

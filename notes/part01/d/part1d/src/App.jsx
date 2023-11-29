import { useState } from 'react'

import ObjectCounter from './components/ObjectCounter'
import ObjectCounterSpread from './components/ObjectCounterSpread'
import ArrayCounter from './components/ArrayCounter'


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}

      <hr />

      <ObjectCounter />

      <hr />

      <ObjectCounterSpread />
    
      <hr />

      <ArrayCounter />


    </div>
  )
}

export default App

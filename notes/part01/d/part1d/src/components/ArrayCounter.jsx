import React, {useState} from 'react'

const ArrayCounter = () => {

    //set state
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    // event handlers;
    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
      }
    
      const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
      }

      return (
        <div>
          {left}
          <button onClick={handleLeftClick}>left</button>
          <button onClick={handleRightClick}>right</button>
          {right}
          <p>{allClicks.join(' ')}</p>
        </div>
      )

}

export default ArrayCounter
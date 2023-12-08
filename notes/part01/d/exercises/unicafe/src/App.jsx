import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral:0,
    bad:0,
    all: function all(){
      return this.good + this.neutral + this.bad
    },
    average: function average(){
      let avg = (this.good  + this.bad * -1)/(this.good + this.neutral + this.bad)
      return avg;
    },
    positive: function positive(){
      let pos = (this.good/(this.good + this.neutral + this.bad) * 100)
      return pos;
    }
  })

  const handleClick = (item)=>{
    setFeedback({...feedback, [item]: feedback[item] + 1})
  }

  console.log(feedback.all())
  return (
    <div>

      <h1>give feedback</h1>
      <Button text={"good"} handleClick={handleClick}/>
      <Button text={"neutral"} handleClick={handleClick}/>
      <Button text={"bad"} handleClick={handleClick}/>

    


    <Statistics feedback={feedback}/>

    </div>
  )
}

export default App
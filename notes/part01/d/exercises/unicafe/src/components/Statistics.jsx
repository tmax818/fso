import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({feedback}) => {

    if(feedback.all() === 0){
        return(
            <>
            <h2>statistics</h2>
            no feedback given
            </>
        )
    }

  return (
    <div>

    <h2>statistics</h2>

      {/* <StatisticLine text={"good"} feedback={feedback} />
      <StatisticLine text={"neutral"} feedback={feedback} />
      <StatisticLine text={"bad"} feedback={feedback} />
      <StatisticLine text={"all"} feedback={feedback} />
      <StatisticLine text={"average"} feedback={feedback} />
      <StatisticLine text={"positive"} feedback={feedback} />

      try with map  */}
      <table>

      {Object.keys(feedback).map( (k, i) => {
        return(
          <StatisticLine key={i} text={k} feedback={feedback} />
          )
        })}
        </table>
    
      {/* <p>good: {feedback.good}</p>
      <p>neutral: {feedback.neutral}</p>
      <p>bad: {feedback.bad}</p>
      <p>all: {feedback.all()}</p> */}
      {/* <p>average: {feedback.average() || 0}</p>
      <p>positive: {feedback.positive() || 0} %</p>  */}
    </div>
  )
}

export default Statistics
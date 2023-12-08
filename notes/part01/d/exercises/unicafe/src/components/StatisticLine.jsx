import React from 'react'

const StatisticLine = ({text, feedback}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{typeof(feedback[text]) === "function" ? feedback[text]() : feedback[text]}</td>
    </tr>
    // <p>{text}: {typeof(feedback[text]) === "function" ? feedback[text]() : feedback[text]}</p>
  )
}

export default StatisticLine
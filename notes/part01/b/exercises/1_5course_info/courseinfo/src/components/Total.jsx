import React from 'react'

const Total = (props) => {
  console.log(props.parts)
  let total = 0
  props.parts.forEach(part => total += part.exercises)
  console.log(total)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total;
// renders the name and number of exercises of one part

import React from 'react'

const Part = ({part, exercises}) => {
  return (
    <div>
    <p>
        {part} {exercises}
      </p>
    </div>
  )
}

export default Part
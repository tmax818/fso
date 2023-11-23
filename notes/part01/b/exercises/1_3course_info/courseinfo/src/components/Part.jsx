// renders the name and number of exercises of one part

import React from 'react'

const Part = ({name, exercises}) => {
  return (
    <div>
    <p>
        {name} {exercises}
      </p>
    </div>
  )
}

export default Part
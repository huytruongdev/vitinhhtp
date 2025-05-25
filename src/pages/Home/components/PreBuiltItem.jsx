import React from 'react'

const PreBuiltItem = ({item}) => {
  return (
    <React.Fragment>
        <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
        </div>
    </React.Fragment>
  )
}

export default PreBuiltItem
import React from 'react'
import './Trendings.css'

function Trendings({heading,body,footer,icon}) {
  return (
    <div className='Trendings'>
        <div className='WordWide'>
            <h2>{heading}</h2>
            <h3>{body}</h3>
            <h3>{footer}</h3>
        </div>
    </div>
  )
}

export default Trendings

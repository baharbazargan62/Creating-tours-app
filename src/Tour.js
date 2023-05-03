import React from 'react'

function Tour({ tour }) {
  console.log(tour);  
  return (
    
    <div>{tour.name}</div>
  )
}

export default Tour
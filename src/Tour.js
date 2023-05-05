import React from 'react'
import { useState } from 'react';
function Tour({ tour , removeTours}) {
  const [readmore,setReadmore]=useState(false);
  console.log(tour);  
  return (
    <div className="single-tour">
        
        <h3>{tour.name}</h3>
        <img src={tour.image} alt="" ></img>
        <p className="tour-info">{readmore ? tour.info : `${(tour.info).substring(1,200)}...`}</p>
         <button onClick={()=>{
          setReadmore(!readmore)
        }}>{readmore ? "Show less" : "Read more"} </button>
        <p className="tour-price">{tour.price}</p>
        <button onClick={()=>{
         removeTours(tour.id);
        }}>Not interested</button>
       
    </div>
    
    
  )
}

export default Tour
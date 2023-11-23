import React from 'react'
import Card from './card'
function CardContainer(props) {
  return (
    <div className=''>
        <div  className=''>

    
            <Card type={props.type} name ={props.name} city={props.city} time={props.time}  />
       </div>

    </div>
  )
}

export default CardContainer
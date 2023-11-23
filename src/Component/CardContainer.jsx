import React from 'react'
import Card from './card'
import Navbar from './navbar'
function CardContainer(props) {
  return (
    <div className=''>
        
        <div  className=''>


            <Card type={props.type} name ={props.name} city={props.city} time={props.time}  stat={props.stat} />
       </div>

    </div>
  )
}

export default CardContainer
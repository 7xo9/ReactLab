import React from 'react'

function Card(props) {
  return (
    <div className='grid'>
        <div className='card col-3 '>
            <div className='card-body '>
                <div>
                    <h5>{props.type}</h5>
                    <h4>{props.name}</h4>
                </div>
                <div className='down-info mt-5'>
                    <p>{props.city}</p>
                    <p>يبدا في: {props.time} </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
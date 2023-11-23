import React from 'react'
import '../App.css'
import App from '../App'
function Card(props) {
  return (
    <>
        <div className={props.type == "مغلق" ? "red":"blue"}>


        <div className={props.type == "معسكر" ? "camp card m-3":"pro card m-3"}>
            <div className='card-body'>

                <div>
                    <h5>{props.type}</h5>
                    <h4>{props.name}</h4>
                </div>
                <div className='down-info mt-5'>
                    <p>{props.city}</p>
                    <p>يبدا في: {props.time} </p>
                </div>

                <div>
                    <button className='btn'>التفاصيل</button>
                </div>


           
     </div>

    </div>
    </div>
    </>
  )
}

export default Card
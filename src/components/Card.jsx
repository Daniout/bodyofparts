import React from 'react'

function Card({title,imageSource,text}) {

  return (
    <div>
        <div className="card text-center"></div>
        <img src={imageSource} alt="boca"
        width="150" 
        height="150" /> 
        <div className='card-body'>
            <h4 className='card-tittle'>{title}</h4>
            <p>
                {
                    text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, asperiores'
                }
            </p>
           
        </div>
        </div>
  )
}

export default Card
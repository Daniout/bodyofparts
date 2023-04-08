import React from 'react'
import Card from './Card'
import boca from '../assets/boca.png'
import cerebro from '../assets/cerebro.png'
import lengua from '../assets/lengua.png'
import mano from '../assets/mano.png'
import nariz from '../assets/nariz.png'
import oido from '../assets/oido.png'
import ojo from '../assets/ojo.png'
import pierna from '../assets/pierna.png'
import pulmones from '../assets/pulmones.png'



const cards =[
    {
        id:1,
        title: 'mouth',
        Image: boca,
        text: "Boca => Mount"
    },
    {
        id:2,
        title: 'brain',
        Image: cerebro,
        text: "Cerebro => Brain"
    },
    {
        id:3,
        title: 'tongue',
        Image: lengua,
        text: "Lengua => Tongue"
    },
    {
        id:4,
        title: 'hand',
        Image: mano,
        text: "Mano => Hand"
    },
    {
        id:5,
        title: 'Nose',
        Image: nariz,
        text: "Nose => Nariz"
    },
    {
        id:6,
        title: 'Ear',
        Image: oido,
        text: "Oido => Ear"
    },
    {
        id:7,
        title: 'Eye',
        Image: ojo,
        text: "Ojo => Eye"
    },
    {
        id:8,
        title: 'Leg',
        Image: pierna,
        text: "Pierna => Leg"
    },
    {
        id:9,
        title: 'lungs',
        Image: pulmones,
        text: "Pulmones => Lungs"
    }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
        <div className='row'>
        {
            cards.map(card =>(
                <div className="col-md-4" key={card.id}>
                  <Card title={card.title} imageSource={card.Image} text={card.text}/>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Cards
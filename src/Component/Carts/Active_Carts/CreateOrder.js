import React from 'react'
import './activeCart.css'
import { useNavigate } from 'react-router-dom'


const CreateOrder = () => {

  let Navigate = useNavigate()
  return (
    <div className='plus' onClick={()=> Navigate('/createDoorPage')}><span>+</span></div>
  )
}

export default CreateOrder
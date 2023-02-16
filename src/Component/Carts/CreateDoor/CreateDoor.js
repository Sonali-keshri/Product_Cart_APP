import React from 'react'
import './createDoor.css';
import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowLeft } from "react-icons/fi";

const CreateDoor = () => {
    const Navigate = useNavigate()
  return (
    <>
      <div className='createDoorNav  ' style={{height:"60px"}}>
        <h5 onClick={() => Navigate(-1)} className='d-flex  align-items-center'><FiArrowLeft className='mx-4' style={{cursor:'pointer'}}/> Creat a new door  </h5>
      </div>
      <div className='container mt-4 mb-2 w-50 createDoorContainer'>
        <div  onClick={() => Navigate('/configurePage')} className='container tablets-list shadow m-2 p-4 py-3 d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h5 className='my-2'>Configure your door from scratch</h5>
            <p style={{color:"grey"}} className='my-1'>Residential, Commerical, Entry doors</p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </div>

        <div className='container tablets-list shadow m-2 p-4  py-3 d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h5 className='my-2'>Parts / Openers</h5>
            <p style={{color:"grey"}} className='my-1'>Order Parts and Openers</p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </div>
        
        <div  className='container tablets-list shadow m-2 p-4   d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h5 className='my-2'>Direct Item Entry</h5>
            <p style={{color:"grey"}} className='my-1'>Order Parts / Openers using a Product ID</p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </div>

        <div  className='container tablets-list shadow m-2 p-4 py-3 d-flex align-items-center justify-content-between' style={{ cursor: 'pointer' }}>
          <div>
            <h5 className='my-2'>Choose from favourites</h5>
            <p style={{color:"grey"}} className='my-1'>Re-order door from your favourites </p>
          </div>
          <IoIosArrowForward style={{fontSize:"2rem"}}/>
        </div>
      </div>
    </>
  )
}

export default CreateDoor

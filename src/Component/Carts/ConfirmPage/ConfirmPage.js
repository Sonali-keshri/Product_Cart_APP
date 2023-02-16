import React,{useContext, useState}from "react";
import './confirmPage.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../App'
import { FiArrowLeft } from "react-icons/fi";
import { MdFavorite} from 'react-icons/md'
import { AiTwotoneEdit} from 'react-icons/ai'
import { AiFillCopy} from 'react-icons/ai'
import { AiFillDelete} from 'react-icons/ai'

const ConfirmPage = () => {
    const Navigate = useNavigate()
    const [count, setCount]= useState(1)

    const {assemblyType,windCode,design,color,glassType,section} = useContext(AppContext)


    const handleSubmit = () =>{
      let options = JSON.parse(localStorage.getItem('activeOptions') || '[]')

      let option = {
        assemblyType,windCode,design,color,glassType,section
      }

      options.push(option)
      localStorage.setItem('activeOptions', JSON.stringify(options))
      Navigate('/')
    }

    const addMore = () =>{
      let options = JSON.parse(localStorage.getItem('activeOptions') || '[]')
      let option = {
        assemblyType,windCode,design,color,glassType,section
      }
  
      options.push(option)
      localStorage.setItem('activeOptions', JSON.stringify(options))
      Navigate('/createDoorPage')

    }

    const increment =()=>{
        setCount(count+1)
      }
    
      const decrement =()=>{
        if(count < 2){
          setCount(1)
        }
        else{
          setCount(count-1)
        }
      }
  return (
    <>
      <div className="createDoorNav  " style={{ height: "60px" }}>
        <h5 onClick={() => Navigate(-1)} className="d-flex  align-items-center">
          <FiArrowLeft className="mx-4" style={{ cursor: "pointer" }} />
          Configure a new door
          <span style={{ fontSize: ".8rem" }} className="m-2">
            2 of 3
          </span>
        </h5>
      </div>
      <div className="container ">
        <div className="container shadow mt-5 pt-3">
        <h4 className='Headline'>10' 0" X 10' 0.0" CA211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE,5TH GENERATION FINISH WALDER DOOR</h4>
          <div>
            <small>Job NAME: Front door with glass</small><br />
            <small>Product #CWD  Garage Door</small><br />
            <small>Availability: <span>IN STOCK</span><span>(Available for Pickup)</span></small><br />
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div >
            
              <button className='btn btn-danger m-3'  style={{width:"50px"}} onClick={decrement}><b>-</b></button>
              <button className='btn btn-outline-danger m-3 px-4 '><b>{count}</b></button>
              <button className='btn btn-danger m-3' style={{width:"50px"}} onClick={increment} ><b>+</b></button>

            </div>
            <div className='d-flex justify-content-between w-50 firstBox'>
            <div className='text-center'style={{color:"green"}} >
              <span>Standard Multiplier: 432</span><br />
              <span>Standard Multiplier Applied</span>
              <p style={{color:"brown"}}>Apply MPQ</p>
            </div>
            <div>
              <small>Net Price: <span>$4500.00</span></small><br />
              <small>Unit Price: $4800.00</small><br />
              <small>View Price Details</small>
            </div>
            </div>
          </div>

          <div className="addressBtn" style={{ paddingBottom: '1rem' }}>
            <button className='btn   singleBtn text-danger' >
             <MdFavorite/> FAVORITES
            </button>
            <button className='btn singleBtn text-danger'   onClick={()=>Navigate(-1)} >
              <AiTwotoneEdit/> EDIT
            </button>
            <button className='btn singleBtn text-danger' >
             <AiFillCopy/> COPY
            </button>
            <button  className='btn singleBtn text-danger'  onClick={()=>Navigate('/')} >
              <AiFillDelete/> DELETE
            </button>
          </div>
        </div>
        

        <div className='container shadow my-5 p-4 d-flex gap-4 justify-content-between secondBox'>

          <form style={{width:"50%"}} className='dateContainer'>
            <div className="mb-3 shadow p-4">
            <label for="exampleInputDate" class="form-label">Change Deliver Date</label>
              <input type="date" className="form-control" placeholder="Example: 31-DEC-1999" />
              <div id="dateText"  className="text-muted form-text ">
                <small >Standard Delivery, Tue May 28 - 2019</small>
              </div>
            </div>
            <div className="mb-3 shadow p-4">
              <label for='exampleInputPurchase' className="form-label">Purchase Order Number</label>
              <input type="number" className="form-control" placeholder="Enter PO number" />
              <div className="form-text text-muted">
                <small >The PO will be useful to track this order item</small>
              </div>
            </div>
          </form>
          <div className="container pricingContainer " style={{width:"50%" }}>
            <div className="row">
              <div className="col">SubTotal</div>
              <div className="col text-left">$4500</div>
            </div>
            <div className="row">
              <div className="col">Energy SubCharge</div>
              <div className="col text-left">$78.00</div>
            </div>
            <div className="row">
              <div className="col">Sales Tax</div>
              <div className="col text-left">$490.93</div>
            </div>
            <div className="row">
              <div className="col">TOTAL</div>
              <div className="col text-left">$5061.11</div>
            </div>
            <hr />
           <input type='checkbox' name="tax" className='mx-3'/> <span style={{color:"brown", fontSize:"1.4rem"}}>Apply Tax</span>
           <p>( The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details. )</p>

          </div>
        </div>

        <div className='container my-3 d-flex justify-content-between shadow' >
          <div>
            <small>
              {count} ITEM
            </small>
            <h3 className='total'>$5061.11</h3>
          </div>
          <div className='my-3 d-flex gap-1'>
          <button className='btn btn-danger placeOrder' onClick={addMore} >
            ADD MORE+
          </button>
          <button className='btn btn-danger  placeOrder' onClick={handleSubmit}  >
            PLACE ORDER
          </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default ConfirmPage;

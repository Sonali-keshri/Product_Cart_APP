import React,{ useEffect, useState} from "react";
import './configurePage.css'
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const getLocalStorage = () => {
  let savedOption = JSON.parse(localStorage.getItem("option"));
  if (savedOption) {
    return savedOption;
  } else {
    return [];
  }
};


const ConfigurePage = () => {
  const Navigate = useNavigate();

  const [option, setOption] = useState( getLocalStorage() )

  const setData = (e) => {
    setOption((preval) => {
      return { ...preval, [e.target.name]: e.target.value };
    });
  };

  useEffect(()=>{
    localStorage.setItem('option', JSON.stringify(option))
  },[option])


  return (
    <>
      <div className='createDoorNav  ' style={{height:"60px"}}>
        <h5 onClick={() => Navigate(-1)} className='d-flex  align-items-center'><FiArrowLeft className='mx-4' style={{cursor:'pointer'}}/> Configure a new door  <span style={{fontSize:".8rem"}} className="m-2"> 2 of 3</span> </h5>
      </div>

      <div className="container " position='relative'>
      <div className="container mt-5 mb-5 w-50 categoryContainer ">
        <div className="row align-items-center my-3">
          <div className="col-lg-4 ">Select Catergory</div>
          <div className="col-lg-8">
           <select className="form-select" name="category" value={option.category} onChange={setData}   aria-label="Default select example">
              <option value="Select option">Select option</option>
              <option value="Residential Door">Residential Door</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </select>
          </div>
        </div>

        <div className="row align-items-center my-3">
          <div className="col-lg-4 ">Select Series</div>
          <div className="col-lg-8">
            <select className="form-select" name="series" value={option.series}  onChange={setData} aria-label="Default select example">
            <option value="Select option">Select option</option>
              <option value="Canyon Ridge® Collection">Canyon Ridge® Collection</option>
              <option value="Two">Two</option>
              <option value='three'>Three</option>
            </select>
          </div>
        </div>

        <div className="row align-items-center my-3">
          <div className="col-lg-4  col-md-12">Door Type</div>
          <div className="col-lg-8 col-md-12">
            <select className="form-select" name="doorType" value={option.doorType} onChange={setData}  aria-label="Default select example">
            <option value="Select option">Select option</option>
              <option value="CAN212">CAN212</option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </select>
          </div>
        </div>
      </div>
      </div>
      <div className="m-3 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-danger configureBtn"
            style={{ color: "white", border: "none", position:"absolute", bottom:"10px"}}
            onClick={() => Navigate("/configureNewDoor")}
          >
            CONFIGURE
          </button>
      </div>
    </>
  );
};

export default ConfigurePage;

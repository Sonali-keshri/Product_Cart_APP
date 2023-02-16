import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./configureNewDoor.css";
import { AppContext } from "../../../App";

const ConfigureNewDoor = () => {
  const {
    assemblyType,
    windCode,
    design,
    color,
    glassType,
    section,
    setAssemblyType,
    setwindCode,
    setDesign,
    setColor,
    setGlassType,
    setSection,
  } = useContext(AppContext);

  const Navigate = useNavigate();
  var [now, setNow] = useState(0);

  const progress1 = () => {
    if (now === 0) setNow(now + 25);
  };

  const progress2 = () => {
    if (now === 25) setNow(now + 25);
  };

  const progress3 = () => {
    if (now === 50) setNow(now + 25);
  };

  const progress4 = () => {
    if (now === 75) setNow(now + 25);
  };
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
      <div className="container mt-5 mb-5 w-50 wrapper">
        <div className="container">
          <div class="progress ">
            <div
              class={`progress-bar w-${now} bg-success `}
              style={{height:"5px"}}
              role="progressbar"
              aria-valuenow={`"${now}"`}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        <span className="progress-level">{`${now}%`} Completed</span> 
        </div>

       
        <div className="card mb-3">
          <div
            className="card-header"
            style={{ backgroundColor: "#E4E4E4", border: "none" }}
          >
            Layout options
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Assembly Type</label>
            <div className="col-lg-8">
              <select
                class="form-select"
                aria-label="Default select example"
                name="assemblyType"
                value={assemblyType}
                onChange={(e) => setAssemblyType(e.target.value)}
              >
                <option value="Select option">Select option</option>
                <option value="Complete Door">Complete Door</option>
                <option value="Uncomplete Door">Uncomplete Door</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Measure Size</label>
            <div className="col-lg-8 ">
              <div className="row my-2">
                <label className=" col-lg-3 col-sm-3 col-form-label ">
                  Width
                </label>
                <div className="col-lg-9 col-sm-9 d-flex flex-row ">
                  <div className="col-sm-6  px-1">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="Select option">Select</option>
                      <option value="1 ft.">1 ft.</option>
                      <option value="2 ft.">2 ft.</option>
                      <option value="3 ft.">3 ft.</option>
                      <option value="4 ft.">4 ft.</option>
                      <option value="5 ft.">5 ft.</option>
                    </select>
                  </div>
                  <div className="col-sm-6 px-1">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="Select option">Select</option>
                      <option value="1 in.">1 in.</option>
                      <option value="2 in.">2 in.</option>
                      <option value="3 in.">3 in.</option>
                      <option value="4 in.">4 in.</option>
                      <option value="5 in.">5 in.</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <label className=" col-lg-3 col-sm-3 col-form-label ">
                  Height
                </label>
                <div className="col-lg-9 col-sm-9 d-flex flex-row ">
                  <div className="col-sm-6  px-1">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="Select">Select</option>
                      <option value="1 ft.">1 ft.</option>
                      <option value="2 ft.">2 ft.</option>
                      <option value="3 ft.">3 ft.</option>
                      <option value="4 ft.">4 ft.</option>
                      <option value="5 ft.">5 ft.</option>
                    </select>
                  </div>
                  <div className="col-sm-6  px-1">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="Select option">Select</option>
                      <option value="1 in.">1 in.</option>
                      <option value="2 in.">2 in.</option>
                      <option value="3 in.">3 in.</option>
                      <option value="4 in.">4 in.</option>
                      <option value="5 in.">5 in.</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Windcode</label>
            <div className="col-lg-8">
              <select
                class="form-select"
                aria-label="Default select example"
                name="windCode"
                value={windCode}
                onChange={(e) => setwindCode(e.target.value)}
              >
                <option value="Select">Select Option</option>
                <option value="Windcode W1">Windcode W1</option>
                <option value="Windcode W2">Windcode W2</option>
                <option value="Windcode W3">Windcode W3</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Design</label>
            <div className="col-lg-8">
              <select
                class="form-select"
                aria-label="Default select example"
                name="design"
                value={design}
                onChange={(e) => setDesign(e.target.value)}
              >
                <option value="Select option">Select Option</option>
                <option value="AA">AA</option>
                <option value="BB">BB</option>
                <option value="CC">CC</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Color</label>
            <div className="col-lg-8">
              <select
                class="form-select"
                aria-label="Default select example"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="Select option">Select Option</option>
                <option value="Dark Finish">Dark Finish</option>
                <option value="Light Finish">Light Finish</option>
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-end my-2 mx-3"
            onClick={progress1}
          >
            <button className="doneBtn">Done</button>
          </div>
        </div>

       
        <div className="card mb-3">
          <div
            className="card-header"
            style={{ backgroundColor: "#E4E4E4", border: "none" }}
          >
            Window Options
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Glass Type</label>
            <div className="col-lg-8">
              <select
                class="form-select"
                aria-label="Default select example"
                name="glassType"
                value={glassType}
                onChange={(e) => setGlassType(e.target.value)}
              >
                <option value="Select option">Select Option</option>
                <option value="Solid 	&#40; No Windows 	&#41;">
                  Solid &#40; No Windows &#41;
                </option>
                <option value="Solid 	&#40;  Windows 	&#41;">
                  Solid &#40; Windows &#41;
                </option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">
              Section &#40;S&#41; Glazed{" "}
            </label>
            <div className="col-lg-8">
              <select
                class="form-select"
                aria-label="Default select example"
                name="section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                <option value="Select option">Select Option</option>
                <option value="Sections 1">Sections 1</option>
                <option value="Sections 2">Sections 2</option>
                <option value="Sections 3">Sections 3</option>
                <option value="Sections 4">Sections 4</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Framing</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="Select option">Select Option</option>
                <option value="Arc 1 Design">Arc 1 Design</option>
                <option value="Arc 2 Design">Arc 2 Design</option>
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-end my-2 mx-3"
            onClick={progress2}
          >
            <button className="doneBtn">Done</button>
          </div>
        </div>

        <div className="card mb-3">
          <div
            className="card-header"
            style={{ backgroundColor: "#E4E4E4", border: "none" }}
          >
            Track Options
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Spring</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="Select option">Select Option</option>
                <option value="Galvanized Torsion">Galvanized Torsion</option>
                <option value="Galvanized Torsion">Galvanized Torsion</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Size</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="Select option">Select Option</option>
                <option value="2” Flag & Jamb Brackets Loose">
                  2” Flag & Jamb Brackets Loose
                </option>
                <option value="2” Flag & Jamb Brackets Loose">
                  2” Flag & Jamb Brackets Loose
                </option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Mount</label>
            <div className="col-lg-8">
              <select s class="form-select" aria-label="Default select example">
                <option value="Bracket">Bracket</option>
                <option value="Bracket">Bracket</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Lift</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="Standard">Standard</option>
                <option value="Primary">Primary</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Radius</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="12” Radius">12” Radius</option>
                <option value="14” Radius">14” Radius</option>
                <option value="16” Radius">16” Radius</option>
              </select>
            </div>
          </div>
          <div
            className="d-flex justify-content-end my-2 mx-3"
            onClick={progress3}
          >
            <button className="doneBtn">Done</button>
          </div>
        </div>

        {/* 4th */}
        <div className="card mb-3">
          <div
            className="card-header"
            style={{ backgroundColor: "#E4E4E4", border: "none" }}
          >
            Other Options
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Spring</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="Galvanized Torsion">Galvanized Torsion</option>
                <option value="Galvanized Torsion">Galvanized Torsion</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Size</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="2” Flag & Jamb Brackets Loose">
                  2” Flag & Jamb Brackets Loose
                </option>
                <option value="2” Flag & Jamb Brackets Loose">
                  2” Flag & Jamb Brackets Loose
                </option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Mount</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="Bracket">Bracket</option>
                <option value="Bracket">Bracket</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Lift</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="Standard">Standard</option>
                <option value="Primary">Primary</option>
              </select>
            </div>
          </div>

          <div className="my-2 mx-5 row">
            <label className=" col-lg-4 col-form-label">Track Radius</label>
            <div className="col-lg-8">
              <select class="form-select" aria-label="Default select example">
                <option value="12” Radius">12” Radius</option>
                <option value="14” Radius">14” Radius</option>
                <option value="16” Radius">16” Radius</option>
              </select>
            </div>
          </div>

          <div
            className="d-flex justify-content-end my-2 mx-3"
            onClick={progress4}
          >
            <button className="doneBtn">Done</button>
          </div>
        </div>

        <div className="container m-3 d-flex justify-content-end">
          <button type="button" className="mx-3 btn btn-outline-danger">
            PREVIEW
          </button>
          <button
            type="button"
            className="mx-3 btn btn-danger"
            onClick={() => Navigate("/confirmPage")}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfigureNewDoor;

import React from 'react'
import './style.css'
import icon1 from '../../assests/Square/square.png'
import icon2 from '../../assests/Notification/notification.png'
import icon3 from '../../assests/Help/help.png'
import icon4 from '../../assests/Profile/profile.png'

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark topNav">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center gap-1"
            href="/"
          >
            <h4 className="circleLogo">f1</h4>
            <h5>studioz</h5>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto navMenuIcon">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                <img src={icon1} alt="icon1"/>

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <img src={icon2} alt="icon2"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <img src={icon3} alt="icon3"/>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <img src={icon4} alt="icon4"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default TopNavbar

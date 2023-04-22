import React,{useContext,useState} from 'react'
import './style.css'
import {Link, Outlet } from 'react-router-dom'
import  { AppContext } from '../../../App';

const ThirdNav = () => {
  const {setSearchTerm} = useContext(AppContext)
  const [activeLink, setActiveLink] = useState(false);

  return (
    <>
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "white" }}>
    <div className="container-fluid ">
      <ul className="navbar-nav secondnavMenu">
        <li className="nav-item">
          <Link exact="true" to='/' className={`nav-link ${activeLink ? "" : "activeMenu"}`}
              onClick={() => setActiveLink(!activeLink)}>
            Active Carts
          </Link>
        </li>
        <li className="nav-item">
          <Link to='archived'  onClick={() => setActiveLink(!activeLink)}
              className={`nav-link ${activeLink ? "activeMenu" : ""}`}>
            Archived Carts
          </Link>
        </li>
      </ul>
    <input type='text' className='searchInput' placeholder='Search By Section' onChange={(e)=> setSearchTerm(e.target.value)} />
    </div>
  </nav>
  <Outlet/>
  </>
  )
}

export default ThirdNav

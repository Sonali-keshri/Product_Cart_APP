
import './App.css';
import ActiveCarts from './Component/Carts/Active_Carts/ActiveCarts';
import ThirdNav from './Component/Carts/ThirdNav/ThirdNav';
import MiddleNav from './Component/MiddleNav/MiddleNav';
import TopNavbar from './Component/TopNavbar/TopNavbar';
import ArchivedCarts from './Component/Carts/ArchivedCarts/ArchivedCarts'
import { createContext, useState } from "react";
import CreateDoor from './Component/Carts/CreateDoor/CreateDoor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favroites from './Component/Favorites/Favroites';
import ConfigurePage from './Component/Carts/ConfigurePage/ConfigurePage';
import ConfigureNewDoor from './Component/Carts/ConfigureNewDoor/ConfigureNewDoor';
import ConfirmPage from './Component/Carts/ConfirmPage/ConfirmPage';

export const AppContext = createContext()



function App() {

  const [assemblyType, setAssemblyType] = useState("")
  const [windCode, setwindCode] = useState("")
  const [design, setDesign] = useState("")
  const [color, setColor] = useState("")
  const [glassType, setGlassType] = useState("")
  const [section, setSection] = useState("")

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Router>
    <AppContext.Provider value={{assemblyType,windCode,design,color,glassType,section, setAssemblyType,setwindCode,setDesign,setColor,setGlassType,setSection,searchTerm, setSearchTerm}}>
    <TopNavbar/>
    <Routes>
    <Route path='/' element={<MiddleNav/>}>
      <Route path='/' element={<ThirdNav />} >
          <Route index element={<ActiveCarts />} /> 
          <Route path='/archived' element={<ArchivedCarts />} />
      </Route> 
    </Route>
    <Route path='/createDoorPage' element={<CreateDoor/>} />
    <Route path='/configurePage' element={<ConfigurePage/>} />
    <Route path='/configureNewDoor' element={<ConfigureNewDoor/>} />
    <Route path='/confirmPage' element={<ConfirmPage/>} />
    <Route path='/fav' element={<Favroites/>} />
    </Routes>
   </AppContext.Provider>
    </Router>
  );
}

export default App;

import React from 'react'
import {BrowserRouter,Route,Link,Routes,Outlet} from 'react-router-dom'
import Main from './Block.js/Main';
import About from './Block.js/About';
import Login from './Block.js/Login';
import REGISTER from './Block.js/REGISTER';
import Bmi from './Block.js/Bmi';
import MainD from './Block.js/Dashboard/MainD';
import FitnessTracker from './Block.js/FitnessTracker';
import SignUp from './Block.js/SignUp';
import Conf from './Block.js/Conf';
import FormExample from './Block.js/FormExample';
import Preeork from './Block.js/Preeork';
import PaymentPage from './Block.js/PaymentPage';
 import Supple from './Block.js/Supple';

 import FAQPage from './Block.js/FAQPage';
 import ContactPage from './Block.js/ContactPage';
 import D from './Block.js/D';
const Layout = () => {
  return (
    <div style={{ backgroundColor:"black", backgroundSize:"cover"}}><hr/>
    
    <div style={{display: "flex" ,height:"75px" ,backgroundColor:"rgba(0, 0, 0, 0.522)"}}>
      
    
      <div style={{justifyContent: "right"}}>
      <nav style={{ display: 'inline-block' }}>
      <br></br>
   <ul style={{ listStyleType: 'none', padding: 0 }}>
  <li style={{ display: 'inline', marginRight: '170px'}}>
      <Link style={{ color: 'rgb(196, 54, 54)', textDecoration: 'none',fontSize:'15px' ,fontFamily:"'Orbitron', sans-serif"}} to="/">HOME</Link>
    </li>

    <li style={{ display: 'inline', marginRight: '170px' }}>
      <Link style={{ color: 'rgb(196, 54, 54)', textDecoration: 'none' ,fontSize:'15px' ,fontFamily:"'Orbitron', sans-serif" }} to="/about">ABOUT</Link>
    </li>
    <li style={{ display: 'inline',marginRight: '170px' }}>
      <Link style={{ color: 'rgb(196, 54, 54)', textDecoration: 'none',fontSize:'15px' ,fontFamily:"'Orbitron', sans-serif" }} to="/mainD">DASHBOARD</Link>
    </li>
    
    <li style={{ display: 'inline',marginRight: '170px' }}>
      <Link style={{ color: 'rgb(196, 54, 54)', textDecoration: 'none',fontSize:'15px' ,fontFamily:"'Orbitron', sans-serif" }} to="/fitnessTracker">TRACKER</Link>
    </li>
    <li style={{ display: 'inline',marginRight: '170px' }}>
      <Link style={{ color: 'white', textDecoration: 'none',fontSize:'15px' ,fontFamily:"'Orbitron', sans-serif" }} to="/login">LOGIN</Link>
    </li>
    <li style={{ display: 'inline',marginRight: '170px' }}>
      <Link style={{ color: 'red', textDecoration: 'none',fontSize:'15px' ,fontFamily:"'Orbitron', sans-serif" }} to="/bMI">BMI</Link>
    </li>

    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/signUp">s</Link>
    </li>

    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/paymentPage">s</Link>
    </li>
     
    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/conf">s</Link>
    </li>

    <li style={{ display: 'inline',marginRight: '1px' }}>
    <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/formExample">s</Link>
  </li>

    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/preeork">s</Link>
    </li>

    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/supple">s</Link>
    </li>

    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/d">s</Link>
    </li>

    
    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/fAQPage">s</Link>
    </li>

    
    <li style={{ display: 'inline',marginRight: '1px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/contactPage">s</Link>
    </li>

    <br></br>
    <li style={{ display: 'inline',marginRight: '170px' }}>
      <Link style={{ color: 'black', textDecoration: 'none',fontSize:'1px',fontFamily:"unset" }} to="/rEGISTER">REGISTER</Link>
    </li><br></br>
   
    
    
    
  </ul>
</nav>
     </div>
     <img src="https://i.pinimg.com/564x/33/27/d8/3327d874eeb4d94ba8ba8557216e4efb.jpg" alt="W3Schools.com" height="60px" width="80px"></img>
     </div>
      <hr />
      
      <Outlet />
    
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Bmi" element={<Bmi/>}/>
        <Route path="REGISTER" element={<REGISTER/>}/>
        <Route path="MainD" element={<MainD/>}/>
        <Route path="FitnessTracker" element={<FitnessTracker/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="Preeork" element={<Preeork/>}/>
        <Route path="PaymentPage" element={<PaymentPage/>}/>
        <Route path="Conf" element={<Conf/>}/>
        <Route path="FormExample" element={<FormExample/>}/>
        <Route path="Supple" element={<Supple/>}/>
        <Route path="D" element={<D/>}/>
        <Route path="FAQPage" element={<FAQPage/>}/>
        <Route path="ContactPage" element={<ContactPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
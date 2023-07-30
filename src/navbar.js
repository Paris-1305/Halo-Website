import React,{useState} from 'react';
import './App.css';

import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation(){
  const [visible, setVisible]=useState(false);
  function toggleSidebar(){
    setVisible(!visible);
  }
  return(
    <>
    <div>
      <nav className='navigation'>
      <div className='logo'>
        <img src='entete/NOIR.png' style={{width:'80px',paddingTop:'10px',paddingLeft:'10px'}} alt='logo'/>
      </div>
      <div className='icon'>
      <MenuIcon style={{width:'40px',height:'20vh',paddingBottom:'-70%'}}
         onClick={toggleSidebar}/>
      </div>
    </nav>
    {visible &&<Sidebar />}
    </div>
    </>
  )
}
export function Sidebar(){
  return(
    <div className='navbar'>
      <ul className='menu'>
        <li>yo man</li>
        <li>jj</li>
        <li>big</li>
        <li></li>
      </ul>
    </div>
  )
}
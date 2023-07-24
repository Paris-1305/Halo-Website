import React,{useState} from 'react';
import './App.css';

import MenuIcon from '@mui/icons-material/Menu';
//import {Navbar,Nav,Button,NavDropdown,Form,FormControl,Container} from 'react-bootstrap';
/*export default function Navigation(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"></Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}*/
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
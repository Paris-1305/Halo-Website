import React from 'react';
import './App.css';
export default function Footer(props){
    return(
        <footer className='footer'>
            <div className='footer-one'>
                <div style={{marginRight:'-8opx'}}><p style={{color:'yellow'}}>HALO<br/>VOS IDEES<br/></p><span>NOS SUCCESS</span>OUR SERVICES<br/>
                LET'S WORK TOGETHER<br/>
                HOW DO WE WORK<br/>
                VICGEN OFFERS YOU<br/>
                OUR EXPERTS<br/>
                OUR ACHIEVEMENTS<br/>
                CONTACT US</div>
                <div className='links'>
                    <ul style={{listStyle:'none'}}>
                        <li className='linklist'><a href='#about'>about</a></li>
                        <li className='linklist'><a href='#testimonial'>testimonial</a></li>
                        <li className='linklist'><a href='#partners'>partners</a></li>
                        <li className='linklist'><a href='#services'>services</a></li>
                        <li className='linklist'><a href='#contact'>contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-two'>
                <p>Email<br/>{props.email}</p>
                <p>Addresse<br/>rue normadin</p>
                <p>Telephone<br/>{props.num}</p>
            </div>
            <p style={{textAlign:'center'}}>COPYRIGHT 20223</p>
        </footer>
    )
}
import React from 'react';
import {Accordion} from 'react-bootstrap';
import './App.css';
export default function Sectionthree(){
    return(
        <section className='accordi'>    
        <div className='accord'>
       <Accordion defaultActivitykey='0' className='mt-5 p-3'>
        <Accordion.Item eventKey='0' className='item'>
          <Accordion.Header>Head1</Accordion.Header>
          <Accordion.Body>
         lorem
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2' className='item'>
          <Accordion.Header>Head2</Accordion.Header>
          <Accordion.Body>
            lorem2
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='3' className='item'>
          <Accordion.Header>Head3</Accordion.Header>
          <Accordion.Body>
            lorem3
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4' className='item'>
          <Accordion.Header>Head4</Accordion.Header>
          <Accordion.Body>
            lorem4
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='4' className='item'>
          <Accordion.Header>Head5</Accordion.Header>
          <Accordion.Body>
            lorem5
          </Accordion.Body>
        </Accordion.Item>
       </Accordion>
      </div>
        </section>
    )
}

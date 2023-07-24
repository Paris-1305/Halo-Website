import React from 'react';
import './App.css';
export default function Card(){
    const data=[
        {
     id:1,
     img:'homeImage/ceo.png',
     description:'CEO'
        },
        {
      id:2,
       img:"homeImage/director.png",
      description:'Director'
        },
        {
      id:3,
       img:'homeImage/parisbynight.png',
      description:'Paris cest magic'
        },
        {
      id:4,
      img:'homeImage/womanSoftwareEngineer.png',
      description:'Woman Software Engineer'
        }
    ]
    const items=data.map((item)=>{
        return(<div ><img className='grid-data' style={{width:'80%',height:'40vh'}} src={item.img}/><h4>{item.description}</h4></div>)
    })
    return(
  <section className='cardSection'>
    <div style={{fontStyle:'50px'}}>title</div>
    <div className='grid-picture'>
   {items}</div>
  </section>
    )
}
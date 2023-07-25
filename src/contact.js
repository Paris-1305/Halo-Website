import React,{useState} from 'react';
import './App.css';
export default function Comtact(){
    const [form, setFormData]=useState({
        name:'',
        surname:'',
        email:'',
        message:''
    })
    function handleInput(event){
        let newInput={[event.target.name]:event.target.value};
        setFormData({...form,...newInput})
    }
    return(
        <section className='contactbackground' id='contact' style={{marginTop:'0px'}}>
             <h4 style={{fontSize:'30px',color:'red'}}>Prenons contact!</h4><br/><br/>
    <div className='form'>
      <input 
      className='input'
      type='text'
      name='name'
      value={form.name}
      onChange={handleInput}
      placeholder='ENTREE VOTRE NOM'/>
      <input 
      className='input'
      type='text'
       name='surname'
       value={form.surname}
       onChange={handleInput}
      placeholder='ENTREE VOTRE PRENOM'/>
      <input 
      className='input'
      type='email'
      name='email'
      onChange={handleInput}
      value={form.email}
      placeholder='ADDRESS EMAIL'/>
    </div><br/>
    <input
    className='message'
    type='text'
    placeholder='ENTREE VOTRE MESSAGE...'
    value={form.message}
    onChange={handleInput}/>
    <ul onMouseOver={handleInput} ></ul>
    <button style={{marginTop:'5%', width:'150px', height:'70px', borderRadius:'3px', background:'transparent',border:'2px solid #fff', color:'white'}}>ENVOYER</button>
    </section>
    )
}
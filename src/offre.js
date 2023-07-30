import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
export default function SectionFour(){
    return(
        <section className='offre'>
            <div className='offre-un'>
                <img style={{width:'30%', height:'30vh'}} src={'entete/graphiste.png'}/>
                <div>
                    <h2>idees creatives</h2><br/>
                    <p>De nouvel idees afin de vous<br/> 
                    demarquer de la concurrence</p>
                </div>
            </div>
            <div className='offre-deux'>
                <div>
                    <h2>collaboration transparente</h2><br/>
                    <p>Notre souhait est de vous offrir un experience optimal<br/> 
                    avec des prestations de haute qualite sans frais caches </p>
                </div>
                <img style={{width:'30%', height:'30vh'}} src={'entete/graphiste.png'}/>
            </div>
            <div className='offre-trois'>
                <img style={{width:'30%', height:'30vh'}} src={'entete/graphiste.png'}/>
                <div>
                    <h2>Simplification de process</h2><br/>
                    <p>Avec l'avantage de beneficier d'un interlocuteur<br/> 
                    unique, toujours a votre ecoutes et reactifs<br/>
                    a tout changements de votre situation</p>
                </div>
            </div>
            <div className='offre-four'>
                <div>
                    <h2>Equipe talentieuse</h2><br/>
                    <p>Une equipe  riche en experience et en<br/> 
                    constante apprentissage</p>
                </div>
                <img style={{width:'30%', height:'30vh'}} src={'entete/graphiste.png'}/>
            </div>
            <div className='offre-five'>
            <img style={{width:'30%', height:'30vh'}} src={'entete/graphiste.png'}/>
                <div>
                    <h2>Une ecoute permanente</h2><br/>
                    <p>La comprehensions de vos besoins et attentes sont aux<br/> 
                      centre de notre attention</p>
                </div>
                </div>
                 <div className='offre-six'>
                <div>
                    <h2>Presence internationale</h2><br/>
                    <p>Notre presence dans 3 pas<br/> </p>
                </div>
                <img style={{width:'30%', height:'30vh'}} src={'entete/graphiste.png'}/>
            </div>
        </section>
    )
}
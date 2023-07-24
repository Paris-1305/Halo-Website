import  React  from 'react';
import './App.css'
export default function Partners(){
    const partnerdata=[
        {
            img:'PartnerImage/cigref.png',
            title:"yo"
        },
        {
            img:'PartnerImage/infogreffe.png',
            title:""
        },
        {
            img:'PartnerImage/infotech.png',
            title:""
        },
        {
            img:'PartnerImage/nextInformatique.png',
            title:""
        },
        {
            img:'PartnerImage/nintex.png',
            title:""
        },
        {
            img:'PartnerImage/unit.png',
            title:""
        }
    ]
 const partner=  partnerdata.map(item=>{
    return(
 <div className='partimage'><img style={{width:'80%', height:'150px'}} src={item.img}/></div>
    )
   })
    return(
        <section className='partnerSection' id='partners' >
            <h1>Nos Partenaires</h1>
            
                  <div className='partnerImage'>{partner}</div>
           
        </section>
    )
}
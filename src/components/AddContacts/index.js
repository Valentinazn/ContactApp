import React, { useState, useContext } from "react";
import ContactContext from "../../context/state";
import { useNavigate } from 'react-router-dom';


export default function AddContacts(){

  const {addContactHandler} = useContext(ContactContext)

  const [search, setSearch] = useState({name: "", email: "", phone: ""})
  const history = useNavigate()


  const handleChangeName = (e) =>{

  let updateValueName = {name: e.target.value}
    
    setSearch( search => ({
      ...search,
      ...updateValueName
    }))
 }

  const handleChangeEmail = (e) =>{

  let updateValueEmail = {email: e.target.value}
    
    setSearch( search => ({
      ...search,
      ...updateValueEmail
    }))
 }

 const handleChangePhone = (e) =>{

  let updateValuePhone = {phone: e.target.value}
    
    setSearch( search => ({
      ...search,
      ...updateValuePhone
    }))
 }

  const add = (e) =>{
    e.preventDefault();
  

   
    addContactHandler(search)
      history("/");
  
    setSearch({name: "", email: "", phone: ""})
  
  }

    

    return(
        <>

        <div className="ui main">
            <h2>Aggiungi Contatti</h2>
            <form className="ui form" onSubmit={add}>

               <div className="field">
                 <label>Nome</label>
                 <input type='text' required value={search.name} name="name" placeholder='Nome' onChange={handleChangeName}/>
               </div>

               <div className="field">
                 <label>Email</label>
                 <input type='email' required value={search.email} name="email" placeholder='Email' onChange={handleChangeEmail}/>
               </div>

               <div className="field">
                 <label>Cellulare</label>
                 <input type='number' required value={search.phone} name="phone" placeholder='Cellulare' onChange={handleChangePhone}/>
               </div>

               <button className="ui button blue" >Aggiungi</button>
            
            </form> 

        </div>
        
        </>
    )
}
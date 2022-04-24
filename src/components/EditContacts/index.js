import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactContext from "../../context/state";




export default function EditContacts(){

  const {contacts, updateContactHandler} = useContext(ContactContext)

  const contId = useParams()
  const contDetail = contacts.filter(x=> x.id === contId.id)
  const contactX = contDetail[0]

  
  const [search, setSearch] = useState({
    name:contactX.name, 
    email: contactX.email,
    phone: contactX.phone, 
    id:contactX.id
  })
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
  const update = (e) =>{
    e.preventDefault();
  


    updateContactHandler(search, contId)
      history("/");
  
    setSearch({name: "", email: "", phone: ""})
  
  }


    return(
        <>

        <div className="ui main">
            <h2>Aggiorna</h2>
            <form className="ui form" onSubmit={update} >

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

               <button className="ui button">Modifica</button>
            
            </form> 

        </div>
        
        </>
    )
}
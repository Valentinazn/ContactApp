import React, {useContext, useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "../ContactCard";
import ContactContext from "../../context/state";

export default function ContactList(){

    const {
        contacts, 
        searchTerm, 
        searchHandler,
        searchResults, 
        removeContactHandler
    } = useContext(ContactContext)


    const inputEl = useRef("")

    const deleteContact = (id) =>{
       removeContactHandler(id)
   }

     
   const getSearchTerm = () =>{
       searchHandler(inputEl.current.value)
   }

    const renderContactList = contacts.map( (contact) =>{
        return(
            <ContactCard contact={contact} deleteContact={deleteContact} key={contact.id}  />
               
        
        )
    })

    return(

        <>
        <div className="main">

        <div className="ui container space-between mg-bottom-big">

               <Link to='/add'><i className="ui user plus icon right pink"></i></Link>
        

         <div className="ui search">

            <div className="ui icon input">

                    <input 
                     ref={inputEl}
                     type='text' 
                     placeholder="Cerca" 
                     className="prompt"
                     value={searchTerm}
                     onChange={getSearchTerm}
                     />

                    <i className="search icon"></i>

             </div>

             </div>

                 </div>  
        


            

            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "Nessun risultato"}</div>

        </div>
      
        
        </>
    )
}
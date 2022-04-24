import React from "react";
import { Link } from "react-router-dom";
import user from '../../images/user.png'



export default function ContactCard({contact, deleteContact}){

    
  
    return(
        
        <div className="item mg-bottom">

              <img className="ui avatar image" src={user} alt="user" />

            <div className="content">

                <Link to={`/contact/${contact.id}`}>
                      <div className="header">{contact.name}</div>

                </Link>
             
            </div>

                <i 
                 className="trash alternate outline icon"
                 style={{color: 'red', marginTop: '7px', marginLeft: '10px'}}

                onClick={ () => deleteContact(contact.id)}

                 ></i>

                 <Link to={`/edit/${contact.id}`}>

                  <i 
                 className="edit alternate outline icon"
                 style={{color: 'blue', marginTop: '7px'}}


                 ></i>

                 </Link>
        </div>
    )
}
import React, {useContext} from "react";
import { Link, useParams } from "react-router-dom";
import user from '../../images/user.svg'
import ContactContext from "../../context/state";

export default function ContactDetails(){

  const {contacts} = useContext(ContactContext)

const contId = useParams()
const contDetail = contacts.filter(x=> x.id === contId.id)
const contactX = contDetail[0]

  
    return(


        <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" style={{borderRadius: '50%', padding: '20px'}} />
        </div>
        <div className="content">
            <div className="header mg-bottom-medium mg-top-big">
               {contactX.name}
                <i className="ui icon user"></i>
            </div>
          <div className="description mg-bottom-medium">
            <i className="ui icon mail"></i>
            {contactX.email}
            </div>
          <div className="description mg-bottom-medium">
            <i className="ui icon phone"></i>
            {contactX.phone}
          </div>
        </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button pink center mg-bottom-medium">
            Torna ai Contatti
          </button>
        </Link>
      </div>
    </div>

       </div> 
        
      
    )
}
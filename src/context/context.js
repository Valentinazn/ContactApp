import ContactContext from "./state";

import React, {
  useState,
  useEffect
} from "react";

import {
  v4 as uuid
} from 'uuid'

import api from '../api/contacts'


export default function ContactState({ children}) {

  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  let results = searchTerm.length < 1 ? contacts : searchResults

  const retriveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }


  const getAllContacts = async () => {
    const items = {
      ...localStorage
    };

    if (items && items.length) {
      return
    }
    const allContacts = await retriveContacts()

    if (allContacts)



      allContacts.forEach(element => {
        localStorage.setItem(element.id, JSON.stringify({
          name: element.name,
          email: element.email
        }))
      });

    setContacts(allContacts)
  }

  useEffect(() => {

    getAllContacts()
  }, [])




  const addContactHandler = async (contact) => {

    const request = {
      id: uuid(),
      ...contact
    }

    const res = await api.post("/contacts", request)
    setContacts([...contacts, res.data])
    localStorage.setItem(res.data.id, JSON.stringify({
      name: res.data.name,
      email: res.data.email
    }))
  }

  const updateContactHandler = async (contact, contId) => {
    const res = await api.put(`/contacts/${contId.id}`, contact)
    localStorage.setItem(res.data.id, JSON.stringify({
      name: res.data.name,
      email: res.data.email
    }))


    getAllContacts()

  }

  const removeContactHandler = async (id) => {

    await api.delete(`/contacts/${id}`, )

    const newContactList = contacts.filter((contact) => {

      return contact.id !== id;

    })
    
    setContacts(newContactList)
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)

    if( searchTerm !== ""){

      const newContactList = contacts.filter((contact) =>{

      return  Object.values(contact)
        .join('')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      })

      setSearchResults(newContactList)
    }
    else{
      setSearchResults(contacts)
    }



  }


  return (

    <ContactContext.Provider

    value = {
      {
        searchTerm,
        contacts: results,
        searchResults,
        retriveContacts,
        addContactHandler,
        getAllContacts,
        updateContactHandler,
        removeContactHandler,
        searchHandler

      }
    }

    >
    {
      children
    }

    </ContactContext.Provider>
  )
}
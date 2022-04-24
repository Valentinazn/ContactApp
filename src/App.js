import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import React from "react";



import AddContacts from "./components/AddContacts";
import ContactList from "./components/ContactList";
import ContactDetails from './components/ContactDetails';
import Header from "./components/Header";
import EditContacts from './components/EditContacts';



function App() {


  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <ContactList />} exact/>
          <Route path='/add' element={ <AddContacts   />} />
          <Route path='/edit/:id' element={ <EditContacts />} />
          <Route path='/contact/:id' element={ <ContactDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetail';

function App() {
  const LOCAL_KEY_STORAGE = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const addContactHandler = (contact) => {
    //console.log(contact);
    setContacts([...contacts, contact]);
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
        .join(' ').toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  useEffect(() => {
    const retriveData = JSON.parse(localStorage.getItem(LOCAL_KEY_STORAGE));
    if (retriveData) setContacts(retriveData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY_STORAGE, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/' exact component={() => <ContactList contacts={searchTerm.length < 1 ? contacts : searchResult} term={searchTerm} searchKeyword = {searchHandler} />} />
          <Route path='/add' component={() => <AddContact addContactHandler={addContactHandler} />} />
          <Route path='/contact/:id' component={ContactDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

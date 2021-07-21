import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props);
    const inputEl = useRef('');

    const renderContact = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <div className='ui contact'>
            <h2>Contact List
                <Link to='/add'>
                    <button className='listBtn' style={{ backgroundColor: 'blue', color: 'white', fontWeight: 600, width: '140px', height: '40px', cursor: 'pointer', borderRadius: 12, marginLeft: '10px' }}>Add Contact</button>
                </Link>
            </h2>
            <div className='search'>
                <div className='searchInp'>
                    <input ref={inputEl} type='text' placeholder='Search' value={props.term} onChange={getSearchTerm}
                    style={{width: '50%', height: '5vh', fontSize: '20px'}} />
                </div>
            </div>
            <div className='render'>{renderContact.length > 0 ? renderContact: 'No Contact Available'}</div>
        </div>
    )
};


export default ContactList;

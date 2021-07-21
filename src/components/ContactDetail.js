import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = (props) => {
    //console.log(props);
    //const { name, email } = props.location.state.contact;
    return (
        <div className='main'>
            <div className='ui card center'>
                <div className='image'>
                    <img src={user} alt='user' />
                </div>
                <div className='content'>
                    {/* <div className='header'>{name}</div>
                    <div className='mail'>{email}</div> */}
                    <div className='header'>Priyank Raj</div>
                    <div className='mail'>raj.priyank23@gmail.com</div>
                </div>
            </div>
            <div className='center-btn'>
                <Link to='/'>
                    <button style={{ background: '#5F9EA0', marginTop: '8px', borderRadius: '8px' }}>Back to Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetails;
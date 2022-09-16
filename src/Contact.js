import React from 'react';
import './Contact.css';
const Contact = props => {
    if (!props.open) return null
    return (
        <div className='Contact'>
            <div className='link'>
                <span className='material-icons-outlined'>mail</span>
                <p>ethanhasbrouck02@gmail.com</p>   
                <span onClick={() => {navigator.clipboard.writeText('ethanhasbrouck02@gmail.com')}}className='material-icons'>content_copy</span>
            </div>
            <div className='link'>
                <span className='material-icons-outlined'>link</span>
                <a href='https://github.com/eefh' target='_blank'>Github</a>
            </div>
            <div className='link'>
                <span className='material-icons-outlined'>link</span>
                <a href='https://www.linkedin.com/in/ethan-hasbrouck-49687622b/' target='_blank'>Linkedin</a>
            </div>
        </div>
    );
}

export default Contact;
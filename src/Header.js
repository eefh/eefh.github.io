import React, { useState } from 'react';
import './App.css';
import Contact from './Contact';
const Header = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <div className='Header'>
            <h3>Ethan Hasbrouck</h3>
            <div className='options'>
                <div className='option'>
                    <span className='material-icons'>info</span>
                    <div className='desc'>
                        <p>About Me</p>
                    </div>
                </div>
                <div className='option'>
                    <span className='material-icons'>work</span>
                    <div className='desc'>
                        <p>My Portfolio</p>
                    </div>
                </div>
                <div className='option'>
                    <span className='material-icons' onClick={() => setIsOpen(!isOpen)}>alternate_email</span>
                    <div className='desc'>
                        <p>Contact</p>
                    </div>
                    <Contact open={isOpen}/>
                </div>
            </div>
        </div>
    );
}

export default Header;
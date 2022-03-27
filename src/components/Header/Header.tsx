import React from 'react';
import Links from './components/Links';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <div className='H1'>
                <p>Safe <span>NG</span></p>
            </div>
            <div className='H2'>
                <Links name='Home' active/>
                <Links name='About us' active={false} />
                <Links name='Crimes' active={false} />
            </div>
        </div>
    );
}

export default Header;
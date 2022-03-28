import React, { FC } from 'react';
import './Header.css';

//Imported components
import Links from './components/Links';
import Location from './components/Location';

interface HeaderProps{
    location: boolean
}

const Header:FC<HeaderProps> = ({location}):JSX.Element => {
    return (
        <div className='Header'>
            <div className='H1'>
                <p>Safe <span>NG</span></p>
            </div>
            <div className='H2'>
                {location && <Location />}
                <Links name='Home' active/>
                <Links name='About us' active={false} />
                <Links name='Crimes' active={false} />
            </div>
        </div>
    );
}

export default Header;
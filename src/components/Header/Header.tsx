import React, { FC } from 'react';
import './Header.css';

//Imported components
import Links from './components/Links';
import Location from './components/Location';

interface HeaderProps{
    location: boolean,
    props: any,
    active: string
}

const Header:FC<HeaderProps> = ({location, props, active}):JSX.Element => {

    const navigate = (e: string) => {
        props.history.push(e)
    }

    return (
        <div className='Header'>
            <div className='H1'>
                <p>Safe <span>NG</span></p>
            </div>
            <div className='H2'>
                {location && <Location />}
                <Links onClick={() => navigate('/')} name='Home' active={active === 'Home'} />
                <Links onClick={() => navigate('/crimes')} name='Crimes' active={active === 'Crimes'} />
                <Links onClick={() => navigate('/')} name='About us' active={active === 'About'} />
            </div>
        </div>
    );
}

export default Header;
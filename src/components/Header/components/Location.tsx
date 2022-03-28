import React from 'react';
import { MdLocationPin } from 'react-icons/md';

function Location() {
    return (
        <div className='Location'>
            <MdLocationPin className='LocationPin' />
            <p>Lagos</p>
        </div>
    );
}

export default Location;
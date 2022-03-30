import React from 'react';

import {AiOutlineSafetyCertificate} from 'react-icons/ai'

function SafeCity() {
    return (
        <div className='SafeCity'>
            <AiOutlineSafetyCertificate size={50} color='#FF2365' />
            <p>No crimes in your city</p>
        </div>
    );
}

export default SafeCity;
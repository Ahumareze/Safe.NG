import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

function ErrorScreen() {
    return (
        <div className='ErrorScreen'>
            <FiAlertTriangle size={50} color='#FF2365' />
            <p className='ErrorMainText'>Network error</p>
            <p className='ErrorExtraText'>please reload page</p>
        </div>
    );
}

export default ErrorScreen;
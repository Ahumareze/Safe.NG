import React from 'react';
import { MdCheckCircle, MdCheckCircleOutline } from 'react-icons/md';

function Success() {
    return (
        <div className='PostSuccess'>
            <MdCheckCircleOutline size={40} color='#FF2365' />
            <p className='postSuccess_title'>Post successful</p>
            <p className='postSuccess_extra'>please reload page</p>
        </div>
    );
}

export default Success;
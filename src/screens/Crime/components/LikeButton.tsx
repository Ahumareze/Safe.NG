import React, { useState } from 'react';
import { MdThumbUp } from 'react-icons/md';

function LikeButton() {
    const [className, setClassName] = useState<string>('vote_container')

    const like = () => {
        console.log('like');
        setClassName('liked')
    }

    return (
        <div className={`vote_container ${className}`} onClick={() => like()}>
            <MdThumbUp className='vote_container_icon' />
            <p>20</p>
        </div>
    );
}

export default LikeButton;
import React, { useState, FC, useEffect } from 'react';
import { MdThumbUp } from 'react-icons/md';
import { useSelector } from 'react-redux';

interface LikeButtonProps{
    likes: Array<[]>
}

const LikeButton:FC<LikeButtonProps> = ({likes}):JSX.Element => {
    const safeId = useSelector((state: any) => state.safeId);
    const [className, setClassName] = useState<string>();
    
    useEffect(() => {
        if(likes.includes(safeId)){
            setClassName('liked')
        }
    }, [safeId])

    const like = () => {
        setClassName('liked')
    }

    return (
        <div className={`vote_container ${className}`} onClick={() => like()}>
            <MdThumbUp className='vote_container_icon' />
            <p>{likes?.length}</p>
        </div>
    );
}

export default LikeButton;
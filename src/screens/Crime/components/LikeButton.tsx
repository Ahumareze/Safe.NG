import React, { useState, FC, useEffect } from 'react';
import { MdThumbUp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

//Imported components
import * as actions from '../../../redux/actions';

interface LikeButtonProps{
    likes: Array<[]>,
    id: string
}

const LikeButton:FC<LikeButtonProps> = ({likes, id}):JSX.Element => {
    const dispatch= useDispatch();
    const safeId = useSelector((state: any) => state.safeId);
    const [className, setClassName] = useState<string>();
    
    useEffect(() => {
        if(likes.includes(safeId)){
            setClassName('liked')
        }
    }, [safeId])

    const like = () => {
        if(!className){
            setClassName('liked');
            dispatch(actions.likePost(id, safeId))
        }
    }

    return (
        <div className={`vote_container ${className}`} onClick={() => like()}>
            <MdThumbUp className='vote_container_icon' />
            <p>{likes?.length}</p>
        </div>
    );
}

export default LikeButton;
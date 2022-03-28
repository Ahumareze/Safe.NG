import React, { FC, useState } from 'react';


//Imported components
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import LikeButton from './LikeButton';


interface CrimePostProps{
    name: string,
    date: string,
    time: string,
    content: string,
    img: string,
}

const CrimePost:FC<CrimePostProps> = ({name, date, time, content, img}) => {
    const [readMore, setReadMore] = useState<string>();

    let text;
    if(readMore){
        text = content
    }else{
        const length = 135;
        const trimmedString = content.substring(0, length);
        text = trimmedString + '...'
    }

    const toggle = (e: string) => {
        if(readMore){
            setReadMore('')
        }else{
            setReadMore('readMore')
        }
    }

    return (
        <div className={`CrimePost ${readMore}`}>

            <div className='CrimePost_header'>
                <p>{name}</p> <div className='cph_s' />
                <p>{date}</p> <div className='cph_s' />
                <p>{time}</p>
            </div>

            <div className='CrimePost_container'>
                <p>{text}</p>
                <div className='cc_img' style={{backgroundImage: `url(${img})`}} />
            </div>

            <div className='CrimePost_bottom'>
                <LikeButton />
                <div className='rmb_div'>
                    <div className='readMore_button' onClick={() => toggle('readMore')}>
                        {!readMore ? 
                            <><p>Read more</p><FiChevronDown color='#FF2365' size={25} className='readmore_icon' /></>
                            : <><p>See less</p><FiChevronUp color='#FF2365' size={25} className='readmore_icon' /></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrimePost;
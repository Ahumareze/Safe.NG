import React from 'react';

import {FiChevronDown} from 'react-icons/fi';
import { MdThumbUp } from 'react-icons/md';
const img = require('../../../assets/img.jfif');

function CrimePost() {
    console.log(img)
    return (
        <div className='CrimePost'>

            <div className='CrimePost_header'>
                <p>Anounymous</p> <div className='cph_s' />
                <p>Mon 12 Jan 2022</p> <div className='cph_s' />
                <p>6:25pm</p>
            </div>

            <div className='CrimePost_container'>
                <p>A truck full of cocaine was just comprehended along badagry express way by 5:00 pm. The suspect fled the scene leaving his truck full of cocaine. If you have any ...</p>
                <div className='cc_img' style={{backgroundImage: `url(${img})`}} />
            </div>

            <div className='CrimePost_bottom'>
                <div className='vote_container'>
                    <MdThumbUp className='vote_container_icon' />
                    <p>20</p>
                </div>
                <div className='rmb_div'>
                    <div className='readMore_button'>
                        <p>Read more</p>
                        <FiChevronDown color='#FF2365' size={25} className='readmore_icon' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrimePost;
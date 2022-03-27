import React from 'react';

function CrimePost() {
    return (
        <div className='CrimePost'>
            <div className='CrimePost_header'>
                <p>Anounymous</p> <div className='cph_s' />
                <p>Mon 12 Jan 2022</p> <div className='cph_s' />
                <p>6:25pm</p>
            </div>
            <div className='CrimePost_container'>
                <p>A truck full of cocaine was just comprehended along badagry express way by 5:00 pm. The suspect fled the scene leaving his truck full of cocaine. If you have any ...</p>
            </div>
            <div className='CrimePost_bottom'>
                <div className='readMore_button'>
                    <p>Read more</p>
                </div>
            </div>
        </div>
    );
}

export default CrimePost;
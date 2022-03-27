import React from 'react';

function Form() {
    return (
        <div className='CrimePage_Form'>
            <h3 className='cp_title'>Post a <span>crime update</span></h3>
            <textarea placeholder='write about a crime in your area ...' />

            <div className='uploadphoto_div'>
                <div className='upload_photoButton'></div>
            </div>
            <div className='post_update_button'>
                Post update
            </div>
        </div>
    );
}

export default Form;
import React from 'react';

import {MdCloudUpload} from 'react-icons/md'

function Form() {
    return (
        <div className='CrimePage_Form'>
            <h3 className='cp_title'>Post a <span>crime update</span></h3>
            <textarea placeholder='write about a crime in your area ...' />

            <div className='uploadphoto_div'>
                <div className='upload_photoButton'>
                    <MdCloudUpload color='black' size={25} />
                    <p>Upload photo</p>
                </div>
            </div>
            <div className='post_update_button'>
                Post update
            </div>
        </div>
    );
}

export default Form;
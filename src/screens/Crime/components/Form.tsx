import React, { useEffect, useState } from 'react';

import {MdCloudUpload} from 'react-icons/md'

function Form() {
    const [image, setImage] = useState<any>();
    const [imgFile, setImgFile] = useState();

    useEffect(() => {
        console.log(image)
    }, [image]);

    const selectImage = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result);
            };
            reader.readAsDataURL(event.target.files[0]);
          }
    };

    return (
        <div className='CrimePage_Form'>
            <h3 className='cp_title'>Post a <span>crime update</span></h3>
            <textarea placeholder='write about a crime in your area ...' />

            <div className='uploadphoto_div'>
                <div className='upload_photoButton'>
                    <label htmlFor='file-input'>
                        <MdCloudUpload color='black' size={25} />
                        <p>Upload photo</p>
                        <input id='file-input' type={'file'} onChange={(e) => selectImage(e)} />
                    </label>
                </div>
                {image && <div className='upPhotoImg' style={{backgroundImage: `url(${image})`}} /> }
            </div>
            <div className='post_update_button'>
                Post update
            </div>
        </div>
    );
}

export default Form;
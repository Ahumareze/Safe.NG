import React, { useEffect, useState } from 'react';

import {MdCloudUpload} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions';

function Form() {
    const dispatch = useDispatch();
    const errorMessage = useSelector((state: any) => state.errorMessage);

    const [image, setImage] = useState<any>();

    const [imgFile, setImgFile] = useState<object>();
    const [content, setContent] = useState<string>('');

    const selectImage = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result);
            };
            reader.readAsDataURL(event.target.files[0]);
            setImgFile(event.target.files[0]);
          }
    };

    const postUpdate = () => {
        dispatch(actions.postCrime(imgFile, content))
    }

    return (
        <div className='CrimePage_Form'>
            <h3 className='cp_title'>Post a <span>crime update</span></h3>
            <textarea placeholder='write about a crime in your area ...' onChange={(e) => setContent(e.target.value)} />
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
            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
            <div className='post_update_button' onClick={() => postUpdate()}>
                Post update
            </div>
        </div>
    );
}

export default Form;
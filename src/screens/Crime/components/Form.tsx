import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {MdCloudUpload} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../components';
import * as actions from '../../../redux/actions';

function Form() {
    const dispatch = useDispatch();
    const errorMessage = useSelector((state: any) => state.errorMessage);
    const postLoading = useSelector((state: any) => state.postLoading);

    const [image, setImage] = useState<any>();
    const [content, setContent] = useState<string>('');

    const selectImage = (event: any) => {
        const file = event.target.files[0];
        previewFile(file)
    };

    const previewFile = (file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result)
        }
    }

    const handleSubmit = () => {
        dispatch(actions.postCrime(image, content));
    };

    const form = (
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
            {errorMessage.length > 0 && <p className='errorMessage'>{errorMessage}</p>}
            <div className='post_update_button' onClick={() => handleSubmit()}>
                Post update
            </div>
        </div>
    )

    return (
        <>
            {!postLoading ? form : <Loader /> }
        </>
    );
}

export default Form;
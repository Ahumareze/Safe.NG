import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {MdCloudUpload} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions';

function Form() {
    const dispatch = useDispatch();
    const errorMessage = useSelector((state: any) => state.errorMessage);

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
        // dispatch(actions.postCrime(imgFile, content));
        if(!image) return;
        uploadImage(image)
    };

    const uploadImage = (base64EncodedImage: any) => {
        const data = {
            image: base64EncodedImage
        }
        axios.post('http://localhost:5000/upload', data)
            .then(r => {
                console.log(r.data)
            })
            .catch(e => {
                console.log(e)
            })
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
            <div className='post_update_button' onClick={() => handleSubmit()}>
                Post update
            </div>
        </div>
    );
}

export default Form;
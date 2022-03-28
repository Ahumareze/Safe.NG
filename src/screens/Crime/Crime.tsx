import React from 'react';
import './Crime.css';

import { Header } from '../../components';
import Form from './components/Form';
import CrimePost from './components/CrimePost';

const img = require('../../assets/img.jfif');

function Crime() {
    return (
        <div className='CrimePage'>
            <Header location />
            <section>
                <div className='cp_d1'>
                    <CrimePost 
                        name='Anonymous' 
                        date='Mon 12 Jan 2022' 
                        time='6:34pm' 
                        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe et, sint libero nihil recusandae aliquam cupiditate sit maxime magnam voluptas illum doloremque nobis enim animi voluptate. Odit praesentium vel ea error ex eveniet esse unde excepturi alias quasi enim minima facilis, sint illo inventore assumenda ut et tempore mollitia. Error.'
                        img={img} 
                    />
                </div>
                <div className='cp_d2'>
                    <Form />
                </div>
            </section>
        </div>
    );
}

export default Crime;
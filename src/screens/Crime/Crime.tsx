import React from 'react';
import './Crime.css';

import { Header } from '../../components';
import Form from './components/Form';
import CrimePost from './components/CrimePost';

const img = require('../../assets/img.jfif');

function Crime() {
    return (
        <div className='CrimePage'>
            <Header />
            <section>
                <div className='cp_d1'>
                    <CrimePost name='Anonymous' date='Mon 12 Jan 2022' time='6:34pm' content='' img={img} />
                </div>
                <div className='cp_d2'>
                    <Form />
                </div>
            </section>
        </div>
    );
}

export default Crime;
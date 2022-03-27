import React from 'react';
import './Crime.css';

import { Header } from '../../components';
import Form from './components/Form';
import CrimePost from './components/CrimePost';

function Crime() {
    return (
        <div className='CrimePage'>
            <Header />
            <section>
                <div className='cp_d1'>
                    <CrimePost />
                </div>
                <div className='cp_d2'>
                    <Form />
                </div>
            </section>
        </div>
    );
}

export default Crime;
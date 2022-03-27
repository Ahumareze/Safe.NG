import React from 'react';
import './Crime.css';

import { Header } from '../../components';
import Form from './components/Form';

function Crime() {
    return (
        <div className='CrimePage'>
            <Header />
            <section>
                <div className='cp_d1' />
                <div className='cp_d2'>
                    <Form />
                </div>
            </section>
        </div>
    );
}

export default Crime;
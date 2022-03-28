import React, { useEffect } from 'react';
import './Crime.css';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Loader } from '../../components';
import Form from './components/Form';
import CrimePost from './components/CrimePost';

import * as actions from '../../redux/actions';
import Location from './components/Location';

const img = require('../../assets/img.jfif');

function Crime(props: any) {
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.loading);
    const crimes = useSelector((state: any) => state.crimes);

    useEffect(() => {
        dispatch(actions.fetchCrimes('Lagos state'));
    }, []);

    let view = (
        <p>No crime in your area</p>
    )
    if(crimes){
       view = (
        <div className='cp_d1'>
            {crimes?.map((i: any, idx: number) => (
                <CrimePost 
                    name={i.name} 
                    date={i.date}
                    time={i.time}
                    content={i.content}
                    img={i.img}
                    likes={i.likes}
                    key={idx}
                />
            ))}
        </div>
       ) 
    }

    return (
        <div className='CrimePage'>
            <Header props={props} location active='Crimes' />
            <section>
                {!loading ? view : <Loader /> }
                <div className='cp_d2'>
                    <Form />
                </div>
            </section>
            
            {/* <Location /> */}
        </div>
    );
}

export default Crime;
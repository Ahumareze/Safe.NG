import React, { useEffect } from 'react';
import './Crime.css';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Loader } from '../../components';
import Form from './components/Form';
import CrimePost from './components/CrimePost';

import * as actions from '../../redux/actions';
import Location from './components/Location';
import SafeCity from './components/SafeCity';
import ErrorScreen from './components/ErrorScreen';

const img = require('../../assets/img.jfif');

function Crime(props: any) {
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.loading);
    const crimes = useSelector((state: any) => state.crimes);
    const location = useSelector((state: any) => state.location);
    const changeLocation = useSelector((state: any) => state.changeLocation);
    const errorScreen = useSelector((state: any) => state.errorScreen);

    useEffect(() => {
        fetchCrimes();
    }, [location]);

    const fetchCrimes = () => {
        if(location){
            dispatch(actions.fetchCrimes(location));
        }
    }

    let view = (
        <SafeCity />
    )
    if(crimes.length > 0){
       view = (
        <div className='cp_d1'>
            {crimes?.map((i: any, idx: number) => (
                <CrimePost 
                    id={i._id}
                    name={i.name} 
                    date={i.date}
                    time={i.time}
                    content={i.content}
                    img={i.image}
                    likes={i.likes}
                    key={i._id}
                />
            ))}
        </div>
       ) 
    }else if(errorScreen){
        view = <ErrorScreen />
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
            {changeLocation && <Location />}
        </div>
    );
}

export default Crime;
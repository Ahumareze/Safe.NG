import React from 'react';
import { MdLocationPin } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../redux/actions';

function Location() {
    const dispatch = useDispatch();
    const location = useSelector((state: any) => state.location)

    return (
        <div className='Location' onClick={() => dispatch(actions.changeLocation(true))}>
            <MdLocationPin className='LocationPin' />
            <p>{location}</p>
        </div>
    );
}

export default Location;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiX } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';

//Imported utilities
import states from '../../../utilities/states';
import * as actions from '../../../redux/actions';


function Location() {
    const dispatch = useDispatch();
    const location = useSelector((state: any) => state.location);
    const [selectLocation, setSelectLocation] = useState<string>(location);

    const close = () => {
        dispatch(actions.changeLocation(false))
    };

    const updateLocation = () => {
        dispatch(actions.updateLocation(selectLocation))
    }

    return (
        <div className='LocationDiv'>
            <div className='Location_div'>
                <div className='Location_div_top'>
                    <FiX color='#000' size={30} onClick={() => close()} />
                    <p>Crime Location</p>
                </div>
                <div className='Location_div_input'>
                    <MdLocationPin className='Location_pin' size={25} />
                    <select onChange={(e) => setSelectLocation(e.target.value)}>
                        {states.map((i: string) => (
                            <option selected={i === location}>{i}</option>
                        ) )}
                    </select>
                </div>
                <div className='LocationUpdateButton' onClick={() => updateLocation()}>Update</div>
            </div>
        </div>
    );
}

export default Location;
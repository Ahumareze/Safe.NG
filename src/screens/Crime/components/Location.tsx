import React from 'react';

//Imported utilities
import { FiX } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import states from '../../../utilities/states';

function Location() {
    return (
        <div className='LocationDiv'>
            <div className='Location_div'>
                <div className='Location_div_top'>
                    <FiX color='#000' size={30} />
                    <p>Crime Location</p>
                </div>
                <div className='Location_div_input'>
                    <MdLocationPin className='Location_pin' size={25} />
                    <select>
                        {states.map((i: string) => <option>{i}</option> )}
                    </select>
                </div>
                <div className='LocationUpdateButton'>Update</div>
            </div>
        </div>
    );
}

export default Location;
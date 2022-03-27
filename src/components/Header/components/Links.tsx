import React, {FC} from 'react';

interface LinkProps{
    name: string,
    active: boolean
}

const Links:FC<LinkProps> = ({name, active}):JSX.Element => {
    return (
        <p className='HeaderLinks' style={active ? {color: '#FF2365'} : {}} >{name}</p>
    );
}

export default Links;
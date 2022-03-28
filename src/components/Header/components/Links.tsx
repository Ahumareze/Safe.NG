import React, {FC} from 'react';

interface LinkProps{
    name: string,
    active: boolean,
    onClick: () => void
}

const Links:FC<LinkProps> = ({name, active, onClick}):JSX.Element => {
    return (
        <p onClick={() => onClick()} className='HeaderLinks' style={active ? {color: '#FF2365'} : {}} >{name}</p>
    );
}

export default Links;
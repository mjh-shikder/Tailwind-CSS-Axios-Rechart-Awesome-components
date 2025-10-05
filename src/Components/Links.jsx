import React from 'react';

const Links = ({route}) => {
    return (
        <li className='hover:bg-amber-200 px-4 rounded-lg'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;
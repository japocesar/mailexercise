import React from 'react';
import { getTags } from '../../selectors/getTags';

import './menu.css';

export const Menu = ( { tag, changeTag } ) => {
    const tags = getTags();

    return (
        <ul className="nav flex-column">
            <li className={`nav-item ${(tag === 'all') && 'active'}`}
                onClick={ () => changeTag('all') }>
                <span>Recibidos</span>
            </li>
            { tags.map( item => (
                <li key={item} className={`nav-item ${(tag === item) && 'active'}`}
                    onClick={() => changeTag(item)}>
                    <span>{item}</span>
                 </li>
            )) }
            
        </ul>
    )
}

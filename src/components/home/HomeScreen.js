import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExclamation } from "@fortawesome/free-solid-svg-icons";

import './home.css';

export const HomeScreen = ({tag, mails}) => {

    const handleSelect = (event) => {
        const el = event.currentTarget;
        const id = el.dataset.id;
        ( el.checked )
            ? document.querySelector(`[data-id="${id}"]`).classList.add('active')
            : document.querySelector(`[data-id="${id}"]`).classList.remove('active')
    }

    return (
        <>
          <h1>{tag}</h1>

          <ul className="list-group mb-5">
            { mails.map( mail => 
            (
    
                <li key={ mail.id } data-id={ mail.id } className="list-group-item d-flex">
                    <div className="mr-2 col">
                        <input onClick={ handleSelect } type="checkbox" data-id={ mail.id } aria-label="Checkbox for following text input"></input>
                    </div>
                    <div className="col icons-container p-0">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faExclamation} />
                    </div>
                    <div className="col-9 p-0 email-body d-flex flex-wrap">
                        <span className="subject content col-xs-12 col-md-auto"> { mail.subject } -</span>
                        <div className="col email-content" dangerouslySetInnerHTML={{ __html: mail.body }}></div>
                    </div>
                    <div className="p-0 text-right date-container"> { new Date(mail.date).toLocaleDateString() } </div>
                </li>
               
            ))
            }
        </ul>
        </>
    )
}

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faExclamation, faTrash } from "@fortawesome/free-solid-svg-icons";

import { getMails } from '../../selectors/getMails';

import './home.css';

export const HomeScreen = ({selectedTag, query}) => {

    const [mails, setMails] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelect = (event) => {
        const el = event.currentTarget;
        const id = el.dataset.id;

        if ( el.checked ) {
            document.querySelector(`[data-id="${id}"]`).classList.add('active')
            setSelectedItems([...selectedItems, mails[id-1]]);
        } else {
            const mailsList = [...selectedItems];
            const mail = mailsList.find(item => item.id ===  id);
            const indexMail = mailsList.indexOf(mail);
            mailsList.splice(indexMail, 1);
            setSelectedItems(mailsList);
            document.querySelector(`[data-id="${id}"]`).classList.remove('active')
        }
    }

    // useEffect(() => {
    //     const mailsList = getMails(selectedTag);
    //     setMails( mailsList );
    // }, [selectedTag]);

    useEffect(() => {
        console.log(selectedItems.length)
    }, [selectedItems]);

    useEffect(() => {
        let mailsList = [];
            mailsList = getMails(selectedTag, query);
        setMails( mailsList );
    }, [query, selectedTag]);

    return (
        <>
          <h1>{selectedTag}</h1>
          {
            ( selectedItems.length > 0 ) &&
            <div className="container">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faExclamation} />
                <FontAwesomeIcon icon={faTrash} />
            </div>
          }          

          <ul className="list-group mb-5">
            { (!mails.length) &&
            <li>
                <h3 className="text-danger text-center">Not found emails for "{ query }"</h3>
            </li>
            }
            
            { mails.map( mail => 
            (
                <li key={ mail.id } data-id={ mail.id } className="list-group-item d-flex flex-wrap">
                    <div className="col-1 p-0">
                        <input onClick={ handleSelect } type="checkbox" data-id={ mail.id } aria-label="Checkbox for following text input"></input>
                    </div>
                    <div className="icons-container p-0 col-11 col-lg-2 d-flex">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faExclamation} />
                        <span>{ mail.sender }</span>
                    </div>
                    <div className="col-12 col-lg-8 p-0 pl-3 email-body d-flex flex-wrap">
                        <span className="subject content col-xs-12 col-md-auto pr-0"> { mail.subject } -</span>
                        <div className="col email-content pl-1" dangerouslySetInnerHTML={{ __html: mail.body }}></div>
                    </div>
                    <div className="p-0 text-right date-container"> { new Date(mail.date).toLocaleDateString() } </div>
                </li>
               
            ))
            }
        </ul>
        </>
    )
}

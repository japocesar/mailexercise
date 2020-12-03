import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({handleQuery, query, setQuery}) => {

    // const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        // setInputValue(e.target.value);
        setQuery(e.target.value)
        if( e.target.value === '' ) handleQuery();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleQuery(query);
    }

   return (
        <nav className="navbar navbar-expand-sm navbar-light" style={{ backgroundColor: 'white', borderBottom: '1px solid lightgray' }}>
            <div className="col-3">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    MyMail
                </Link>
            </div>
           

            <div className="navbar-collapse col-6">
                <div className="navbar-nav col-12">
                    <form onSubmit={ handleSubmit } className="form-inline my-2 my-lg-0 col-12">
                        <input
                            name="searchText"
                            autoComplete="off"
                            value={ query }
                            onChange={handleInputChange}
                            className="form-control mr-sm-2 col-12" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info"> Hola</span>
                </ul>
            </div>
        </nav>
    )
}
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

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
                    <form className="form-inline my-2 my-lg-0 col-12">
                        <input className="form-control mr-sm-2 col-12" type="search" placeholder="Search" aria-label="Search" />
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
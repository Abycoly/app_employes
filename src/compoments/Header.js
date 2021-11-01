import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">Employees</a>

                    <ul className="navbar-nav d-inline-block">
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/employe" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/add" className="nav-link">Add</Link>
                        </li>
                        <li className="nav-item d-inline-block mr-2">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
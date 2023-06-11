import React from 'react';
import Auth from '../../utils/auth';
import { Link } from "react-router-dom";

function Nav() {

    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <ul className='flex-row'>
                    <li className='mx-1'>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='mx-1'>
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
            <ul className="flex-row">
                <li className="mx-1">
                  <Link to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="mx-1">
                  <Link to="/login">
                    Login
                  </Link>
                </li>
            </ul> 
            );
        }
    }

    return (
    <header>
        <h1>
            <Link to="/">
                <span role='img' aria-label='ufo'>🛸</span>
                CRYPTID
            </Link>
        </h1>

        <nav>
            {showNav()}
        </nav>
    </header>
    );
}

export default Nav;
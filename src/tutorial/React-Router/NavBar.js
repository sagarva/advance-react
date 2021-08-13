import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="item" to='/'>Home</Link>
                </li>
                <li>
                    <Link className="item" to='/about'>About</Link>
                </li>
                <li>
                    <Link className="item" to='/people'>People</Link>
                </li>
                <li>
                    <Link className="item" to='/person'>Person</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar

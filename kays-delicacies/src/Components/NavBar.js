import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='navbar'> 
            <div className='navbar-logo'>
                <h3>KAYS DELICACIES</h3>
            </div>
            <div className='navbar-list'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
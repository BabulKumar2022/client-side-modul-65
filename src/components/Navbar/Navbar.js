import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div >
            <div className="navbar">
                <ul>
                    <li> <a>{<Link  to="/">Home</Link>}</a> </li> 
                    <li> <a >{<Link to="/user/add">Add User</Link>}</a></li> 
                    <li> <a >{<Link to="/update/id">Update User</Link>}</a> </li>
                </ul>
             
            </div>
            
        </div>
    );
};

export default Navbar;
import React from 'react';

const NavBar = ({ counter }) => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar {counter}</a>
            </div>
        </nav>
    );
};
export default NavBar;
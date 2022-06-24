import React from 'react';
import {Link,NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <Link to="/">logo</Link>
                    </div>
                    <div className="develop">
                        <nav>
                            <NavLink to="/" className="nav-links">Home</NavLink>
                            <NavLink to={"/popular"} className="nav-links">Popular</NavLink>
                            <NavLink to={"/top-rated"} className="nav-links">Top Rated  </NavLink>
                            <NavLink to={"/latest"} className="nav-links">Latest</NavLink>
                            <NavLink to={"/movies/:movieID"} className="nav-links">Top-Rated</NavLink>

                        </nav>
                        <div className="buttons">
                            <button className="btn">Sign in</button>
                            <button className="btn"> Sign in </button>
                        </div>
                    </div>
                </div>

            </div>

        </header>

    );
};

export default Header;
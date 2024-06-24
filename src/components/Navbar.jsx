import React from 'react';
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Newsus</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-link">
                            <Link className={`nav-link ${createBrowserHistory().location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link className={`nav-link ${createBrowserHistory().location.pathname === '/business' ? 'active' : ''}`} to="/business">Business</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/entertainment" className={`nav-link ${createBrowserHistory().location.pathname === '/entertainment' ? 'active' : ''}`} >Entertainment</Link>
                        </li>
                        <li className="nav-link">
                            <Link className={`nav-link ${createBrowserHistory().location.pathname === '/health' ? 'active' : ''}`} to="/health">Health</Link>
                        </li>
                        <li className="nav-link">
                            <Link className={`nav-link ${createBrowserHistory().location.pathname === '/science' ? 'active' : ''}`} to="/science">Science</Link>
                        </li>
                        <li className="nav-link">
                            <Link className={`nav-link ${createBrowserHistory().location.pathname === '/sports' ? 'active' : ''}`} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-link">
                            <Link className={`nav-link ${createBrowserHistory().location.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
                        </li>
                        <li className="nav-link">
                            <Link className={`nav-link ${createBrowserHistory().location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;







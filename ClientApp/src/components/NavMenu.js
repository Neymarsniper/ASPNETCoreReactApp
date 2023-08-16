//import React, { Component } from 'react';
//import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
//import { Link } from 'react-router-dom';
//import './NavMenu.css';

//export class NavMenu extends Component {
//    static displayName = NavMenu.name;

//    constructor(props) {
//        super(props);

//        this.toggleNavbar = this.toggleNavbar.bind(this);
//        this.state = {
//            collapsed: true
//        };
//    }

//    toggleNavbar() {
//        this.setState({
//            collapsed: !this.state.collapsed
//        });
//    }

//    render() {
//        return (
//            <header>
//                <Navbar className="navbar-expand-lg navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
//                    <NavbarBrand tag={Link} to="/">ASPNETCoreReact</NavbarBrand>
//                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
//                        <ul className="navbar-nav flex-grow">
//                            <NavItem>
//                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
//                            </NavItem>
//                            <NavItem>
//                                <NavLink tag={Link} className="text-dark" to="/About">About</NavLink>
//                            </NavItem>
//                            <NavItem>
//                                <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
//                            </NavItem>
//                        </ul>
//                    </Collapse>
//                </Navbar>
//            </header>
//        );
//    }
//}



import React, { Component } from 'react';
/*import PropTypes from 'prop-types';*/
import { Link } from 'react-router-dom';

export class NavMenu extends Component {
    render() {
        const { mode, toggleMode } = this.props;

        return (
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Practice_App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch  text-${mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}



//My functional Based Component Code

//import React from 'react'
//import PropTypes from 'prop-types';
//import { Link } from "react-router-dom";
//export default function NavMenu(props) {
//    return (
//        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//            <div className="container-fluid">
//                <Link className="navbar-brand" to="/">{props.titletext}</Link>
//                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                    <span className="navbar-toggler-icon"></span>
//                </button>
//                <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                        <li className="nav-item">
//                            {/* <a className="nav-link active" aria-current="page" href="/"></a> */}
//                            <Link className="nav-link active" aria-current="page" to="/">{props.hometext}</Link>
//                        </li>
//                        <li className="nav-item">
//                            {/* <a className="nav-link" href="/">{props.abouttext}</a> */}
//                            <Link className="nav-link" to="/about">{props.abouttext}</Link>
//                        </li>
//                    </ul>
//                    {/* <form className="d-flex" role="search">
//          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//          <button className="btn btn-outline-success" type="submit">Search</button>
//        </form> */}
//                    <div className={`form-check form-switch  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
//                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//                    </div>
//                </div>
//            </div>
//        </nav>
//    );
//}

//NavMenu.propTypes = {
//    titletext: PropTypes.string.isRequired,
//    abouttext: PropTypes.string.isRequired
//}

//NavMenu.defaultProps = {
//    titletext: 'this is default title',
//    abouttext: 'this is default about'
//}
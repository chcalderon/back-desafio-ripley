import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm bg-primary-purple navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Logo" className="navbar-brand" style={{width: '200px'}}
                    />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Productos</Link>
                    </li>
                </ul>
            
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    .nav-link {
        /* nusty - ok for demo */ 
        color: var(--mainWhite) !important; 
        font-size: 1.05rem;
    }
`;
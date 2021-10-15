import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png';

import './Header.css';

const Header = () => {
    return (
        <div className="mt-3">
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                        <img className="header-img" src={logo} alt="" />
                        <Nav className="ms-auto">
                            <button className="btn-header btn">Login</button>
                            <button className="btn-header btn">Sing up</button>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;
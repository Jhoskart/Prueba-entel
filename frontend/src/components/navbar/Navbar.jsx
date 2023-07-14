import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Logo, Nav, NavLink, NavLinkContainer } from './StyledNavbar'

const Navbar = () => {

    const [activeNavLink, setActiveNavLink] = useState('');

    const handleNavLinkClick = (navLink) => {
        setActiveNavLink(navLink);
    }
    
    return (
        <Nav>
            <Logo src={logo} alt="logo" />
            <NavLinkContainer>
                <NavLink 
                    to="/"
                    onClick={() => handleNavLinkClick('formulario')}
                    className={activeNavLink === 'formulario' ? 'active' : ''}
                >
                    Formulario
                </NavLink>
                <NavLink 
                    to="/formlist"
                    onClick={() => handleNavLinkClick('lista')}
                    className={activeNavLink === 'lista' ? 'active' : ''}
                >
                    Lista formulario
                </NavLink>
            </NavLinkContainer>
        </Nav>
    )
}

export default Navbar

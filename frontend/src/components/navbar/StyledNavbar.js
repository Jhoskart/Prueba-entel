import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
    height: 70px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    z-index: 10;
`
export const Logo = styled.img`
    width: 53.443px;
    height: 40px;
    flex-shrink: 0;
    padding-left: 2.5rem;
    padding-top: 1rem;

    @media (max-width: 768px) {
        padding: auto;
    }
`
export const NavLinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2.5rem;
    gap: 0.5rem;
    @media (max-width: 768px) {
        gap: 0rem;
        padding-right: 0.5rem;
    }
`
export const NavLink = styled(Link)`
    text-decoration: none;
    color: var(--primary-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    padding: 0 1rem;
    border-radius: 24px;
    height: 40px;
    &:hover {
        background:#F3F5FF;
    }
    &.active {
        background:#F3F5FF;
    }
    @media (max-width: 768px) {
        font-size: 15px;
        padding: 0 0.5rem;
        color: #0c0c0c;
        border-radius: 0;

        &.active {
            text-decoration: underline;
            background: #FFF;
        }
    }
`
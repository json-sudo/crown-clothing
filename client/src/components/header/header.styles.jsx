import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled.div`
    height: 100%;
    width: 70px;
    padding: 10px;
    transition: filter 300ms ease-out;

    &:hover,
    &:focus {
        filter: drop-shadow(0 0.25rem 2px grey);
        outline: none;
    }
`;

export const HeaderLinksContainer = styled.nav `
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center; 
`;

export const HeaderLinksWrapper = styled.ul `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        display: none;
    } 
`

export const HeaderLinkList = styled.li `
    list-style: none;
`;

export const HeaderLink = styled(Link) `
    position: relative;
    padding: 5px;
    cursor: pointer;
    font-size: 20px;

    &:after {
        border-top: 2px solid #665700;
        border-radius: 2em;
        content: "";
        position: absolute;
        right: 100%;
        bottom: 0.2em;
        left: 0;
        transition: right 450ms cubic-bezier(0, 0.5, 0, 1);
    }

    &:hover,
    &:focus {
        color: #665700;
        outline: none;
    }

    &:hover:after,
    &:focus:after {
        right: 0;
        border-color: #665700;
    }
`

export const LogInOrOutLink = styled(Link) `
    margin-right: 1em;
    padding: 10px 2px;
    text-decoration: underline;
    color: #665700; 
    font-size: 20px;
    transition: color 300ms ease-out, text-shadow 300ms ease-out;

    &:hover,
    &:focus {
        color: #222;
        outline: none;
        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    }
`
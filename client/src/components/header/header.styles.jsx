import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 10px;
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

export const HeaderLink = styled.li `
    list-style: none;

    a {
        padding: 10px 5px;
        cursor: pointer;
        font-size: 20px;
    }
`;

export const LogInOrOutLink = styled(Link) `
    color: #665700; 
    text-decoration: underline;
    padding: 10px 5px;
    cursor: pointer;
    font-size: 20px;
    margin-right: 1em;
`
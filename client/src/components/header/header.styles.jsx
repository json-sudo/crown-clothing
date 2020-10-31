import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div `
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

export const OptionsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        width: 75%;
        justify-content: space-between;
    }

    & a:nth-child(3) {
        color: #665700;
        text-decoration: underline;
    }    
`;

export const OptionLink = styled(Link) `
    padding: 10px 5px;
    cursor: pointer;
    font-size: 20px;
`;
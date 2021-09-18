import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: 9999;
  justify-content: center;
  position: sticky;
  top: 2px;
`
export const LogoContainer = styled.div`
  margin-top: 1rem;
  /* position: sticky; */
  @media screen and (max-width: 960px) {
    display: none;
  }
`
export const Nav = styled.nav`
  z-index: 999;
  background-color: #000080;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 1rem;
  width: 75%;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
    width:95%;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content:center;
  height: 80px;

  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  align-items: center;
  margin-left: 3rem;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
    margin-left: 0;
  }
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    top: 0;
    right: 0;
    /* transform: translate(-100%, 60%); */
    font-size: 1.8rem;
    cursor: pointer;
    align-items: center;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-1000%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    border-radius: 1rem;
    justify-content: center;
  }
`;

export const NavItem = styled.li`
  height:4rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 1.4rem;
  &:hover{
    color: #4b59f7;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

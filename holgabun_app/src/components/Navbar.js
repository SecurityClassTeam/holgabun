import styled from 'styled-components';
import LogoSrc from './vegan.png';
import { Link } from 'react-router-dom';

const Nav = styled.div`
  background: #98ddde;
  height: 100px;
  margin-top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled.div`
  background-image: url(${LogoSrc});
  
`;

function Navbar() {
  return (    
      <Nav>
        <NavLogo></NavLogo>
        <NavbarContainer>홀가분</NavbarContainer>
      </Nav>
    
  );
}

export default Navbar;

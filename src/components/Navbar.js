import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Impedir rolagem lateral quando o menu estiver aberto
        if (!isOpen) {
            document.body.style.overflow = 'hidden';  // Desativa a rolagem do body
        } else {
            document.body.style.overflow = 'auto';  // Restaura a rolagem do body
        }
    };

    return (
        <Nav>
            <Logo>RH Portal</Logo>
            <HamburgerIcon onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </HamburgerIcon>
            <Links isOpen={isOpen}>
                <StyledLink to="/" onClick={toggleMenu}>Funcionários</StyledLink>
                <StyledLink to="/ausencias" onClick={toggleMenu}>Ausências</StyledLink>
                <StyledLink to="/folha-pagamento" onClick={toggleMenu}>Folha de Pagamento</StyledLink>
                <StyledLink to="/avaliacoes" onClick={toggleMenu}>Avaliações</StyledLink>
                <CloseButton onClick={toggleMenu}>×</CloseButton>
            </Links>
        </Nav>
    );
};

const Nav = styled.nav`
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 2px -2px gray;
  position: relative;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.h1`
  color: white;
  font-size: 24px;
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 25px;
  width: 30px;
  cursor: pointer;

  div {
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  
  /* Menu de navegação em telas pequenas */
  @media (max-width: 768px) {
    position: fixed;  /* Fixando o menu no topo */
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: #34495e;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  &:hover {
    color: #e74c3c;
  }

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
  margin: 0 10px;

  &:hover {
    color: #3498db;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 20px 0;
  }
`;

export default Navbar;

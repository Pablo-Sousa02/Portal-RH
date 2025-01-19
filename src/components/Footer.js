import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <p>&copy; 2025 RH Portal. Todos os direitos reservados.</p>
                <FooterLinks>
                    <FooterLink href="#">Termos de Uso</FooterLink>
                    <FooterLink href="#">Política de Privacidade</FooterLink>
                </FooterLinks>
            </FooterContent>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  width: 100%;
  padding: 20px 0;
  position: relative; 
  box-shadow: 0 -4px 2px -2px gray;
  
  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterLinks = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Footer;

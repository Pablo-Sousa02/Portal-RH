import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Funcionarios from './pages/Funcionarios';
import Ausencias from './pages/Ausencias';
import FolhaPagamento from './pages/FolhaPagamento';
import Avaliacoes from './pages/Avaliacoes';
import Footer from './components/Footer'; 
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <MainContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Funcionarios />} />
            <Route path="/ausencias" element={<Ausencias />} />
            <Route path="/folha-pagamento" element={<FolhaPagamento />} />
            <Route path="/avaliacoes" element={<Avaliacoes />} />
          </Routes>
        </MainContent>
        <Footer /> {/* Footer sempre no final */}
      </MainContainer>
    </Router>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Faz com que o conteúdo ocupe toda a altura da tela */
`;

const MainContent = styled.div`
  flex: 1; /* Isso vai garantir que o conteúdo principal ocupe o espaço restante */
  padding-bottom: 60px; /* Adicionando um espaço para o footer */
`;

export default App;

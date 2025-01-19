import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <Nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/funcionarios">Funcionários</Link></li>
                <li><Link to="/folha-pagamento">Folha de Pagamento</Link></li>
                <li><Link to="/ausencias">Ausências</Link></li>
                <li><Link to="/avaliacoes">Avaliações</Link></li>
            </ul>
        </Nav>
    );
};

const Nav = styled.nav`
  background-color: #333;
  padding: 10px 0;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  li {
    margin: 0 15px;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    color: #ddd;
  }
    
`;

export default NavBar;

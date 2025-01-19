import React, { useState } from 'react';
import styled from 'styled-components';

const Avaliacoes = () => {
  const [avaliacoes] = useState([
    { id: 1, nome: 'Carlos Silva', desempenho: 'Excelente', comentario: 'Ótimo desenvolvedor!' },
    { id: 2, nome: 'Ana Souza', desempenho: 'Bom', comentario: 'Boa gestão de equipe.' },
    { id: 3, nome: 'Mariana Oliveira', desempenho: 'Satisfatório', comentario: 'Melhorar atenção aos detalhes.' },
    { id: 4, nome: 'João Pereira', desempenho: 'Excelente', comentario: 'Excelente performance em projetos.' },
    { id: 5, nome: 'Paula Costa', desempenho: 'Excelente', comentario: 'Liderança e organização excepcionais.' },
  ]);

  return (
    <Container>
      <h2>Avaliações de Desempenho</h2>
      <Tabela>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Desempenho</th>
            <th>Comentário</th>
          </tr>
        </thead>
        <tbody>
          {avaliacoes.map(avaliacao => (
            <tr key={avaliacao.id}>
              <td>{avaliacao.id}</td>
              <td>{avaliacao.nome}</td>
              <td className="desempenho">{avaliacao.desempenho}</td>
              <td>{avaliacao.comentario}</td>
            </tr>
          ))}
        </tbody>
      </Tabela>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  animation: fadeIn 1s ease-out;

  h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 15px;
    text-align: left;
    border: 1px solid #ddd;
    font-size: 16px;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  th {
    background-color: #2c3e50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f4f4f4;
  }

  td {
    &:hover {
      transform: scale(1.05);
    }
  }

  .desempenho {
    color: #16a085;
    font-weight: bold;
    transition: color 0.3s ease;
    &:hover {
      color: #1abc9c;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    th, td {
      font-size: 14px;
      padding: 12px;
    }

    /* Exibir os dados em uma lista no lugar da tabela em telas pequenas */
    thead {
      display: none;
    }

    tbody {
      display: block;
    }

    tr {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
    }

    td {
      display: flex;
      
      padding-left: 0;
      padding-right: 0;
      border: none;
      margin-bottom: 10px;
      font-size: 14px;
    }

    td:before {
      content: attr(data-label);
      font-weight: bold;
      flex-basis: 30%;
    }

    td .desempenho {
      color: #16a085;
    }
  }

  @media (max-width: 480px) {
    th, td {
      font-size: 12px;
      padding: 10px;
    }

    td:before {
      font-size: 12px;
    }
  }
`;

export default Avaliacoes;

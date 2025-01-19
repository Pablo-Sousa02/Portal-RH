import React, { useState } from 'react';
import styled from 'styled-components';

const FolhaPagamento = () => {
    const [folhaPagamento] = useState([
        { id: 1, nome: 'Carlos Silva', salario: 3500, data: '2025-01-15' },
        { id: 2, nome: 'Ana Souza', salario: 5000, data: '2025-01-15' },
        { id: 3, nome: 'Mariana Oliveira', salario: 4000, data: '2025-01-16' },
        { id: 4, nome: 'João Pereira', salario: 4500, data: '2025-01-16' },
        { id: 5, nome: 'Paula Costa', salario: 6000, data: '2025-01-16' },
        { id: 6, nome: 'Lucas Lima', salario: 1800, data: '2025-01-16' },
    ]);

    return (
        <Container>
            <h2>Folha de Pagamento</h2>
            <Tabela>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Salário</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {folhaPagamento.map(folha => (
                        <tr key={folha.id}>
                            <td>{folha.id}</td>
                            <td>{folha.nome}</td>
                            <td className="salario">{`R$ ${folha.salario.toFixed(2)}`}</td>
                            <td>{folha.data}</td>
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

  .salario {
    color: #27ae60; /* Verde */
    font-weight: bold;
    transition: color 0.3s ease;
    &:hover {
      color: #2ecc71; /* Verde mais claro */
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

    td .salario {
      color: #27ae60;
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

export default FolhaPagamento;

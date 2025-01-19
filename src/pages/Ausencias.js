import React, { useState } from 'react';
import styled from 'styled-components';

const Ausencias = () => {
    const [ausencias] = useState([
        { id: 1, nome: 'Carlos Silva', data: '2025-01-10', motivo: 'Doença' },
        { id: 2, nome: 'Ana Souza', data: '2025-01-12', motivo: 'Vacinação' },
        { id: 3, nome: 'Mariana Oliveira', data: '2025-01-13', motivo: 'Férias' },
        { id: 4, nome: 'João Pereira', data: '2025-01-15', motivo: 'Problemas pessoais' },
    ]);

    return (
        <Container>
            <h2>Registros de Ausências</h2>
            <Tabela>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Data</th>
                        <th>Motivo</th>
                    </tr>
                </thead>
                <tbody>
                    {ausencias.map(ausencia => (
                        <tr key={ausencia.id}>
                            <td>{ausencia.id}</td>
                            <td>{ausencia.nome}</td>
                            <td>{ausencia.data}</td>
                            <td className="motivo">{ausencia.motivo}</td>
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

  .motivo {
    color: #e74c3c;
    font-weight: bold;
    transition: color 0.3s ease;
    &:hover {
      color: #c0392b;
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

    td.motivo {
      color: #e74c3c;
    }
  }
`;

export default Ausencias;

import React, { useState } from 'react';
import styled from 'styled-components';

const Funcionarios = () => {
    const [funcionarios, setFuncionarios] = useState([
        { id: 1, nome: 'Carlos Silva', cargo: 'Desenvolvedor', salario: 3500, descricaoCargo: 'Responsável por escrever o código e implementar funcionalidades no software.' },
        { id: 2, nome: 'Ana Souza', cargo: 'Gerente', salario: 5000, descricaoCargo: 'Coordena equipes e gerencia os projetos dentro da empresa.' },
        { id: 3, nome: 'Mariana Oliveira', cargo: 'Designer', salario: 4000, descricaoCargo: 'Cria layouts, design de interfaces e outras peças visuais.' },
        { id: 4, nome: 'João Pereira', cargo: 'Analista de Sistemas', salario: 4500, descricaoCargo: 'Analisa requisitos de sistemas e ajuda na criação de soluções tecnológicas.' },
        { id: 5, nome: 'Paula Costa', cargo: 'Gerente de Projetos', salario: 6000, descricaoCargo: 'Gerencia os cronogramas e os recursos de diferentes projetos.' },
        { id: 6, nome: 'Lucas Lima', cargo: 'Estagiário', salario: 1800, descricaoCargo: 'Auxilia em tarefas diárias, aprendendo e se desenvolvendo dentro da empresa.' },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [novoFuncionario, setNovoFuncionario] = useState({
        nome: '',
        cargo: '',
        salario: '',
    });

    const [descricaoCargo, setDescricaoCargo] = useState('');
    const [modalDescricaoVisible, setModalDescricaoVisible] = useState(false);
    const [mensagemSucesso, setMensagemSucesso] = useState('');

    const abrirModalDescricao = (descricao) => {
        setDescricaoCargo(descricao);
        setModalDescricaoVisible(true);
    };

    const fecharModalDescricao = () => {
        setModalDescricaoVisible(false);
    };

    const abrirModalCadastro = () => {
        setModalVisible(true);
    };

    const fecharModalCadastro = () => {
        setModalVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNovoFuncionario((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFuncionario = {
            ...novoFuncionario,
            id: funcionarios.length + 1, // Gerando ID simples
            salario: parseFloat(novoFuncionario.salario), // Garantir que o salário seja um número
            descricaoCargo: 'Descrição de cargo não especificada', // Adicione uma descrição padrão
        };
        setFuncionarios([...funcionarios, newFuncionario]);
        setNovoFuncionario({ nome: '', cargo: '', salario: '' }); // Limpar o formulário
        setModalVisible(false); // Fechar o modal após o envio

        // Mostrar mensagem de sucesso
        setMensagemSucesso('Funcionário cadastrado com sucesso!');
        
        // Limpar a mensagem após 3 segundos
        setTimeout(() => {
            setMensagemSucesso('');
        }, 3000);
    };

    const removerFuncionario = (id) => {
        const novosFuncionarios = funcionarios.filter(funcionario => funcionario.id !== id);
        setFuncionarios(novosFuncionarios);

        // Mostrar mensagem de sucesso
        setMensagemSucesso('Funcionário removido com sucesso!');
        
        // Limpar a mensagem após 3 segundos
        setTimeout(() => {
            setMensagemSucesso('');
        }, 3000);
    };

    return (
        <Container>
            <h2>Funcionários</h2>
            <TabelaWrapper>
                <Tabela>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Cargo</th>
                            <th>Salário</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map(funcionario => (
                            <tr key={funcionario.id}>
                                <td>{funcionario.id}</td>
                                <td>{funcionario.nome}</td>
                                <td className="cargo" onClick={() => abrirModalDescricao(funcionario.descricaoCargo)}>{funcionario.cargo}</td>
                                <td>{`R$ ${funcionario.salario.toFixed(2)}`}</td>
                                <td>
                                    <RemoverButton onClick={() => removerFuncionario(funcionario.id)}>Remover</RemoverButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Tabela>
            </TabelaWrapper>

            {/* Botão de cadastrar funcionário */}
            <CadastrarButton onClick={abrirModalCadastro}>Cadastrar Novo Funcionário</CadastrarButton>

            {/* Mensagem de sucesso */}
            {mensagemSucesso && <MensagemSucesso>{mensagemSucesso}</MensagemSucesso>}

            {/* Modal para Cadastro */}
            {modalVisible && (
                <Modal>
                    <ModalContent>
                        <h3>Cadastrar Novo Funcionário</h3>
                        <Form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={novoFuncionario.nome}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="text"
                                name="cargo"
                                placeholder="Cargo"
                                value={novoFuncionario.cargo}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="number"
                                name="salario"
                                placeholder="Salário"
                                value={novoFuncionario.salario}
                                onChange={handleChange}
                                required
                            />
                            <Button type="submit">Cadastrar</Button>
                            <FecharButton onClick={fecharModalCadastro}>Fechar</FecharButton>
                        </Form>
                    </ModalContent>
                </Modal>
            )}

            {/* Modal para Descrição do Cargo */}
            {modalDescricaoVisible && (
                <Modal>
                    <ModalContent>
                        <h3>Descrição do Cargo</h3>
                        <p>{descricaoCargo}</p>
                        <FecharButton onClick={fecharModalDescricao}>Fechar</FecharButton>
                    </ModalContent>
                </Modal>
            )}
        </Container>
    );
};

const Container = styled.div`
  padding: 20px;
  animation: fadeIn 1s ease-out;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TabelaWrapper = styled.div`
  overflow-x: auto; /* Adiciona rolagem horizontal se necessário */
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
    font-size: 14px;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  th {
    background-color: #2c3e50;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f4f4f4;
  }
  

  .cargo {
    color: #16a085;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
      color: #1abc9c;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInModal 0.3s ease-out;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 60%; /* Tamanho ajustado para telas grandes */
  max-width: 500px; /* Definindo largura máxima */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeInContent 0.5s ease-out;

  /* Responsividade */
  @media (max-width: 768px) {
    width: 80%; /* Modal maior em telas médias */
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Modal maior em telas pequenas */
    padding: 10px;
  }
`;

const FecharButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
    font-size: 12px;
  }
`;

const RemoverButton = styled.button`
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #c0392b;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const CadastrarButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #34495e;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 6px 14px;
    font-size: 12px;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 10px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #2c3e50;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #34495e;
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 14px;
  }
`;

const MensagemSucesso = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #27ae60;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  animation: fadeIn 0.5s ease-out;
`;

export default Funcionarios;

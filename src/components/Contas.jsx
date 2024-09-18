import React, { useState } from 'react';

const Contas = ({ transactions, setTransactions }) => {
  const [searchValue, setSearchValue] = useState('');

  // Estados para os campos do formulário de adicionar nova conta
  const [newDate, setNewDate] = useState('');
  const [newType, setNewType] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');

  // Função para adicionar uma nova conta/transação
  const addTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: transactions.length + 1,
      date: newDate,
      type: newType,
      category: newCategory,
      amount: parseFloat(newAmount),
    };

    // Adiciona a nova transação ao estado compartilhado
    setTransactions([...transactions, newTransaction]);

    // Limpa os campos do formulário
    setNewDate('');
    setNewType('');
    setNewCategory('');
    setNewAmount('');
  };

  // Filtrar as transações com base na pesquisa
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.amount.toString().includes(searchValue)
  );

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Contas</h1>
      </div>

      {/* Barra de pesquisa para filtrar transações */}
      <section>
        <h2>Pesquisar Transações por Valor</h2>
        <input
          type="text"
          placeholder="Digite o valor para pesquisar"
          className="form-control mb-3"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </section>

      {/* Formulário para adicionar nova conta/transação */}
      <section>
        <h2>Adicionar Nova Transação</h2>
        <form onSubmit={addTransaction} className="row mb-4">
          <div className="col-md-6 mb-3">
            <label htmlFor="date" className="form-label">Data</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="type" className="form-label">Tipo</label>
            <input
              type="text"
              className="form-control"
              id="type"
              placeholder="Depósito, Pagamento, Transferência"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="category" className="form-label">Categoria</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Salário, Contas, Outros"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="amount" className="form-label">Valor</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Digite o valor da transação"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Adicionar Transação</button>
          </div>
        </form>
      </section>

      {/* Exibir as transações filtradas */}
      <section>
        <h3>Transações Recentes</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Data</th>
                <th>Tipo</th>
                <th>Categoria</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.type}</td>
                  <td>{t.category}</td>
                  <td>{t.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Contas;

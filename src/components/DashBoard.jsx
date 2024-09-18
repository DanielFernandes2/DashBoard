import React, { useState } from 'react';

const Dashboard = ({ transactions }) => {
  // Estado para armazenar o valor da pesquisa
  const [searchValue, setSearchValue] = useState('');

  // Filtrar as transações com base na pesquisa
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.amount.toString().includes(searchValue)
  );

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard SmartFin</h1>
      </div>

      {/* Barra de pesquisa para filtrar transações */}
      <section>
        <h2>Pesquisar Transações por Valor</h2>
        <input
          type="text"
          placeholder="Digite o valor para pesquisar"
          className="form-control mb-3"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} // Atualiza o valor da pesquisa
        />
      </section>

      {/* Seção de Saldo e Transações */}
      <section>
        <h2>Transações Recentes</h2>
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

export default Dashboard;

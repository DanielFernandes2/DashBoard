import React, { useState } from 'react';

const SaldoTransacoes = () => {
  const transactions = [
    { id: 1, date: '2024-09-10', type: 'Depósito', category: 'Salário', amount: 5000 },
    { id: 2, date: '2024-09-12', type: 'Pagamento', category: 'Contas', amount: -1500 },
    { id: 3, date: '2024-09-14', type: 'Transferência', category: 'Outros', amount: 200 },
  ];

  const [filter, setFilter] = useState('');
  const filteredTransactions = transactions.filter(t => t.type.includes(filter));

  return (
    <div>
      <h1>Saldo: R$ 3500,00</h1>
      <input
        type="text"
        placeholder="Filtrar por tipo"
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="table">
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
  );
};

export default SaldoTransacoes;

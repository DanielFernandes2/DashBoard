import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Contas from './components/Contas';
import Relatorios from './components/Relatorios';  // Importar Relatórios

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  return (
    <Router>
      <div className="container-fluid">
        {/* Barra superior com o botão de Login */}
        <div className="row bg-light py-2">
          <div className="col d-flex justify-content-end align-items-center">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>

        {/* Layout principal com Sidebar e Conteúdo */}
        <div className="row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard transactions={transactions} />} />
            <Route path="/contas" element={<Contas transactions={transactions} setTransactions={setTransactions} />} />
            <Route path="/relatorios" element={<Relatorios transactions={transactions} />} /> {/* Certifique-se que essa rota está presente */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

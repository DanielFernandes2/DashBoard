import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Relatorios = ({ transactions }) => {
  const [chartWidth, setChartWidth] = useState(600); // Define a largura inicial padrão
  const chartContainerRef = useRef(null); // Usaremos este ref para capturar o tamanho do contêiner

  // Atualizar a largura do gráfico ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth); // Usar o tamanho do contêiner
      }
    };

    handleResize(); // Ajustar a largura logo na primeira renderização
    window.addEventListener('resize', handleResize);

    // Cleanup do evento de redimensionamento
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preparar os dados para o gráfico
  const data = transactions.map((transaction) => ({
    date: transaction.date,
    amount: transaction.amount,
  }));

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Relatórios Financeiros</h1>
      </div>

      {/* Verificar se há dados para exibir no gráfico */}
      {data.length > 0 ? (
        <section ref={chartContainerRef}> {/* Usamos o ref no contêiner */}
          <h3>Gráfico de Transações</h3>
          <LineChart width={chartWidth} height={300} data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </section>
      ) : (
        <p>Nenhuma transação encontrada para gerar o gráfico.</p>
      )}
    </main>
  );
};

export default Relatorios;

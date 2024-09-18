import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RelatoriosFinanceiros = () => {
  const data = [
    { name: 'Jan', receita: 4000, despesas: 2400 },
    { name: 'Feb', receita: 3000, despesas: 1398 },
    { name: 'Mar', receita: 2000, despesas: 9800 },
    { name: 'Apr', receita: 2780, despesas: 3908 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="receita" stroke="#8884d8" />
      <Line type="monotone" dataKey="despesas" stroke="#82ca9d" />
    </LineChart>
  );
};

export default RelatoriosFinanceiros;

import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const GraphicsComponet = () => {
  const data = [
    {
      percentage: 100,
    },
    {
      percentage: 60,
    },
    {
      percentage: 10,
    },
    {
      percentage: 80,
    },
    {
      percentage: 40,
    },
    {
      percentage: 30,
    },
  ];
  return (
    <div style={{ width: '88%', height: 54, marginLeft: '15%' }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="percentage"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GraphicsComponet;

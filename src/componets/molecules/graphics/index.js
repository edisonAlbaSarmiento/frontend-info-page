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
      percentage: 40,
    },
  ];
  return (
    <div style={{ width: '100%', height: 100 }}>
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

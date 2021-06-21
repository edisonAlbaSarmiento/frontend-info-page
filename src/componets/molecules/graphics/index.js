import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const GraphicsComponet = ({ dataInfo }) => {
  const data = [
    { percentage: 10 },
    { percentage: 50 },
    { percentage: 63 },
    { percentage: 60 },
    { percentage: 40 },
    { percentage: 40 },
    { percentage: 89 },
    { percentage: 75 },
    { percentage: 100 },
    { percentage: 10 },
    { percentage: 50 },
    { percentage: 63 },
    { percentage: 89 },
    { percentage: 75 },
    { percentage: 100 },
    { percentage: 60 },
    { percentage: 40 },
    { percentage: 40 },
  ];
  return (
    <div
      style={{
        width: '100%',
        height: 48,
      }}
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <Area
            type="monotone"
            dataKey="percentage"
            stroke={
              (dataInfo.title === 'REVENUE' && '#9BD05D') ||
              (dataInfo.title === 'IMPRESIONS' && '#86C6E0') ||
              (dataInfo.title === 'VISITS' && '#E6C44C')
            }
            fill={
              (dataInfo.title === 'REVENUE' && '#9BD05D66') ||
              (dataInfo.title === 'IMPRESIONS' && '#86C6E066') ||
              (dataInfo.title === 'VISITS' && '#E6C44C66')
            }
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default GraphicsComponet;

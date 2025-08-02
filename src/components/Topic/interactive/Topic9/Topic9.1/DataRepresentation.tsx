import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

interface DataPoint {
  name: string;
  frequency: number;
  cumulativeFrequency: number;
  relativeFrequency: number;
}

const DataRepresentationViz: React.FC = () => {
  const [viewType, setViewType] = useState<string>('Table');

  // Sample dataset for demonstration (e.g., exam scores)
  const data: DataPoint[] = [
    { name: '0-20', frequency: 5, cumulativeFrequency: 5, relativeFrequency: 0.125 },
    { name: '21-40', frequency: 8, cumulativeFrequency: 13, relativeFrequency: 0.2 },
    { name: '41-60', frequency: 12, cumulativeFrequency: 25, relativeFrequency: 0.3 },
    { name: '61-80', frequency: 10, cumulativeFrequency: 35, relativeFrequency: 0.25 },
    { name: '81-100', frequency: 5, cumulativeFrequency: 40, relativeFrequency: 0.125 },
  ];

  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff4d4f'];

  const renderFrequencyTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-700">
        <thead className="text-xs uppercase bg-blue-500 text-white">
          <tr>
            <th className="py-3 px-4">Class Interval</th>
            <th className="py-3 px-4">Frequency</th>
            <th className="py-3 px-4">Cumulative Frequency</th>
            <th className="py-3 px-4">Relative Frequency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <td className="py-3 px-4">{row.name}</td>
              <td className="py-3 px-4">{row.frequency}</td>
              <td className="py-3 px-4">{row.cumulativeFrequency}</td>
              <td className="py-3 px-4">{row.relativeFrequency.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBarChart = () => (
    <BarChart width={360} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="frequency" fill="#8884d8" />
    </BarChart>
  );

  const renderPieChart = () => (
    <PieChart width={360} height={300}>
      <Pie data={data} dataKey="frequency" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );

  const renderHistogram = () => (
    <BarChart layout="vertical" width={360} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="frequency" fill="#82ca9d" barSize={70} />
    </BarChart>
  );

  const renderFrequencyPolygon = () => (
    <LineChart width={360} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="frequency" stroke="#ffc658" />
    </LineChart>
  );

  const renderOgive = () => (
    <AreaChart width={360} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="cumulativeFrequency" stroke="#ff7300" fill="#ff7300" fillOpacity={0.3} />
    </AreaChart>
  );

  const renderView = () => {
    switch (viewType) {
      case 'Table':
        return renderFrequencyTable();
      case 'Bar':
        return renderBarChart();
      case 'Pie':
        return renderPieChart();
      case 'Histogram':
        return renderHistogram();
      case 'FrequencyPolygon':
        return renderFrequencyPolygon();
      case 'Ogive':
        return renderOgive();
      default:
        return renderFrequencyTable();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gradient-to-r from-[#DA6C6C] to-[#AF3E3E] flex flex-col justify-center font-sans rounded-2xl">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">Data Representation Visualizer</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {['Table', 'Bar', 'Pie', 'Histogram', 'FrequencyPolygon', 'Ogive'].map((type) => (
          <button
            key={type}
            className={`py-2 px-4 rounded-full border-1 transition ${
              viewType === type ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setViewType(type)}
          >
            {type.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>
      <div className="flex justify-center bg-white rounded-lg">
        {renderView()}
      </div>
    </div>
  );
};

export default DataRepresentationViz;
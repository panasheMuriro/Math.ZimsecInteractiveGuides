import React, {  useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

interface DataPoint {
  name: string;
  frequency: number;
  cumulativeFrequency: number;
  relativeFrequency: number;
}

// --- New Color Palette ---
const PALETTE = {
  cream: "#f4f1de",
  salmon: "#e07a5f",
  darkBlue: "#3d405b",
  sageGreen: "#81b29a",
  lightOrange: "#f2cc8f",
};

// Define a shadow color with 40% opacity
const SHADOW_COLOR = 'rgba(61, 64, 91, 0.4)';

// --- Neubrutalism Styles ---
const neubrutalismBase = {
  border: `3px solid ${PALETTE.darkBlue}`,
  borderRadius: '8px',
  transition: 'all 0.2s',
};

const getButtonStyle = (isActive: boolean) => {
  return {
    ...neubrutalismBase,
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    backgroundColor: isActive ? PALETTE.salmon : PALETTE.lightOrange,
    color: PALETTE.darkBlue,
    cursor: 'pointer',
    boxShadow: `3px 3px 0px ${SHADOW_COLOR}`,
    ':hover': {
      backgroundColor: isActive ? PALETTE.salmon : PALETTE.lightOrange,
      boxShadow: `2px 2px 0px ${SHADOW_COLOR}`,
      transform: 'translate(1px, 1px)',
    }
  };
};

const getChartContainerStyle = () => {
  return {
    ...neubrutalismBase,
    backgroundColor: PALETTE.cream,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: `4px 4px 0px ${SHADOW_COLOR}`,
  };
};

const DataRepresentation: React.FC = () => {
  const [viewType, setViewType] = useState<string>('Table');

  // Sample dataset for demonstration (e.g., exam scores)
  const data: DataPoint[] = [
    { name: '0-20', frequency: 5, cumulativeFrequency: 5, relativeFrequency: 0.125 },
    { name: '21-40', frequency: 8, cumulativeFrequency: 13, relativeFrequency: 0.2 },
    { name: '41-60', frequency: 12, cumulativeFrequency: 25, relativeFrequency: 0.3 },
    { name: '61-80', frequency: 10, cumulativeFrequency: 35, relativeFrequency: 0.25 },
    { name: '81-100', frequency: 5, cumulativeFrequency: 40, relativeFrequency: 0.125 },
  ];

  // Shuffled color order
  const colors = [PALETTE.salmon, PALETTE.sageGreen, PALETTE.lightOrange, PALETTE.salmon, PALETTE.sageGreen];

  const renderFrequencyTable = () => (
    <div style={{...neubrutalismBase, overflowX: 'auto', boxShadow: `4px 4px 0px ${SHADOW_COLOR}`}}>
      <table style={{width: '100%', fontSize: '0.875rem', textAlign: 'left', color: PALETTE.darkBlue, borderCollapse: 'collapse'}}>
        <thead style={{backgroundColor: PALETTE.sageGreen, color: PALETTE.darkBlue, fontWeight: 'bold'}}>
          <tr>
            <th style={{padding: '0.75rem 1rem', borderBottom: `2px solid ${PALETTE.darkBlue}`}}>Class Interval</th>
            <th style={{padding: '0.75rem 1rem', borderBottom: `2px solid ${PALETTE.darkBlue}`}}>Frequency</th>
            <th style={{padding: '0.75rem 1rem', borderBottom: `2px solid ${PALETTE.darkBlue}`}}>Cumulative Frequency</th>
            <th style={{padding: '0.75rem 1rem', borderBottom: `2px solid ${PALETTE.darkBlue}`}}>Relative Frequency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{backgroundColor: index % 2 === 0 ? PALETTE.cream : PALETTE.cream, borderBottom: `1px solid ${PALETTE.darkBlue}`}}>
              <td style={{padding: '0.75rem 1rem'}}>{row.name}</td>
              <td style={{padding: '0.75rem 1rem'}}>{row.frequency}</td>
              <td style={{padding: '0.75rem 1rem'}}>{row.cumulativeFrequency}</td>
              <td style={{padding: '0.75rem 1rem'}}>{row.relativeFrequency.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderBarChart = () => (
    <BarChart width={360} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.darkBlue} />
      <XAxis dataKey="name" stroke={PALETTE.darkBlue} />
      <YAxis stroke={PALETTE.darkBlue} />
      <Tooltip />
      <Legend />
      <Bar dataKey="frequency" fill={PALETTE.salmon} />
    </BarChart>
  );

  const renderPieChart = () => (
    <PieChart width={300} height={300}>
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
      <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.darkBlue} />
      <XAxis type="number" stroke={PALETTE.darkBlue} />
      <YAxis type="category" dataKey="name" stroke={PALETTE.darkBlue} />
      <Tooltip />
      <Legend />
      <Bar dataKey="frequency" fill={PALETTE.sageGreen} barSize={70} />
    </BarChart>
  );

  const renderFrequencyPolygon = () => (
    <LineChart width={360} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.darkBlue} />
      <XAxis dataKey="name" stroke={PALETTE.darkBlue} />
      <YAxis stroke={PALETTE.darkBlue} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="frequency" stroke={PALETTE.darkBlue} strokeWidth={2} />
    </LineChart>
  );

  const renderOgive = () => (
    <AreaChart width={360} height={300} data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={PALETTE.darkBlue} />
      <XAxis dataKey="name" stroke={PALETTE.darkBlue} />
      <YAxis stroke={PALETTE.darkBlue} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="cumulativeFrequency" stroke={PALETTE.salmon} fill={PALETTE.salmon} fillOpacity={0.3} />
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
    <div style={{...neubrutalismBase, maxWidth: '600px', width: '100%', margin: '2rem auto', padding: '1rem', backgroundColor: PALETTE.darkBlue, borderRadius: '20px', boxShadow: `8px 8px 0px #000`}}>
      <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: PALETTE.cream, textAlign: 'center'}}>Data Representation Visualizer</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem'}}>
        {['Table', 'Bar', 'Pie', 'Histogram', 'FrequencyPolygon', 'Ogive'].map((type) => (
          <button
            key={type}
            style={getButtonStyle(viewType === type)}
            onClick={() => setViewType(type)}
          >
            {type.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>
      <div style={getChartContainerStyle()}>
        {renderView()}
      </div>
    </div>
  );
};

export default DataRepresentation;

import { useState } from 'react';

const RateCalculator = () => {
  const [rateType, setRateType] = useState<'speed' | 'density' | 'price'>('speed');
  const [quantity1, setQuantity1] = useState<number>(60);
  const [quantity2, setQuantity2] = useState<number>(1);

  const calculateRate = () => {
    switch(rateType) {
      case 'speed': return `${(quantity1 / quantity2).toFixed(1)} km/h`;
      case 'density': return `${(quantity1 / quantity2).toFixed(1)} g/cm³`;
      case 'price': return `$${(quantity1 / quantity2).toFixed(2)} per unit`;
    }
  };

  const labels = {
    speed: { q1: 'Distance (km)', q2: 'Time (hours)' },
    density: { q1: 'Mass (g)', q2: 'Volume (cm³)' },
    price: { q1: 'Cost ($)', q2: 'Quantity' }
  };

  return (
    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
      <h3 className="text-xl font-bold mb-4 text-green-800">Rate Calculator</h3>
      
      <div className="flex gap-4 mb-6">
        <button 
          onClick={() => setRateType('speed')} 
          className={`px-4 py-2 rounded-lg ${rateType === 'speed' ? 'bg-green-500 text-white' : 'bg-white'}`}
        >
          Speed
        </button>
        <button 
          onClick={() => setRateType('density')} 
          className={`px-4 py-2 rounded-lg ${rateType === 'density' ? 'bg-green-500 text-white' : 'bg-white'}`}
        >
          Density
        </button>
        <button 
          onClick={() => setRateType('price')} 
          className={`px-4 py-2 rounded-lg ${rateType === 'price' ? 'bg-green-500 text-white' : 'bg-white'}`}
        >
          Price
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1">{labels[rateType].q1}</label>
          <input 
            type="number" 
            value={quantity1}
            onChange={(e) => setQuantity1(Number(e.target.value))}
            className="w-full p-2 border border-green-300 rounded"
            min="0.1"
            step="0.1"
          />
        </div>
        <div>
          <label className="block mb-1">{labels[rateType].q2}</label>
          <input 
            type="number" 
            value={quantity2}
            onChange={(e) => setQuantity2(Number(e.target.value))}
            className="w-full p-2 border border-green-300 rounded"
            min="0.1"
            step="0.1"
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-inner">
        <h4 className="font-bold mb-2">Calculated Rate</h4>
        <div className="text-2xl font-bold text-green-700">
          {calculateRate()}
        </div>
      </div>
    </div>
  );
};

export default RateCalculator;

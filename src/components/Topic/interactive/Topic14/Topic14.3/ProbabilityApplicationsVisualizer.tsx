import React, { useState } from 'react';
import { CloudRain, Package, RefreshCw } from 'lucide-react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const ProbabilityApplicationsVisualizer: React.FC = () => {
  const [weatherResult, setWeatherResult] = useState<string | null>(null);
  const [productResult, setProductResult] = useState<string | null>(null);
  const [weatherTries, setWeatherTries] = useState<number>(0);
  const [weatherRainCount, setWeatherRainCount] = useState<number>(0);
  const [productTries, setProductTries] = useState<number>(0);
  const [productPurchaseCount, setProductPurchaseCount] = useState<number>(0);
  const [animateWeather, setAnimateWeather] = useState<boolean>(false);
  const [animateProduct, setAnimateProduct] = useState<boolean>(false);

  const simulateWeather = () => {
    const result = Math.random() < 0.7 ? 'Rain' : 'No Rain';
    setWeatherResult(result);
    setWeatherTries(prev => prev + 1);
    if (result === 'Rain') {
      setWeatherRainCount(prev => prev + 1);
    }
    setAnimateWeather(true);
    setTimeout(() => setAnimateWeather(false), 300);
  };

  const simulatePurchase = () => {
    const result = Math.random() < 0.2 ? 'Purchase' : 'No Purchase';
    setProductResult(result);
    setProductTries(prev => prev + 1);
    if (result === 'Purchase') {
      setProductPurchaseCount(prev => prev + 1);
    }
    setAnimateProduct(true);
    setTimeout(() => setAnimateProduct(false), 300);
  };

  const weatherExpProb = weatherTries > 0 ? (weatherRainCount / weatherTries).toFixed(2) : '0.00';
  const productExpProb = productTries > 0 ? (productPurchaseCount / productTries).toFixed(2) : '0.00';

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 rounded-lg shadow-md text-gray-800 font-sans">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🌤️ Weather Forecasting</h2>
        <p className="text-sm mb-2">
          Theoretical Probability of Rain:
          <BlockMath math={"P(\\text{rain}) = 0.7"} />
        </p>
        <p className="text-sm mb-2">
          Experimental Probability: 
          <BlockMath math={`P(\\text{rain}) = \\dfrac{${weatherRainCount}}{${weatherTries}} = ${weatherExpProb}`} />
        </p>
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <CloudRain className={`w-12 h-12 ${weatherResult === 'Rain' ? 'text-blue-500' : weatherResult === 'No Rain' ? 'text-gray-500' : 'text-gray-400'}`} />
            <span className="ml-2 text-lg font-bold">{weatherResult || '-'}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={simulateWeather}
            className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform ${animateWeather ? 'scale-110' : 'scale-100'}`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Simulate Weather
          </button>
        </div>
        {weatherResult && (
          <p className="text-sm mt-2 text-center">
            Result: <span className="font-bold">{weatherResult}</span>!
            {weatherResult === 'Rain' ? ' ☔ Better grab an umbrella!' : ' ☀️ Looks clear!'}
          </p>
        )}
        <p className="text-sm mt-2 text-center">
          Tries: <span className="font-bold">{weatherTries}</span> | Rain: <span className="font-bold">{weatherRainCount}</span>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Customer Purchase</h2>
        <p className="text-sm mb-2">
          Theoretical Probability of Purchase:
          <BlockMath math={"P(\\text{purchase}) = 0.2"} />
        </p>
        <p className="text-sm mb-2">
          Experimental Probability: 
          <BlockMath math={`P(\\text{purchase}) = \\dfrac{${productPurchaseCount}}{${productTries}} = ${productExpProb}`} />
        </p>
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <Package className={`w-12 h-12 ${productResult === 'Purchase' ? 'text-green-500' : productResult === 'No Purchase' ? 'text-gray-500' : 'text-gray-400'}`} />
            <span className="ml-2 text-lg font-bold">{productResult || '-'}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <button
            onClick={simulatePurchase}
            className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform ${animateProduct ? 'scale-110' : 'scale-100'}`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Simulate Purchase
          </button>
        </div>
        {productResult && (
          <p className="text-sm mt-2 text-center">
            Result: <span className="font-bold">{productResult}</span>!
            {productResult === 'Purchase' ? ' 🛒 Item purchased!' : ' 🛍️ No purchase this time.'}
          </p>
        )}
        <p className="text-sm mt-2 text-center">
          Tries: <span className="font-bold">{productTries}</span> | Purchases: <span className="font-bold">{productPurchaseCount}</span>
        </p>
      </section>
    </div>
  );
};

export default ProbabilityApplicationsVisualizer;
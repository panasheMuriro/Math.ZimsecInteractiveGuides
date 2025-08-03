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
    <div className="max-w-md mx-auto p-6 bg-[#F4F1DE] border-4 border-[#3D405B] rounded-3xl font-sans">
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#3D405B] tracking-wider underline decoration-2 underline-offset-4">🌤️ WEATHER FORECAST</h2>
        <div className="bg-[#81B29A] border-4 border-[#3D405B] rounded-2xl p-4 mb-4">
          <p className="text-base mb-2 text-center text-[#3D405B] font-bold">
            Theoretical Probability of Rain:
            <BlockMath math={"P(\\text{rain}) = 0.7"} />
          </p>
          <p className="text-base text-center text-[#3D405B] font-bold">
            Experimental Probability: 
            <BlockMath math={`P(\\text{rain}) = \\dfrac{${weatherRainCount}}{${weatherTries}} = ${weatherExpProb}`} />
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <CloudRain className={`w-14 h-14 ${weatherResult === 'Rain' ? 'text-[#E07A5F]' : weatherResult === 'No Rain' ? 'text-[#3D405B]' : 'text-[#F2CC8F]'} bg-white border-3 border-[#3D405B] rounded-full p-2`} />
            <span className="mt-2 text-xl font-bold text-[#3D405B] bg-white border-4 border-[#3D405B] rounded-full w-12 h-12 flex items-center justify-center">
              {weatherResult ? (weatherResult === 'Rain' ? 'R' : 'N') : '?'}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={simulateWeather}
            className={`flex items-center px-6 py-3 rounded-full font-bold border-4 border-[#3D405B] bg-[#E07A5F] text-white hover:bg-[#F09070] transform transition-all duration-200 ${animateWeather ? 'scale-110' : 'scale-100'}`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            SIMULATE WEATHER
          </button>
        </div>
        {weatherResult && (
          <p className="text-base mt-3 text-center text-[#3D405B] font-bold bg-white py-2 px-4 rounded-full border-4 border-[#3D405B]">
            Result: <span className="text-[#E07A5F]">{weatherResult}</span>!
            {weatherResult === 'Rain' ? ' ☔ Better grab an umbrella!' : ' ☀️ Looks clear!'}
          </p>
        )}
        <p className="text-base mt-3 text-center text-[#3D405B] font-bold bg-[#F2CC8F] py-2 px-4 rounded-full border-4 border-[#3D405B]">
          Tries: <span className="text-[#E07A5F]">{weatherTries}</span> | Rain: <span className="text-[#E07A5F]">{weatherRainCount}</span>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#3D405B] tracking-wider underline decoration-2 underline-offset-4">🛒 CUSTOMER PURCHASE</h2>
        <div className="bg-[#81B29A] border-4 border-[#3D405B] rounded-2xl p-4 mb-4">
          <p className="text-base mb-2 text-center text-[#3D405B] font-bold">
            Theoretical Probability of Purchase:
            <BlockMath math={"P(\\text{purchase}) = 0.2"} />
          </p>
          <p className="text-base text-center text-[#3D405B] font-bold">
            Experimental Probability: 
            <BlockMath math={`P(\\text{purchase}) = \\dfrac{${productPurchaseCount}}{${productTries}} = ${productExpProb}`} />
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <div className="flex flex-col items-center">
            <Package className={`w-14 h-14 ${productResult === 'Purchase' ? 'text-[#E07A5F]' : productResult === 'No Purchase' ? 'text-[#3D405B]' : 'text-[#F2CC8F]'} bg-white border-3 border-[#3D405B] rounded-full p-2`} />
            <span className="mt-2 text-xl font-bold text-[#3D405B] bg-white border-4 border-[#3D405B] rounded-full w-12 h-12 flex items-center justify-center">
              {productResult ? (productResult === 'Purchase' ? 'P' : 'N') : '?'}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={simulatePurchase}
            className={`flex items-center px-6 py-3 rounded-full font-bold border-4 border-[#3D405B] bg-[#F2CC8F] text-[#3D405B] hover:bg-[#F5D79F] transform transition-all duration-200 ${animateProduct ? 'scale-110' : 'scale-100'}`}
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            SIMULATE PURCHASE
          </button>
        </div>
        {productResult && (
          <p className="text-base mt-3 text-center text-[#3D405B] font-bold bg-white py-2 px-4 rounded-full border-4 border-[#3D405B]">
            Result: <span className="text-[#E07A5F]">{productResult}</span>!
            {productResult === 'Purchase' ? ' 🛒 Item purchased!' : ' 🛍️ No purchase this time.'}
          </p>
        )}
        <p className="text-base mt-3 text-center text-[#3D405B] font-bold bg-[#F2CC8F] py-2 px-4 rounded-full border-4 border-[#3D405B]">
          Tries: <span className="text-[#E07A5F]">{productTries}</span> | Purchases: <span className="text-[#E07A5F]">{productPurchaseCount}</span>
        </p>
      </section>
    </div>
  );
};

export default ProbabilityApplicationsVisualizer;
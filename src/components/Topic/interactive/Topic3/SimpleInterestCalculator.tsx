import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CalculationResult {
  interest: number | null;
  amount: number | null;
}

const SimpleInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [result, setResult] = useState<CalculationResult>({
    interest: null,
    amount: null,
  });
  // const [isCalculating, setIsCalculating] = useState(false);

  const calculateInterest = (): void => {
    // setIsCalculating(true);
    setTimeout(() => {
      const P = parseFloat(principal);
      const R = parseFloat(rate);
      const T = parseFloat(time);

      if (isNaN(P) || isNaN(R) || isNaN(T) || P <= 0 || R < 0 || T < 0) {
        setResult({ interest: null, amount: null });
        // setIsCalculating(false);
        return;
      }

      const I = (P * R * T) / 100;
      const A = P + I;

      setResult({
        interest: I,
        amount: A,
      });
      // setIsCalculating(false);
    }, 800);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-ZW', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const exampleCalculations = [
    { p: 1000, r: 5, t: 3, emoji: '💰' },
    { p: 500, r: 10, t: 2, emoji: '🏦' },
    { p: 2000, r: 4, t: 5, emoji: '📈' },
  ];

  const loadExample = (p: number, r: number, t: number) => {
    setPrincipal(p.toString());
    setRate(r.toString());
    setTime(t.toString());
  };

  React.useEffect(() => {
    calculateInterest();
  }, [principal, rate, time]);

  return (
    <div>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl">
          {/* Header with animated gradient */}
          <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <div className="flex flex-col items-center relative z-10">
              <h1 className="text-3xl font-bold text-center mb-2">Simple Interest Calculator</h1>
              <p className="text-center text-pink-100 font-medium">Calculate your financial growth</p>
            </div>
          </div>

          {/* Input Fields */}
          <div className="p-6 space-y-6">
            {/* Principal Input */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label htmlFor="principal" className="block text-sm font-medium text-gray-700 flex items-center">
                <span className="bg-fuchsia-500 text-white p-1 rounded-lg mr-2">🏦</span>
                Principal Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-fuchsia-600 font-bold">$</span>
                <input
                  id="principal"
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="E.g. 1000"
                  className="w-full pl-10 pr-4 py-3 border-2 border-fuchsia-100 rounded-xl focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 transition-all duration-200 bg-fuchsia-50 text-fuchsia-800 font-medium"
                />
              </div>
            </motion.div>

            {/* Rate Input */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label htmlFor="rate" className="block text-sm font-medium text-gray-700 flex items-center">
                <span className="bg-pink-500 text-white p-1 rounded-lg mr-2">💹</span>
                Interest Rate (% per year)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-pink-600 font-bold">%</span>
                <input
                  id="rate"
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="E.g. 5"
                  className="w-full pl-10 pr-4 py-3 border-2 border-pink-100 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 bg-pink-50 text-pink-800 font-medium"
                />
              </div>
            </motion.div>

            {/* Time Input */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 flex items-center">
                <span className="bg-blue-500 text-white p-1 rounded-lg mr-2">⏳</span>
                Time Period (Years)
              </label>
              <input
                id="time"
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="E.g. 3"
                className="w-full px-4 py-3 border-2 border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-blue-50 text-blue-800 font-medium"
              />
            </motion.div>

            {/* Result Display */}
            {result.interest !== null && result.amount !== null && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 space-y-4 border-2 border-green-200 shadow-inner"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white p-1 rounded-lg mr-3">✨</span>
                    <span className="text-green-700 font-medium">Interest Earned:</span>
                  </div>
                  <span className="font-bold text-xl text-green-800">{formatCurrency(result.interest)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="bg-emerald-500 text-white p-1 rounded-lg mr-3">🏆</span>
                    <span className="text-emerald-700 font-medium">Total Amount:</span>
                  </div>
                  <span className="font-bold text-xl text-emerald-800">{formatCurrency(result.amount)}</span>
                </div>
              </motion.div>
            )}

            {/* Example Calculations */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                <span className="bg-yellow-500 text-white p-1 rounded-lg mr-2">🔍</span>
                Quick Examples:
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {exampleCalculations.map((ex, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => loadExample(ex.p, ex.r, ex.t)}
                    className="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl hover:from-purple-100 hover:to-blue-100 transition-all duration-300 border-2 border-purple-200 flex items-center"
                  >
                    <span className="text-2xl mr-3">{ex.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-gray-700">${ex.p} at {ex.r}% for {ex.t} years</p>
                      <p className="text-xs text-gray-500">Click to try</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Clear Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setPrincipal('');
                setRate('');
                setTime('');
                setResult({ interest: null, amount: null });
              }}
              className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 py-3 px-4 rounded-xl font-bold hover:from-gray-200 hover:to-gray-300 transition-all duration-300 shadow-sm flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear All
            </motion.button>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 px-6 py-4 text-center border-t-2 border-fuchsia-100">
            <p className="text-sm text-fuchsia-700 font-medium flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Perfect for savings, loans, and investments
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SimpleInterestCalculator;
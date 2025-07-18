import React, { useState, useEffect, useRef } from 'react';
import { Calculator, TrendingUp, TrendingDown, DollarSign, ShoppingCart, Target, Info, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CalculationResult {
  profit: number;
  loss: number;
  profitPercentage: number;
  lossPercentage: number;
  isProfitable: boolean;
  breakEven: boolean;
}

const ProfitLossCalculator: React.FC = () => {
  const [costPrice, setCostPrice] = useState<string>('');
  const [sellingPrice, setSellingPrice] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'formulas'>('calculator');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const calculateProfitLoss = (): CalculationResult | null => {
    const cp = parseFloat(costPrice);
    const sp = parseFloat(sellingPrice);

    if (isNaN(cp) || isNaN(sp) || cp <= 0 || sp <= 0) {
      return null;
    }

    const profit = sp - cp;
    const loss = cp - sp;
    const profitPercentage = (profit / cp) * 100;
    const lossPercentage = (loss / cp) * 100;

    return {
      profit: profit > 0 ? profit : 0,
      loss: loss > 0 ? loss : 0,
      profitPercentage: profit > 0 ? profitPercentage : 0,
      lossPercentage: loss > 0 ? lossPercentage : 0,
      isProfitable: sp > cp,
      breakEven: sp === cp
    };
  };

  useEffect(() => {
    if (costPrice && sellingPrice) {
      setIsCalculating(true);
      const timer = setTimeout(() => {
        const newResult = calculateProfitLoss();
        setResult(newResult);
        setIsCalculating(false);
      }, 800); // Simulate calculation delay for animation
        
      return () => clearTimeout(timer);
    } else {
      setResult(null);
    }
  }, [costPrice, sellingPrice]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const clearInputs = () => {
    setCostPrice('');
    setSellingPrice('');
    setResult(null);
    if (inputRef.current) inputRef.current.focus();
  };

  const exampleCalculations = [
    { cp: 80, sp: 100, description: "Bought for $80, sold for $100" },
    { cp: 150, sp: 120, description: "Bought for $150, sold for $120" },
    { cp: 50, sp: 75, description: "Bought for $50, sold for $75" },
  ];

  const loadExample = (cp: number, sp: number) => {
    setCostPrice(cp.toString());
    setSellingPrice(sp.toString());
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 1, repeat: Infinity }
  };


  return (
    <div>
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute -right-10 -top-10"
          >
            <DollarSign className="w-40 h-40 text-white opacity-20" />
          </motion.div>
          <div className="flex items-center justify-center mb-4 relative z-10">
            <motion.div
              animate={pulse}
            >
              <Calculator className="w-8 h-8 mr-3" />
            </motion.div>
            <h1 className="text-2xl font-bold">Profit & Loss Calculator</h1>
          </div>
          <p className="text-center text-indigo-100 relative z-10">Calculate your business profits and losses with ease</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-gray-50">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 flex items-center justify-center ${
              activeTab === 'calculator'
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculator
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 flex items-center justify-center ${
              activeTab === 'formulas'
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Target className="w-4 h-4 mr-2" />
            Formulas
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'calculator' ? (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 space-y-6"
            >
              {/* Input Fields */}
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Cost Price (CP)
                    <button 
                      onMouseEnter={() => setShowTooltip('cp')}
                      onMouseLeave={() => setShowTooltip(null)}
                      className="ml-2 text-gray-400 hover:text-indigo-600"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                    {showTooltip === 'cp' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 top-8 bg-white p-2 rounded-lg shadow-lg z-10 text-xs w-64"
                      >
                        The price you paid to acquire the product
                        <div className="absolute -top-1 left-4 w-3 h-3 bg-white transform rotate-45" />
                      </motion.div>
                    )}
                  </label>
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="relative"
                  >
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      ref={inputRef}
                      type="number"
                      value={costPrice}
                      onChange={(e) => setCostPrice(e.target.value)}
                      placeholder="Enter cost price"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </motion.div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Selling Price (SP)
                    <button 
                      onMouseEnter={() => setShowTooltip('sp')}
                      onMouseLeave={() => setShowTooltip(null)}
                      className="ml-2 text-gray-400 hover:text-indigo-600"
                    >
                      <Info className="w-3 h-3" />
                    </button>
                    {showTooltip === 'sp' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 top-8 bg-white p-2 rounded-lg shadow-lg z-10 text-xs w-64"
                      >
                        The price at which you sold the product to customers
                        <div className="absolute -top-1 left-4 w-3 h-3 bg-white transform rotate-45" />
                      </motion.div>
                    )}
                  </label>
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="relative"
                  >
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                      placeholder="Enter selling price"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Results */}
              <AnimatePresence>
                {isCalculating && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-center py-4"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {result && !isCalculating && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 space-y-3 shadow-sm"
                    >
                      {result.breakEven ? (
                        <motion.div 
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className="text-center"
                        >
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
                            Break Even - No Profit or Loss
                          </div>
                          <motion.div 
                            animate={pulse}
                            className="mt-2 text-gray-600"
                          >
                            You sold at exactly the cost price
                          </motion.div>
                        </motion.div>
                      ) : result.isProfitable ? (
                        <motion.div 
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-green-600 font-medium flex items-center">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              Profit
                            </span>
                            <motion.span 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-green-600 font-bold text-lg"
                            >
                              {formatCurrency(result.profit)}
                            </motion.span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-green-600 font-medium">Profit %</span>
                            <motion.span 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-green-600 font-bold text-lg"
                            >
                              {result.profitPercentage.toFixed(2)}%
                            </motion.span>
                          </div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-green-100 rounded-lg p-3 text-center"
                          >
                            <p className="text-green-800 font-medium">🎉 Great! You made a profit!</p>
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          initial={{ x: -20 }}
                          animate={{ x: 0 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-red-600 font-medium flex items-center">
                              <TrendingDown className="w-4 h-4 mr-1" />
                              Loss
                            </span>
                            <motion.span 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-red-600 font-bold text-lg"
                            >
                              {formatCurrency(result.loss)}
                            </motion.span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-red-600 font-medium">Loss %</span>
                            <motion.span 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-red-600 font-bold text-lg"
                            >
                              {result.lossPercentage.toFixed(2)}%
                            </motion.span>
                          </div>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-red-100 rounded-lg p-3 text-center"
                          >
                            <p className="text-red-800 font-medium">⚠️ You made a loss on this sale</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearInputs}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-300 transition-all duration-200 flex items-center justify-center"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear
                </motion.button>
              </div>

              {/* Example Calculations */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="border-t pt-4"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Try These Examples:</h3>
                <div className="space-y-2">
                  {exampleCalculations.map((example, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => loadExample(example.cp, example.sp)}
                      className="w-full text-left p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 border border-blue-200 flex items-center"
                    >
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">{example.description}</p>
                        <p className="text-xs text-indigo-600 mt-1">
                          CP: ${example.cp} → SP: ${example.sp}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-indigo-400" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="formulas"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 space-y-6"
            >
              {/* Key Terms */}
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-blue-500" />
                  Key Terms:
                </h3>
                <div className="space-y-3 text-sm">
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span><strong>Cost Price (CP):</strong> Price paid to acquire goods</span>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span><strong>Selling Price (SP):</strong> Price at which goods are sold</span>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span><strong>Profit:</strong> When SP &gt; CP</span>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
                    <span><strong>Loss:</strong> When CP &gt; SP</span>
                  </motion.p>
                </div>
              </motion.div>

              {/* Formulas */}
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-500" />
                  Formulas:
                </h3>
                <div className="space-y-3 text-sm">
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="p-2 bg-white rounded-lg shadow-xs"
                  >
                    <strong>Profit = SP - CP</strong>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="p-2 bg-white rounded-lg shadow-xs"
                  >
                    <strong>Loss = CP - SP</strong>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="p-2 bg-white rounded-lg shadow-xs"
                  >
                    <strong>Profit% = (Profit ÷ CP) × 100%</strong>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="p-2 bg-white rounded-lg shadow-xs"
                  >
                    <strong>Loss% = (Loss ÷ CP) × 100%</strong>
                  </motion.p>
                </div>
              </motion.div>

              {/* Finding SP/CP */}
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Calculator className="w-5 h-5 mr-2 text-purple-500" />
                  Finding SP/CP:
                </h3>
                <div className="space-y-3 text-sm">
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="p-2 bg-white rounded-lg shadow-xs"
                  >
                    <strong>SP = CP + Profit</strong>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="p-2 bg-white rounded-lg shadow-xs"
                  >
                    <strong>SP = CP(1 + Profit%)</strong>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="p-2 bg-white rounded-lg shadow-xs"
                  >
                    <strong>CP = SP ÷ (1 + Profit%)</strong>
                  </motion.p>
                </div>
              </motion.div>

              {/* Example */}
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Example:
                </h3>
                <p className="text-sm mb-2">Article bought for $80, sold for $100:</p>
                <div className="space-y-2 text-sm">
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                    <span>• Profit = $100 - $80 = $20</span>
                  </motion.p>
                  <motion.p 
                    whileHover={{ x: 5 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mt-1.5 mr-2"></span>
                    <span>• Profit% = (20 ÷ 80) × 100% = 25%</span>
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProfitLossCalculator;
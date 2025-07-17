import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, TrendingDown, DollarSign, ShoppingCart, Target } from 'lucide-react';

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
    const newResult = calculateProfitLoss();
    setResult(newResult);
  }, [costPrice, sellingPrice]);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-ZW', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const clearInputs = () => {
    setCostPrice('');
    setSellingPrice('');
    setResult(null);
  };

  const exampleCalculations = [
    { cp: 80, sp: 100, description: "Article bought for $80, sold for $100" },
    { cp: 150, sp: 120, description: "Item bought for $150, sold for $120" },
    { cp: 50, sp: 75, description: "Product bought for $50, sold for $75" }
  ];

  const loadExample = (cp: number, sp: number) => {
    setCostPrice(cp.toString());
    setSellingPrice(sp.toString());
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 mr-3" />
            <h1 className="text-2xl font-bold">Profit & Loss Calculator</h1>
          </div>
          <p className="text-center text-indigo-100">Calculate your business profits and losses easily</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-gray-50">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 ${
              activeTab === 'calculator'
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calculator className="w-4 h-4 inline mr-2" />
            Calculator
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 ${
              activeTab === 'formulas'
                ? 'bg-white text-indigo-600 border-b-2 border-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Target className="w-4 h-4 inline mr-2" />
            Formulas
          </button>
        </div>

        {activeTab === 'calculator' ? (
          <div className="p-6 space-y-6">
            {/* Input Fields */}
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <ShoppingCart className="w-4 h-4 inline mr-1" />
                  Cost Price (CP)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={costPrice}
                    onChange={(e) => setCostPrice(e.target.value)}
                    placeholder="Enter cost price"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  Selling Price (SP)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    placeholder="Enter selling price"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 space-y-3">
                {result.breakEven ? (
                  <div className="text-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
                      Break Even - No Profit or Loss
                    </div>
                  </div>
                ) : result.isProfitable ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-medium flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Profit
                      </span>
                      <span className="text-green-600 font-bold text-lg">
                        {formatCurrency(result.profit)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-medium">Profit %</span>
                      <span className="text-green-600 font-bold text-lg">
                        {result.profitPercentage.toFixed(2)}%
                      </span>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3 text-center">
                      <p className="text-green-800 font-medium">Great! You made a profit!</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 font-medium flex items-center">
                        <TrendingDown className="w-4 h-4 mr-1" />
                        Loss
                      </span>
                      <span className="text-red-600 font-bold text-lg">
                        {formatCurrency(result.loss)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-red-600 font-medium">Loss %</span>
                      <span className="text-red-600 font-bold text-lg">
                        {result.lossPercentage.toFixed(2)}%
                      </span>
                    </div>
                    <div className="bg-red-100 rounded-lg p-3 text-center">
                      <p className="text-red-800 font-medium">You made a loss on this sale</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={clearInputs}
                className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium hover:bg-gray-300 transition-colors duration-200"
              >
                Clear
              </button>
            </div>

            {/* Example Calculations */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Try These Examples:</h3>
              <div className="space-y-2">
                {exampleCalculations.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => loadExample(example.cp, example.sp)}
                    className="w-full text-left p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 border border-blue-200"
                  >
                    <p className="text-sm text-gray-600">{example.description}</p>
                    <p className="text-xs text-indigo-600 mt-1">
                      CP: ${example.cp} → SP: ${example.sp}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* Key Terms */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Terms:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Cost Price (CP):</strong> Price paid to acquire goods</p>
                <p><strong>Selling Price (SP):</strong> Price at which goods are sold</p>
                <p><strong>Profit:</strong> When SP &gt; CP</p>
                <p><strong>Loss:</strong> When CP &gt; SP</p>
              </div>
            </div>

            {/* Formulas */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Formulas:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Profit = SP - CP</strong></p>
                <p><strong>Loss = CP - SP</strong></p>
                <p><strong>Profit% = (Profit ÷ CP) × 100%</strong></p>
                <p><strong>Loss% = (Loss ÷ CP) × 100%</strong></p>
              </div>
            </div>

            {/* Finding SP/CP */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Finding SP/CP:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>SP = CP + Profit</strong></p>
                <p><strong>SP = CP(1 + Profit%)</strong></p>
                <p><strong>CP = SP ÷ (1 + Profit%)</strong></p>
              </div>
            </div>

            {/* Example */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Example:</h3>
              <p className="text-sm mb-2">Article bought for $80, sold for $100:</p>
              <div className="space-y-1 text-sm">
                <p>• Profit = $100 - $80 = $20</p>
                <p>• Profit% = (20 ÷ 80) × 100% = 25%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfitLossCalculator;
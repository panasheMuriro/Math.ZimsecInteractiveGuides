import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, Plus, Minus, TrendingUp, Calculator, CreditCard, DollarSign } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  balance: number;
}

interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  symbol: string;
}

const ForeignExchange: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'converter' | 'statement'>('converter');
  const [amount, setAmount] = useState<string>('100');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('ZWL');
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    type: 'credit' as 'credit' | 'debit'
  });

  const exchangeRates: ExchangeRate[] = [
    { from: 'USD', to: 'ZWL', rate: 25, symbol: 'ZWL' },
    { from: 'USD', to: 'EUR', rate: 0.85, symbol: '€' },
    { from: 'USD', to: 'GBP', rate: 0.75, symbol: '£' },
    { from: 'USD', to: 'JPY', rate: 110, symbol: '¥' },
    { from: 'EUR', to: 'USD', rate: 1.18, symbol: '$' },
    { from: 'GBP', to: 'USD', rate: 1.33, symbol: '$' },
    { from: 'ZWL', to: 'USD', rate: 0.04, symbol: '$' },
  ];

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'ZWL', name: 'Zimbabwe Dollar', symbol: 'ZWL' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  ];

  const getCurrentRate = (): number => {
    const rate = exchangeRates.find(r => r.from === fromCurrency && r.to === toCurrency);
    return rate ? rate.rate : 1;
  };

  const convertCurrency = (): number => {
    const numAmount = parseFloat(amount) || 0;
    return numAmount * getCurrentRate();
  };

  const getSymbol = (currencyCode: string): string => {
    const currency = currencies.find(c => c.code === currencyCode);
    return currency ? currency.symbol : currencyCode;
  };

  const formatCurrency = (amount: number, currencyCode: string): string => {
    const symbol = getSymbol(currencyCode);
    return `${symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const addTransaction = () => {
    if (!newTransaction.description || !newTransaction.amount) return;

    const amount = parseFloat(newTransaction.amount);
    const lastBalance = transactions.length > 0 ? transactions[transactions.length - 1].balance : 1000;
    const newBalance = newTransaction.type === 'credit' 
      ? lastBalance + amount 
      : lastBalance - amount;

    const transaction: Transaction = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      description: newTransaction.description,
      amount: amount,
      type: newTransaction.type,
      balance: newBalance
    };

    setTransactions([...transactions, transaction]);
    setNewTransaction({ description: '', amount: '', type: 'credit' });
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const sampleTransactions = () => {
    const samples: Omit<Transaction, 'id' | 'balance'>[] = [
      { date: '2025-07-15', description: 'Salary Deposit', amount: 2500, type: 'credit' },
      { date: '2025-07-16', description: 'Grocery Shopping', amount: 75, type: 'debit' },
      { date: '2025-07-17', description: 'Online Transfer', amount: 200, type: 'credit' },
      { date: '2025-07-18', description: 'ATM Withdrawal', amount: 100, type: 'debit' },
    ];

    let balance = 1000;
    const newTransactions: Transaction[] = samples.map((sample, index) => {
      balance = sample.type === 'credit' ? balance + sample.amount : balance - sample.amount;
      return {
        ...sample,
        id: `sample-${index}`,
        balance
      };
    });

    setTransactions(newTransactions);
  };

  useEffect(() => {
    if (transactions.length === 0) {
      sampleTransactions();
    }
  }, []);

  return (

      <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <DollarSign className="w-8 h-8" />
            FX & Banking
          </h1>
          <p className="text-blue-100 text-sm">Interactive currency converter and bank statement simulator</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100">
          <button
            onClick={() => setActiveTab('converter')}
            className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
              activeTab === 'converter'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            <Calculator className="w-5 h-5 mx-auto mb-1" />
            Converter
          </button>
          <button
            onClick={() => setActiveTab('statement')}
            className={`flex-1 py-4 px-6 text-center font-semibold transition-all ${
              activeTab === 'statement'
                ? 'bg-white text-blue-600 shadow-md'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            <CreditCard className="w-5 h-5 mx-auto mb-1" />
            Statement
          </button>
        </div>

        {/* Content */}
        <div className="p-2 bg-gradient-to-r from-green-50 to-blue-50 p-6 border border-green-200">
          {activeTab === 'converter' ? (
            <div className="space-y-6">
              {/* Currency Converter */}
              <div className="p-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  Currency Converter
                </h2>
                
                {/* Amount Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    placeholder="Enter amount"
                  />
                </div>

                {/* Currency Selection */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {currencies.map(currency => (
                        <option key={currency.code} value={currency.code}>
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center mb-6">
                  <button
                    onClick={swapCurrencies}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-105"
                  >
                    <ArrowRightLeft className="w-6 h-6" />
                  </button>
                </div>

                {/* Result */}
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-green-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-2">
                      {formatCurrency(parseFloat(amount) || 0, fromCurrency)}
                    </div>
                    <div className="text-gray-500 mb-2">=</div>
                    <div className="text-xl font-bold text-green-600">
                      {formatCurrency(convertCurrency(), toCurrency)}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Rate: 1 {fromCurrency} = {getCurrentRate().toFixed(4)} {toCurrency}
                    </div>
                  </div>
                </div>

                {/* Formula */}
                <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <h3 className="font-semibold text-yellow-800 mb-2">Formula:</h3>
                  <p className="text-yellow-700 text-sm">
                    Amount in {toCurrency} = Amount in {fromCurrency} × Exchange Rate
                  </p>
                  <p className="text-yellow-700 text-sm mt-1">
                    {formatCurrency(convertCurrency(), toCurrency)} = {formatCurrency(parseFloat(amount) || 0, fromCurrency)} × {getCurrentRate().toFixed(4)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Bank Statement */}
              <div className="">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                  Bank Statement
                </h2>

                {/* Add Transaction */}
                <div className="bg-white p-4 rounded-xl shadow-md mb-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Add Transaction</h3>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Description"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input
                      type="number"
                      placeholder="Amount"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => setNewTransaction({...newTransaction, type: 'credit'})}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                          newTransaction.type === 'credit'
                            ? 'bg-green-500 text-white shadow-md'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <Plus className="w-4 h-4 inline mr-1" />
                        Credit
                      </button>
                      <button
                        onClick={() => setNewTransaction({...newTransaction, type: 'debit'})}
                        className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                          newTransaction.type === 'debit'
                            ? 'bg-red-500 text-white shadow-md'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <Minus className="w-4 h-4 inline mr-1" />
                        Debit
                      </button>
                    </div>
                    <button
                      onClick={addTransaction}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold shadow-lg transition-all transform hover:scale-105"
                    >
                      Add Transaction
                    </button>
                  </div>
                </div>

                {/* Transactions List */}
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="bg-white p-4 rounded-xl shadow-md border-l-4 border-l-purple-400"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">{transaction.description}</div>
                          <div className="text-sm text-gray-600">{transaction.date}</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${
                            transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-600">
                            Balance: ${transaction.balance.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Balance Formula */}
                <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Balance Formula:</h3>
                  <p className="text-blue-700 text-sm">
                    New Balance = Previous Balance + Credits - Debits
                  </p>
                  {transactions.length > 0 && (
                    <p className="text-blue-700 text-sm mt-1">
                      Current Balance: ${transactions[transactions.length - 1].balance.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
  
  );
};

export default ForeignExchange;
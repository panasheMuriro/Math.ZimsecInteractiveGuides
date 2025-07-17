import { useState } from 'react';
import { Home, Zap, Flame, Phone, Calculator, ChevronDown, ChevronUp, AlertCircle, TrendingUp, PieChart } from 'lucide-react';

export default function HouseholdBills() {
  const [activeTab, setActiveTab] = useState('bills');
  const [expandedSection, setExpandedSection] = useState('electricity');
  
  // Bill Calculator States
  const [bills, setBills] = useState({
    electricity: { units: '', rate: '0.15', fixed: '5' }, // ZESA rates
    gas: { kg: '', rate: '3.50', fixed: '0' }, // LPG gas rates
    phone: { minutes: '', sms: '', data: '', plan: 'basic' } // Mobile plans
  });
  
  // Budget States
  const [budget, setBudget] = useState({
    income: '',
    rent: '',
    food: '',
    transport: '',
    utilities: '',
    entertainment: '',
    savings: ''
  });

  const phonePlans = {
    basic: { monthly: 5, minutes: 50, sms: 50, data: 1 }, // Econet/EcoCash bundles
    standard: { monthly: 10, minutes: 100, sms: 100, data: 5 },
    premium: { monthly: 30, minutes: 'unlimited', sms: 'unlimited', data: 20 }
  };

  const billTypes = [
    {
      id: 'electricity',
      name: 'ZESA',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      unit: 'kWh',
      description: 'Monthly power consumption'
    },
    {
      id: 'gas',
      name: 'Cooking Gas',
      icon: Flame,
      color: 'from-red-400 to-amber-500',
      unit: 'kg',
      description: 'LPG gas usage'
    },
    {
      id: 'phone',
      name: 'Mobile',
      icon: Phone,
      color: 'from-purple-400 to-pink-500',
      unit: 'plan',
      description: 'Airtime and data bundles'
    }
  ];

  const calculateBill = (type) => {
    const bill = bills[type];
    if (type === 'electricity') {
      const units = parseFloat(bill.units) || 0;
      const rate = parseFloat(bill.rate) || 0;
      const fixed = parseFloat(bill.fixed) || 0;
      return fixed + (units * rate);
    } else if (type === 'gas') {
      const kg = parseFloat(bill.kg) || 0;
      const rate = parseFloat(bill.rate) || 0;
      return kg * rate; // No fixed charge for gas in Zim
    } else if (type === 'phone') {
      const plan = phonePlans[bill.plan];
      let extra = 0;
      
      if (plan.minutes !== 'unlimited') {
        const extraMinutes = Math.max(0, (parseFloat(bill.minutes) || 0) - plan.minutes);
        extra += extraMinutes * 0.50; // Higher out-of-bundle rates
      }
      
      if (plan.sms !== 'unlimited') {
        const extraSms = Math.max(0, (parseFloat(bill.sms) || 0) - plan.sms);
        extra += extraSms * 0.20;
      }
      
      const extraData = Math.max(0, (parseFloat(bill.data) || 0) - plan.data);
      extra += extraData * 5; // Higher data costs
      
      return plan.monthly + extra;
    }
    return 0;
  };

  const totalBills = billTypes.reduce((sum, type) => sum + calculateBill(type.id), 0);

  const calculateBudget = () => {
    const income = parseFloat(budget.income) || 0;
    const expenses = ['rent', 'food', 'transport', 'utilities', 'entertainment'].reduce(
      (sum, key) => sum + (parseFloat(budget[key]) || 0), 0
    );
    const savings = parseFloat(budget.savings) || 0;
    const remaining = income - expenses - savings;
    
    return {
      income,
      totalExpenses: expenses,
      savings,
      remaining,
      isHealthy: remaining >= 0 && savings >= income * 0.1
    };
  };

  const budgetResult = calculateBudget();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const updateBill = (type, field, value) => {
    setBills(prev => ({
      ...prev,
      [type]: { ...prev[type], [field]: value }
    }));
  };

  const updateBudget = (field, value) => {
    setBudget(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
        <div className="flex items-center gap-2">
          <Home className="w-6 h-6" />
          <h2 className="text-lg font-bold">Zim Household Finance</h2>
        </div>
        <p className="text-sm opacity-90 mt-1">Manage bills and budget in ZIG/USD</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab('bills')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'bills' 
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Calculator className="w-4 h-4 mx-auto mb-1" />
          Bills
        </button>
        <button
          onClick={() => setActiveTab('budget')}
          className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'budget' 
              ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50' 
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <PieChart className="w-4 h-4 mx-auto mb-1" />
          Budget
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'bills' && (
          <div className="space-y-3">
            {/* Total Bills Summary */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-90">Total Monthly Bills</div>
                  <div className="text-2xl font-bold">${totalBills.toFixed(2)}</div>
                </div>
                <TrendingUp className="w-8 h-8 opacity-75" />
              </div>
            </div>

            {/* Bill Calculators */}
            {billTypes.map((billType) => {
              const Icon = billType.icon;
              const amount = calculateBill(billType.id);
              const isExpanded = expandedSection === billType.id;
              
              return (
                <div key={billType.id} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(billType.id)}
                    className="w-full p-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${billType.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="font-medium">{billType.name}</div>
                        <div className="text-sm text-gray-600">{billType.description}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="font-bold text-lg">${amount.toFixed(2)}</div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="p-4 bg-gray-50 border-t">
                      {billType.id === 'electricity' && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs text-gray-600">Units (kWh)</label>
                              <input
                                type="number"
                                value={bills.electricity.units}
                                onChange={(e) => updateBill('electricity', 'units', e.target.value)}
                                placeholder="200"
                                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600">Rate ($/kWh)</label>
                              <input
                                type="number"
                                value={bills.electricity.rate}
                                onChange={(e) => updateBill('electricity', 'rate', e.target.value)}
                                step="0.01"
                                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                              />
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 bg-white p-2 rounded">
                            <strong>Calculation:</strong> ${bills.electricity.fixed} (fixed) + ({bills.electricity.units || 0} × ${bills.electricity.rate}) = ${amount.toFixed(2)}
                          </div>
                        </div>
                      )}
                      
                      {billType.id === 'gas' && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs text-gray-600">Quantity (kg)</label>
                              <input
                                type="number"
                                value={bills.gas.kg}
                                onChange={(e) => updateBill('gas', 'kg', e.target.value)}
                                placeholder="5"
                                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600">Rate ($/kg)</label>
                              <input
                                type="number"
                                value={bills.gas.rate}
                                onChange={(e) => updateBill('gas', 'rate', e.target.value)}
                                step="0.01"
                                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                              />
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 bg-white p-2 rounded">
                            <strong>Calculation:</strong> {bills.gas.kg || 0} kg × ${bills.gas.rate} = ${amount.toFixed(2)}
                          </div>
                        </div>
                      )}
                      
                      {billType.id === 'phone' && (
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs text-gray-600 mb-1">Plan Type</label>
                            <select
                              value={bills.phone.plan}
                              onChange={(e) => updateBill('phone', 'plan', e.target.value)}
                              className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                              <option value="basic">Basic - $50/month</option>
                              <option value="standard">Standard - $100/month</option>
                              <option value="premium">Premium - $200/month</option>
                            </select>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <div>
                              <label className="block text-xs text-gray-600">Minutes</label>
                              <input
                                type="number"
                                value={bills.phone.minutes}
                                onChange={(e) => updateBill('phone', 'minutes', e.target.value)}
                                placeholder="80"
                                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600">SMS</label>
                              <input
                                type="number"
                                value={bills.phone.sms}
                                onChange={(e) => updateBill('phone', 'sms', e.target.value)}
                                placeholder="60"
                                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-600">Data (GB)</label>
                              <input
                                type="number"
                                value={bills.phone.data}
                                onChange={(e) => updateBill('phone', 'data', e.target.value)}
                                placeholder="3"
                                className="w-full px-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 bg-white p-2 rounded">
                            <strong>Plan Includes:</strong> {phonePlans[bills.phone.plan].minutes} min, {phonePlans[bills.phone.plan].sms} SMS, {phonePlans[bills.phone.plan].data}GB
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'budget' && (
          <div className="space-y-4">
            {/* Budget Health Indicator */}
            <div className={`rounded-lg p-4 ${
              budgetResult.isHealthy ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
            } border-2`}>
              <div className="flex items-center gap-2">
                <AlertCircle className={`w-5 h-5 ${
                  budgetResult.isHealthy ? 'text-green-600' : 'text-red-600'
                }`} />
                <span className={`font-semibold ${
                  budgetResult.isHealthy ? 'text-green-800' : 'text-red-800'
                }`}>
                  {budgetResult.isHealthy ? 'Healthy Budget' : 'Budget Needs Attention'}
                </span>
              </div>
              <div className="text-sm mt-1">
                Remaining: <span className={`font-bold ${
                  budgetResult.remaining >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  ${budgetResult.remaining.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Budget Inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income (USD/ZIG)</label>
                <input
                  type="number"
                  value={budget.income}
                  onChange={(e) => updateBudget('income', e.target.value)}
                  placeholder="3000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {['rent', 'food', 'transport', 'utilities', 'entertainment', 'savings'].map((field) => (
                  <div key={field}>
                    <label className="block text-xs text-gray-600 mb-1 capitalize">
                      {field === 'rent' ? 'Rent/Mortgage' : 
                       field === 'food' ? 'Food/Groceries' : 
                       field === 'transport' ? 'Transport/Kombi' : 
                       field === 'utilities' ? 'Utilities/ZESA' : 
                       field === 'entertainment' ? 'Entertainment/DSTV' : 
                       'Savings'}
                    </label>
                    <input
                      type="number"
                      value={budget[field]}
                      onChange={(e) => updateBudget(field, e.target.value)}
                      placeholder={field === 'rent' ? '1000' : field === 'food' ? '400' : '200'}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Summary */}
            {budgetResult.income > 0 && (
              <div className="bg-purple-50 rounded-lg p-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Income:</span>
                    <span className="font-semibold text-green-600">${budgetResult.income.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expenses:</span>
                    <span className="font-semibold text-red-600">${budgetResult.totalExpenses.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Savings:</span>
                    <span className="font-semibold text-blue-600">${budgetResult.savings.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-semibold">Remaining:</span>
                    <span className={`font-bold ${
                      budgetResult.remaining >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${budgetResult.remaining.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
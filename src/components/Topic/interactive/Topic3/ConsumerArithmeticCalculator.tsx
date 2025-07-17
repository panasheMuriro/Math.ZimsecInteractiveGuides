import React, { useState, useMemo } from 'react';
// Using lucide-react for clean, modern icons.
// In a real project, you would install this with: npm install lucide-react
import { Calculator, Tag, Percent, ChevronsRight } from 'lucide-react';

/**
 * A mobile-first, interactive component to calculate product discounts.
 * Users can input a marked price and a discount percentage to see the
 * discount amount and the final price. Includes an explanation of the formulas.
 */
const ConsumerArithmeticCalculator: React.FC = () => {
  // State to hold the user's input for marked price and discount percentage.
  const [markedPrice, setMarkedPrice] = useState<string>('50');
  const [discountPercentage, setDiscountPercentage] = useState<string>('20');

  // useMemo is used for performance optimization.
  // The calculation will only re-run if markedPrice or discountPercentage changes.
  const { discountAmount, finalPrice, error } = useMemo(() => {
    const mp = parseFloat(markedPrice);
    const dp = parseFloat(discountPercentage);

    // Input validation
    if (isNaN(mp) || isNaN(dp) || mp < 0 || dp < 0) {
      return {
        discountAmount: '0.00',
        finalPrice: '0.00',
        error: 'Please enter valid positive numbers.',
      };
    }
    
    if (dp > 100) {
       return {
        discountAmount: '0.00',
        finalPrice: '0.00',
        error: 'Discount cannot be over 100%.',
      };
    }

    // Core financial calculations
    const calculatedDiscount = mp * (dp / 100);
    const calculatedFinalPrice = mp - calculatedDiscount;

    // Return formatted, valid results
    return {
      discountAmount: calculatedDiscount.toFixed(2),
      finalPrice: calculatedFinalPrice.toFixed(2),
      error: null,
    };
  }, [markedPrice, discountPercentage]);

  return (
    // Main container with a vibrant gradient background and modern styling.
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-950 dark:to-slate-900 p-6 rounded-2xl shadow-2xl max-w-md mx-auto font-sans border border-slate-200 dark:border-slate-700">
      
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-purple-200 dark:bg-purple-900 p-3 rounded-full shadow-inner">
          <Calculator className="h-6 w-6 text-purple-700 dark:text-purple-300" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          Discount Calculator
        </h3>
      </div>

      {/* Input Fields Section */}
      <div className="space-y-4">
        <div>
          <label htmlFor="markedPrice" className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
            <Tag className="h-4 w-4 mr-2 text-purple-500"/> Marked Price ($)
          </label>
          <input
            id="markedPrice"
            type="number"
            value={markedPrice}
            onChange={(e) => setMarkedPrice(e.target.value)}
            placeholder="e.g., 50"
            className="w-full p-3 bg-white dark:bg-slate-800/50 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-slate-800 dark:text-slate-100"
          />
        </div>
        <div>
          <label htmlFor="discountPercentage" className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
            <Percent className="h-4 w-4 mr-2 text-purple-500"/> Discount (%)
          </label>
          <input
            id="discountPercentage"
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
            placeholder="e.g., 20"
            className="w-full p-3 bg-white dark:bg-slate-800/50 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition text-slate-800 dark:text-slate-100"
          />
        </div>
      </div>
      
      {/* Error Message Display */}
      {error && (
        <div className="mt-4 text-center text-red-500 dark:text-red-400 font-medium">
          {error}
        </div>
      )}

      {/* How it's Calculated Section */}
      <div className="mt-6">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer text-purple-700 dark:text-purple-300 font-semibold">
            How it's Calculated
            <ChevronsRight className="h-5 w-5 transition-transform group-open:rotate-90" />
          </summary>
          <div className="mt-4 p-4 bg-purple-50 dark:bg-slate-800/60 rounded-lg text-sm text-slate-700 dark:text-slate-300 space-y-2">
            <p><strong className="font-mono text-purple-800 dark:text-purple-300">Discount Amount</strong> = Price × (Discount % / 100)</p>
            <p><strong className="font-mono text-purple-800 dark:text-purple-300">Final Price</strong> = Price - Discount Amount</p>
          </div>
          
        </details>
      </div>

      {/* Results Display Section */}
      <div className="mt-4 pt-4 border-t-2 border-dashed border-slate-200 dark:border-slate-700 space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-slate-600 dark:text-slate-300 font-medium">Discount Amount:</p>
          <p className="text-xl font-semibold text-orange-600 dark:text-orange-400">
            -${discountAmount}
          </p>
        </div>
        <div className="flex justify-between items-center bg-green-100 dark:bg-green-900/50 p-4 rounded-xl shadow-inner">
          <p className="text-lg font-bold text-slate-800 dark:text-slate-100">Final Price:</p>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            ${finalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

// To use this component, you would render it in your app like so:
// export default function App() {
//   return (
//     <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4">
//       <ConsumerArithmeticCalculator />
//     </div>
//   );
// }

// For this environment, we'll just export the main component.
export default ConsumerArithmeticCalculator;

// import { useState } from "react";
// import { DollarSign, Percent, ArrowDownUp, Calculator, Info, ShoppingCart } from "lucide-react";

// const CommissionTaxCalculator = () => {
//   const [sales, setSales] = useState<number>(0);
//   const [commissionRate, setCommissionRate] = useState<number>(10);
//   const [vatRate, setVatRate] = useState<number>(15);
//   const [price, setPrice] = useState<number>(0);

//   const commission = (sales * commissionRate) / 100;
//   const vatAmount = (price * vatRate) / 100;
//   const totalCost = price + vatAmount;

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow-xl space-y-4 text-sm md:text-base">
//       <div className="flex items-center gap-2 text-xl font-bold text-indigo-600">
//         <Calculator className="w-6 h-6" />
//         Commission & Tax Calculator (Zim)
//       </div>

//       <div className="space-y-3">
//         <div className="bg-indigo-50 p-3 rounded-xl">
//           <h2 className="font-semibold flex items-center gap-2 text-indigo-700">
//             <DollarSign className="w-4 h-4" /> Commission
//           </h2>
//           <label className="block mt-2">Sales Amount (USD):
//             <input
//               type="number"
//               value={sales}
//               onChange={(e) => setSales(parseFloat(e.target.value) || 0)}
//               className="w-full mt-1 p-2 rounded-md border"
//               placeholder="e.g. 500"
//             />
//           </label>
//           <label className="block mt-2">Commission Rate (%):
//             <input
//               type="number"
//               value={commissionRate}
//               onChange={(e) => setCommissionRate(parseFloat(e.target.value) || 0)}
//               className="w-full mt-1 p-2 rounded-md border"
//               placeholder="e.g. 10"
//             />
//           </label>
//           <p className="mt-2 text-green-600 font-medium">You earn: ${commission.toFixed(2)}</p>
//         </div>

//         <div className="bg-yellow-50 p-3 rounded-xl">
//           <h2 className="font-semibold flex items-center gap-2 text-yellow-700">
//             <ShoppingCart className="w-4 h-4" /> VAT (Sales Tax)
//           </h2>
//           <label className="block mt-2">Item Price (USD):
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
//               className="w-full mt-1 p-2 rounded-md border"
//               placeholder="e.g. 100"
//             />
//           </label>
//           <label className="block mt-2">VAT Rate (%):
//             <input
//               type="number"
//               value={vatRate}
//               onChange={(e) => setVatRate(parseFloat(e.target.value) || 0)}
//               className="w-full mt-1 p-2 rounded-md border"
//               placeholder="e.g. 15"
//             />
//           </label>
//           <p className="mt-2 text-red-600 font-medium">VAT Amount: ${vatAmount.toFixed(2)}</p>
//           <p className="text-green-600 font-medium">Total Cost: ${totalCost.toFixed(2)}</p>
//         </div>
//       </div>

//       <div className="text-xs text-gray-500 mt-4">
//         <div className="flex items-start gap-2">
//           <Info className="w-4 h-4 mt-0.5" />
//           <span>
//             Example: If you sell an item for $100 with a 10% commission rate, you earn $10. If that same item has 15% VAT, total cost to the buyer becomes $115.
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommissionTaxCalculator;

import { useState } from "react";
import {
  DollarSign,
  Percent,
  ArrowDownUp,
  Calculator,
  Info,
  ShoppingCart,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const CommissionTaxCalculator = () => {
  const [sales, setSales] = useState<number>(0);
  const [commissionRate, setCommissionRate] = useState<number>(10);
  const [vatRate, setVatRate] = useState<number>(15);
  const [price, setPrice] = useState<number>(0);

  const commission = (sales * commissionRate) / 100;
  const vatAmount = (price * vatRate) / 100;
  const totalCost = price + vatAmount;

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow-xl space-y-4 text-sm md:text-base">
      <div className="flex items-center gap-2 text-xl font-bold text-indigo-600">
        <Calculator className="w-6 h-6" />
        Commission & Tax Calculator (Zim)
      </div>

      <div className="space-y-3">
        <div className="bg-indigo-50 p-3 rounded-xl">
          <h2 className="font-semibold flex items-center gap-2 text-indigo-700">
            <DollarSign className="w-4 h-4" /> Commission
          </h2>
          <label className="block mt-2">
            Sales Amount (USD):
            <input
              type="number"
              value={sales}
              onChange={(e) => setSales(parseFloat(e.target.value) || 0)}
              className="w-full mt-1 p-2 rounded-md border"
              placeholder="e.g. 500"
            />
          </label>
          <label className="block mt-2">
            Commission Rate (%):
            <input
              type="number"
              value={commissionRate}
              onChange={(e) =>
                setCommissionRate(parseFloat(e.target.value) || 0)
              }
              className="w-full mt-1 p-2 rounded-md border"
              placeholder="e.g. 10"
            />
          </label>
          <p className="mt-2 text-green-600 font-medium">
            You earn: ${commission.toFixed(2)}
          </p>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            // className="mt-2 text-sm text-gray-700"
          >
            {String.raw`$$
Com. = Sales \times \frac{Com.\ Rate}{100} 
\\
= ${sales} \times \frac{${commissionRate}}{100} = ${commission.toFixed(2)}
$$`}
          </ReactMarkdown>
        </div>

        <div className="bg-yellow-50 p-3 rounded-xl">
          <h2 className="font-semibold flex items-center gap-2 text-yellow-700">
            <ShoppingCart className="w-4 h-4" /> VAT (Sales Tax)
          </h2>
          <label className="block mt-2">
            Item Price (USD):
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
              className="w-full mt-1 p-2 rounded-md border"
              placeholder="e.g. 100"
            />
          </label>
          <label className="block mt-2">
            VAT Rate (%):
            <input
              type="number"
              value={vatRate}
              onChange={(e) => setVatRate(parseFloat(e.target.value) || 0)}
              className="w-full mt-1 p-2 rounded-md border"
              placeholder="e.g. 15"
            />
          </label>
          <p className="mt-2 text-red-600 font-medium">
            VAT Amount: ${vatAmount.toFixed(2)}
          </p>
          <p className="text-green-600 font-medium">
            Total Cost: ${totalCost.toFixed(2)}
          </p>
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            // className="mt-2 text-sm text-gray-700"
          >
            {String.raw`$$
VAT = Price \times \frac{VAT\ Rate}{100} \\ = ${price} \times \frac{${vatRate}}{100} = ${vatAmount.toFixed(
              2
            )} \\\\
Total\ Cost = Price + VAT \\ =  ${price} + ${vatAmount.toFixed(
              2
            )} \\ = ${totalCost.toFixed(2)}
$$`}
          </ReactMarkdown>
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-4">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 mt-0.5" />
          <span>
            Example: If you sell an item for $100 with a 10% commission rate,
            you earn $10. If that same item has 15% VAT, total cost to the buyer
            becomes $115.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommissionTaxCalculator;

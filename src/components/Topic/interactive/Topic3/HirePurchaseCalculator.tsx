import { useState } from "react";
import { Calculator, DollarSign, ArrowRightLeft, Coins } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const currencySymbols = {
  ZIG: "Z$",
  USD: "$",
  RANDS: "R",
};

export default function HirePurchaseCalculator() {
  const [cashPrice, setCashPrice] = useState(800);
  const [downPayment, setDownPayment] = useState(200);
  const [monthlyPayment, setMonthlyPayment] = useState(55);
  const [months, setMonths] = useState(12);
  const [currency, setCurrency] = useState<"ZIG" | "USD" | "RANDS">("USD");

  const balance = cashPrice - downPayment;
  const totalHP = downPayment + monthlyPayment * months;
  const extra = totalHP - cashPrice;
  const interestRate = (extra / cashPrice) * 100;

  const symbol = currencySymbols[currency];

  const explanation = `**Calculation Breakdown**

- Balance after down payment = ${symbol}${cashPrice} - ${symbol}${downPayment} = ${symbol}${balance}
- Total HP Price = ${symbol}${downPayment} + (${symbol}${monthlyPayment} × ${months}) = ${symbol}${totalHP}
- Extra amount paid = ${symbol}${totalHP} - ${symbol}${cashPrice} = ${symbol}${extra}
- Interest % = (${extra} ÷ ${cashPrice}) × 100% = ${interestRate.toFixed(2)}%`;

  return (
    <div className="p-4 max-w-md mx-auto bg-[#FFD6BA] rounded-2xl shadow-md space-y-4 text-sm">
      <div className="flex items-center space-x-2">
        <Calculator className="text-indigo-600" />
        <h2 className="text-lg font-semibold">Hire Purchase Calculator</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Cash Price</label>
          <input
            type="number"
            value={cashPrice}
            onChange={(e) => setCashPrice(+e.target.value)}
            className="w-full p-2 border rounded bg-white"
          />
        </div>

        <div>
          <label className="block mb-1">Down Payment</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(+e.target.value)}
            className="w-full p-2 border rounded bg-white"
          />
        </div>

        <div>
          <label className="block mb-1">Monthly Payment</label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(+e.target.value)}
            className="w-full p-2 border rounded bg-white"
          />
        </div>

        <div>
          <label className="block mb-1">Months</label>
          <input
            type="number"
            value={months}
            onChange={(e) => setMonths(+e.target.value)}
            className="w-full p-2 border rounded bg-white"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-1">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as "ZIG" | "USD" | "RANDS")}
            className="w-full p-2 border rounded bg-white"
          >
            <option value="USD">USD</option>
            <option value="ZIG">ZIG</option>
            <option value="RANDS">Rands</option>
          </select>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          // className="prose prose-sm"
        >
          {explanation}
        </ReactMarkdown>
      </div>

      <div className="bg-[#A3DC9A] p-3 rounded flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">Total HP Price: <span className="font-bold">{symbol}{totalHP}</span></p>
          <p className="text-sm">Interest: <span className="font-semibold">{interestRate.toFixed(2)}%</span></p>
        </div>
        <Coins className="text-indigo-500" />
      </div>
    </div>
  );
}

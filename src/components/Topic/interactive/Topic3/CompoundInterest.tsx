import { useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const currencies = {
  ZWL: "ZWL",
  ZIG: "ZIG",
  USD: "USD",
  ZAR: "ZAR",
};

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(8);
  const [time, setTime] = useState(2);
  const [frequency, setFrequency] = useState<"annually" | "semi" | "quarterly" | "monthly">("annually");
  const [currency, setCurrency] = useState<keyof typeof currencies>("ZWL");

  const getCompoundAmount = () => {
    let n = 1;
    switch (frequency) {
      case "semi":
        n = 2;
        break;
      case "quarterly":
        n = 4;
        break;
      case "monthly":
        n = 12;
        break;
    }

    const r = rate / 100;
    const A = principal * Math.pow(1 + r / n, n * time);
    return { A, n };
  };

  const { A, n } = getCompoundAmount();
  const CI = A - principal;

  const currencySymbol = currency === "USD" ? "$" : currency === "ZAR" ? "R" : currency + " ";

  const formula = `
### 🧮 Calculation

**Formula:**

$$A = P \\left(1 + \\frac{r}{n \\times 100}\\right)^{nt}$$

**Where:**
- \\(P = ${principal}\\)
- \\(r = ${rate}\\)
- \\(n = ${n}\\)
- \\(t = ${time}\\)

**Step-by-step:**

$$A = ${principal}\\left(1 + \\frac{${rate}}{${n * 100}}\\right)^{${n} \\times ${time}} = ${A.toFixed(2)}$$

**Compound Interest:**

$$CI = A - P = ${A.toFixed(2)} - ${principal} = ${CI.toFixed(2)}$$
`;

  return (
    <div className="max-w-md mx-auto mt-6 px-4 py-6 rounded-3xl bg-gradient-to-br from-green-200 to-blue-200 shadow-xl border border-indigo-100 space-y-6">
      <div className="flex items-center gap-2 text-indigo-700 font-semibold text-lg">
        <Calculator className="text-indigo-500" />
        Compound Interest Calculator 🇿🇼
      </div>

      {/* Input Fields */}
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-600">Principal</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(+e.target.value)}
            className="w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 bg-white"
            placeholder="e.g. 1000"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Interest Rate (% per year)</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            className="w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 bg-white"
            placeholder="e.g. 8"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Time (Years)</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(+e.target.value)}
            className="w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 bg-white"
            placeholder="e.g. 2"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Frequency</label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as "annually" | "semi" | "quarterly" | "monthly")}
            className="w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            <option value="annually">Annually</option>
            <option value="semi">Semi-annually</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as keyof typeof currencies)}
            className="w-full px-3 py-2 rounded-xl border focus:ring-2 focus:ring-indigo-500 bg-white"
          >
            {Object.entries(currencies).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white border border-indigo-100 p-4 rounded-2xl shadow-inner space-y-1 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Total Amount (A):</span>
          <span className="font-semibold text-indigo-700">
            {currencySymbol}{A.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Compound Interest (CI):</span>
          <span className="font-semibold text-green-600">
            {currencySymbol}{CI.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Formula Breakdown */}
      <div className="text-sm bg-white p-4 rounded-2xl shadow-md border border-pink-100">
        <ReactMarkdown
          children={formula}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>

      <div className="text-center text-xs text-black">
        <RefreshCw className="inline w-4 h-4 mr-1 animate-spin" />
        Real-time calculation — no sign in needed.
      </div>
    </div>
  );
};

export default CompoundInterest;

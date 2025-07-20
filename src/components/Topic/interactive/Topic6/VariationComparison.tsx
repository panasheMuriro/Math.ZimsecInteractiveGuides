import { useState } from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function VariationComparison() {
  const [k, setK] = useState(10);

  const data = Array.from({ length: 10 }, (_, i) => {
    const x = i + 1;
    return {
      x,
      direct: k * x,
      inverse: k / x,
    };
  });

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-2xl space-y-4">
      <h2 className="text-xl font-semibold text-center">Direct vs Inverse Variation</h2>
      <p className="text-sm text-center text-gray-600">
        <InlineMath math="y = kx" /> vs <InlineMath math="y = \frac{k}{x}" />
      </p>

   

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="direct" stroke="#10b981" strokeWidth={2} dot={false} name="Direct" />
          <Line type="monotone" dataKey="inverse" stroke="#f59e0b" strokeWidth={2} dot={false} name="Inverse" />
        </LineChart>
      </ResponsiveContainer>


         <div className="flex flex-col items-center gap-2">
        <label className="text-sm font-medium">Enter the value of k:</label>
        <input
          type="number"
          value={k}
          onChange={(e) => setK(parseFloat(e.target.value) || 0)}
          className="w-20 px-2 py-1 rounded border text-sm"
        />
      </div>
    </div>
  );
}

// // components/VariationGraphTemplate.tsx

// import { useState } from "react";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// interface VariationGraphTemplateProps {
//   title: string;
//   formula: string;
//   type: "direct" | "inverse" | "joint" | "partial";
//   constantLabels: string[]; // e.g. ["k"] or ["a", "b"]
//   defaultConstants: Record<string, number>;
//   computeY: (x: number, constants: Record<string, number>) => number;
//   lineColor?: string;
// }

// export default function VariationGraphTemplate({
//   title,
//   formula,
//   type,
//   constantLabels,
//   defaultConstants,
//   computeY,
//   lineColor = "#3b82f6",
// }: VariationGraphTemplateProps) {
//   const [constants, setConstants] = useState<Record<string, number>>(defaultConstants);

//   const handleChange = (key: string, value: string) => {
//     setConstants((prev) => ({ ...prev, [key]: parseFloat(value) || 0 }));
//   };

//   console.log(type)

//   const data = Array.from({ length: 10 }, (_, i) => {
//     const x = i + 1;
//     return {
//       x,
//       y: computeY(x, constants),
//     };
//   });

//   return (
//     <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-2xl space-y-4">
//       <h2 className="text-xl font-semibold text-center">{title}</h2>
//       <p className="text-sm text-center text-gray-600">{formula}</p>

     

//       <ResponsiveContainer width="100%" height={250}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="x" />
//           <YAxis />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="y"
//             stroke={lineColor}
//             strokeWidth={2}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer>


//        <div className="flex flex-wrap gap-3 justify-center">
//         {constantLabels.map((key) => (
//           <div key={key} className="flex flex-col items-start">
//             <label htmlFor={key} className="text-sm font-medium">
//               {key}:
//             </label>
//             <input
//               id={key}
//               type="number"
//               value={constants[key]}
//               onChange={(e) => handleChange(key, e.target.value)}
//               className="w-20 px-2 py-1 rounded border text-sm"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



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

interface VariationGraphTemplateProps {
  title: string;
  formula: string;
  type: "direct" | "inverse" | "joint" | "partial";
  constantLabels: string[]; // e.g. ["k"] or ["a", "b"]
  defaultConstants: Record<string, number>;
  computeY: (x: number, constants: Record<string, number>) => number;
  lineColor?: string;
}

export default function VariationGraphTemplate({
  title,
  formula,
  type,
  constantLabels,
  defaultConstants,
  computeY,
  lineColor = "#3b82f6",
}: VariationGraphTemplateProps) {
  const [constants, setConstants] = useState<Record<string, number>>(defaultConstants);

  const handleChange = (key: string, value: string) => {
    setConstants((prev) => ({ ...prev, [key]: parseFloat(value) || 0 }));
  };

  console.log(type)
  const data = Array.from({ length: 10 }, (_, i) => {
    const x = i + 1;
    return {
      x,
      y: computeY(x, constants),
    };
  });

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-2xl space-y-4">
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <p className="text-sm text-center text-gray-600">
        <InlineMath math={formula} />
      </p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="y"
            stroke={lineColor}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-3 justify-center">
        {constantLabels.map((key) => (
          <div key={key} className="flex flex-col items-start">
            <label htmlFor={key} className="text-sm font-medium">
              {key}:
            </label>
            <input
              id={key}
              type="number"
              value={constants[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-20 px-2 py-1 rounded border text-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

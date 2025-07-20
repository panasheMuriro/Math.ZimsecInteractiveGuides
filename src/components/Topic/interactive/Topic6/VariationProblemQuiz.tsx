// /* eslint-disable no-case-declarations */

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

type VariationType = "direct" | "inverse" | "joint" | "partial";

interface Question {
  type: VariationType;
  x1: number;
  y1: number;
  x2: number;
  extra?: { yConst?: number };
}

const questions: Question[] = [
  // Direct
  { type: "direct", x1: 3, y1: 12, x2: 6 },
  { type: "direct", x1: 5, y1: 25, x2: 10 },
  { type: "direct", x1: 4, y1: 20, x2: 2 },
  { type: "direct", x1: 2, y1: 8, x2: 10 },

  // Inverse
  { type: "inverse", x1: 2, y1: 10, x2: 4 },
  { type: "inverse", x1: 5, y1: 6, x2: 10 },
  { type: "inverse", x1: 3, y1: 12, x2: 6 },
  { type: "inverse", x1: 4, y1: 16, x2: 8 },

  // Joint
  { type: "joint", x1: 2, y1: 36, x2: 3, extra: { yConst: 6 } },
  { type: "joint", x1: 1, y1: 10, x2: 2, extra: { yConst: 5 } },
  { type: "joint", x1: 3, y1: 90, x2: 2, extra: { yConst: 15 } },
  { type: "joint", x1: 4, y1: 96, x2: 6, extra: { yConst: 4 } },

  // Partial
  { type: "partial", x1: 2, y1: 7, x2: 4 },
  { type: "partial", x1: 3, y1: 6, x2: 6 },
  { type: "partial", x1: 5, y1: 9, x2: 2 },
  { type: "partial", x1: 1, y1: 10, x2: 10 },
];

const getFormulaTex = (type: VariationType) => {
  switch (type) {
    case "direct":
      return "y = kx";
    case "inverse":
      return "y = \\frac{k}{x}";
    case "joint":
      return "z = kxy";
    case "partial":
      return "y = a + \\frac{b}{x}";
  }
};

export default function VariationProblemQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const question = questions[currentIndex];
  const { type, x1, y1, x2, extra } = question;

  let actualY = 0;
  let graphData: { x: number; y: number }[] = [];

  const compute = () => {
    switch (type) {
      case "direct": {
        const k = y1 / x1;
        actualY = k * x2;
        graphData = Array.from({ length: 10 }, (_, i) => {
          const x = i + 1;
          return { x, y: k * x };
        });
        break;
      }
      case "inverse": {
        const k = x1 * y1;
        actualY = k / x2;
        graphData = Array.from({ length: 10 }, (_, i) => {
          const x = i + 1;
          return { x, y: k / x };
        });
        break;
      }
      case "joint": {
        const yConst = extra?.yConst ?? 1;
        const k = y1 / (x1 * yConst);
        actualY = k * x2 * yConst;
        graphData = Array.from({ length: 10 }, (_, i) => {
          const x = i + 1;
          return { x, y: k * x * yConst };
        });
        break;
      }
      case "partial": {
        const a = 2;
        const b = y1 - a; // assume x1 ≠ 0
        actualY = a + b / x2;
        graphData = Array.from({ length: 10 }, (_, i) => {
          const x = i + 1;
          return { x, y: a + b / x };
        });
        break;
      }
    }
  };

  compute();

  const handleSubmit = () => {
    const parsed = parseFloat(userAnswer);
    const isCorrect = Math.abs(parsed - actualY) < 0.01;
    setFeedback(isCorrect ? "✅ Correct!" : `❌ Try again. Answer: ${actualY.toFixed(2)}`);
  };



  const nextQuestion = () => {
  setUserAnswer("");
  setFeedback(null);
  let randomIndex = currentIndex;
  while (randomIndex === currentIndex) {
    randomIndex = Math.floor(Math.random() * questions.length);
  }
  setCurrentIndex(randomIndex);
};

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-2xl shadow space-y-4">
      <h2 className="text-lg font-semibold text-center capitalize">{type} Variation Problem</h2>

    

      {feedback && <p className="text-center font-medium">{feedback}</p>}

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>


        <p className="text-sm text-center text-gray-600 mb-1 italic">
        <InlineMath math={getFormulaTex(type)} />
      </p>

      <div className="text-sm text-center">
        <p>
          Given: <InlineMath math={`y = ${y1}`} /> when <InlineMath math={`x = ${x1}`} />
          {type === "joint" && extra?.yConst && (
            <>
              , <InlineMath math={`y = ${extra.yConst}`} />
            </>
          )}
        </p>
        <p>
          Find <InlineMath math="y" /> when <InlineMath math={`x = ${x2}`} />
        </p>
      </div>

      <div className="flex justify-center mt-2">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer"
          className="w-32 px-2 py-1 rounded border text-sm"
        />
        <button
          onClick={handleSubmit}
          className="ml-2 px-3 py-1 bg-blue-600 text-white rounded text-sm"
        >
          Check
        </button>
      </div>

      

      <div className="text-center">
        <button
          onClick={nextQuestion}
          className="px-4 py-1 bg-green-600 text-white rounded text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}

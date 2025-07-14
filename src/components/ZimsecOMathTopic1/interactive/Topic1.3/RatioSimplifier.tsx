import { useState, useRef } from 'react';
import { Ruler, Equal, ArrowRightCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const RatioSimplifier = () => {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [steps, setSteps] = useState<string[]>([]);
  const [result, setResult] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);

  const simplifyRatio = () => {
    const a = parseInt(inputA);
    const b = parseInt(inputB);

    if (!a || !b) return;

    const originalA = a;
    const originalB = b;

    const gcd = (x: number, y: number): number => {
      while (y) [x, y] = [y, x % y];
      return x;
    };

    const divisor = gcd(a, b);
    const simpleA = a / divisor;
    const simpleB = b / divisor;

    const explanation = [
      `Original ratio: ${originalA}:${originalB}`,
      `Find GCD of ${originalA} and ${originalB} → ${divisor}`,
      `Divide both by ${divisor}: ${originalA}/${divisor} and ${originalB}/${divisor}`,
      `Simplified ratio: ${simpleA}:${simpleB}`
    ];

    setSteps(explanation);
    setResult(`${simpleA}:${simpleB}`);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-[url('/paper-bg.png')] bg-cover bg-no-repeat p-6 rounded-3xl shadow-xl border border-white/30">
      <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-900">
        <Ruler className="mr-2 text-indigo-500" />
        Ratio Simplifier
        <Equal className="ml-2 text-pink-500" />
      </h3>

      <div className="flex gap-3 mb-6 items-center">
        <input
          type="number"
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="Value A"
          className="rounded-xl px-4 py-2 bg-yellow-100 border-2 border-yellow-300 w-1/2 text-center shadow-inner font-bold text-lg"
        />
        <span className="text-lg font-bold">:</span>
        <input
          type="number"
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
          placeholder="Value B"
          className="rounded-xl px-4 py-2 bg-yellow-100 border-2 border-yellow-300 w-1/2 text-center shadow-inner font-bold text-lg"
        />
        <button
          onClick={simplifyRatio}
          className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition"
        >
          Simplify
        </button>
      </div>

      {steps.length > 0 && (
        <motion.div
          ref={resultRef}
          className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border-2 border-dashed border-purple-300 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4 className="text-lg font-bold mb-2 text-indigo-700 flex items-center">
            Steps
            <ArrowRightCircle className="ml-2 text-purple-500" />
          </h4>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-yellow-200 border-l-4 border-yellow-500 text-purple-900 px-4 py-2 rounded-lg shadow"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {step}
              </motion.div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-green-200 to-green-300 rounded-xl text-center font-bold text-xl text-green-800 shadow-inner">
            Final Answer: {result}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RatioSimplifier;

// components/HcfLcmAlgebra.tsx
import { useState } from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface Problem {
  expr1: string;
  expr2: string;
  hcf: string;
  lcm: string;
  steps: {
    hcf: string[];
    lcm: string[];
  };
}

const problems: Problem[] = [
  {
    expr1: "12x^3y^2",
    expr2: "18x^2y^4",
    hcf: "6x^2y^2",
    lcm: "36x^3y^4",
    steps: {
      hcf: [
        "12x^3y^2 = 2^2 \\times 3 \\times x^3 \\times y^2",
        "18x^2y^4 = 2 \\times 3^2 \\times x^2 \\times y^4",
        "HCF = 2 \\times 3 \\times x^2 \\times y^2 = 6x^2y^2",
      ],
      lcm: [
        "12x^3y^2 = 2^2 \\times 3 \\times x^3 \\times y^2",
        "18x^2y^4 = 2 \\times 3^2 \\times x^2 \\times y^4",
        "LCM = 2^2 \\times 3^2 \\times x^3 \\times y^4 = 36x^3y^4",
      ],
    },
  },
  {
    expr1: "8a^2b",
    expr2: "12ab^3",
    hcf: "4ab",
    lcm: "24a^2b^3",
    steps: {
      hcf: [
        "8a^2b = 2^3 \\times a^2 \\times b",
        "12ab^3 = 2^2 \\times 3 \\times a \\times b^3",
        "HCF = 2^2 \\times a \\times b = 4ab",
      ],
      lcm: [
        "8a^2b = 2^3 \\times a^2 \\times b",
        "12ab^3 = 2^2 \\times 3 \\times a \\times b^3",
        "LCM = 2^3 \\times 3 \\times a^2 \\times b^3 = 24a^2b^3",
      ],
    },
  },
  {
    expr1: "10x^2y",
    expr2: "25xy^2",
    hcf: "5xy",
    lcm: "50x^2y^2",
    steps: {
      hcf: [
        "10x^2y = 2 \\times 5 \\times x^2 \\times y",
        "25xy^2 = 5^2 \\times x \\times y^2",
        "HCF = 5 \\times x \\times y = 5xy",
      ],
      lcm: [
        "10x^2y = 2 \\times 5 \\times x^2 \\times y",
        "25xy^2 = 5^2 \\times x \\times y^2",
        "LCM = 2 \\times 5^2 \\times x^2 \\times y^2 = 50x^2y^2",
      ],
    },
  },
];

export default function HCFLCM() {
  const [index, setIndex] = useState(0);
  const problem = problems[index];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % problems.length);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white shadow rounded-2xl space-y-4">
      <h2 className="text-xl font-semibold text-center">HCF & LCM of Algebraic Expressions</h2>

      <p className="text-center text-md">
        Given expressions: <InlineMath math={problem.expr1} /> and <InlineMath math={problem.expr2} />
      </p>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-md my-3 text-gray-700">HCF Steps:</h3>
          {problem.steps.hcf.map((step, idx) => (
            <p key={idx}>
              <InlineMath math={step} />
            </p>
          ))}
          <p className="mt-1 font-medium">
            Final HCF: <InlineMath math={problem.hcf} />
          </p>
        </div>
        <hr className="my-4 text-gray-200 " />

        <div>
          <h3 className="font-semibold text-md text-gray-700 my-3 ">LCM Steps:</h3>
          {problem.steps.lcm.map((step, idx) => (
            <p key={idx}>
              <InlineMath math={step} />
            </p>
          ))}
          <p className="mt-1 font-medium">
            Final LCM: <InlineMath math={problem.lcm} />
          </p>
        </div>
      </div>

      <button
        onClick={handleNext}
        className="mx-auto block bg-gray-500 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm w-full"
      >
        Next
      </button>
    </div>
  );
}

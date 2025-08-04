/* eslint-disable @typescript-eslint/no-explicit-any */
import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderAreaScaleSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No area calculations performed yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {entries.map(([key, value]) => (
        <li key={key} className="flex justify-between items-center">
          <span style={{ color: '#264653' }}>{key}:</span>
          <span className="font-mono" style={{ color: '#264653' }}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

// --- The Question Data ---
const scaleFactorAreaQuestion: MultiStepQuestion = {
  id: 'scale-factor-area-quiz',
  title: 'Scale Factor and Area',
  steps: [
    {
      id: 'sf-area-linear-factor',
      question: "If the linear scale of a map is $1:5000$, what is the linear scale factor ($k$)?",
      questionType: 'text',
      options: [
        "$5000$",
        "$\\frac{1}{5000}$",
        "$\\frac{1}{5000^2}$",
        "$25,000,000$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$\\frac{1}{5000}$"
      explanation: "The linear scale factor ($k$) is the ratio of the map distance to the real distance. For a scale of $1:n$, the linear scale factor is $\\frac{1}{n}$. So, for $1:5000$, $k = \\frac{1}{5000}$.",
      explanationType: 'text'
    },
    {
      id: 'sf-area-area-factor',
      question: "If the linear scale factor is $k = \\frac{1}{1000}$, what is the area scale factor?",
      questionType: 'text',
      options: [
        "$\\frac{1}{1000}$",
        "$\\frac{1}{1000^2}$",
        "$1000$",
        "$1000^2$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$\\frac{1}{1000^2}$"
      explanation: "The area scale factor is the square of the linear scale factor ($k^2$). So, if $k = \\frac{1}{1000}$, the area scale factor is $\\left(\\frac{1}{1000}\\right)^2 = \\frac{1}{1000^2}$.",
      explanationType: 'text'
    },
    {
      id: 'sf-area-real-area',
      question: "A map has a scale of $1:2000$. If the area of a field on the map is $5 \\, \\mathrm{cm}^2$, what is its real area?",
      questionType: 'text',
      options: [
        "$5 \\times 2000 \\, \\mathrm{cm}^2$",
        "$5 \\times 2000^2 \\, \\mathrm{cm}^2$",
        "$\\frac{5}{2000^2} \\, \\mathrm{cm}^2$",
        "$5 + 2000^2 \\, \\mathrm{cm}^2$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$5 \\times 2000^2 \\, \\mathrm{cm}^2$"
      explanation: "To find the real area, multiply the map area by the area scale factor. The area scale factor is $n^2$, where $n$ is the denominator of the linear scale ($1:n$). Here, $n=2000$, so real area = Map Area $\\times n^2 = 5 \\times 2000^2 \\, \\mathrm{cm}^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        const realAreaCm2 = 5 * Math.pow(2000, 2);
        const realAreaM2 = realAreaCm2 / 10000; // 1 m² = 10000 cm²
        setSharedValue("Real Area (Example)", `${realAreaCm2.toLocaleString()} cm² = ${realAreaM2} m²`);
      }
    },
    {
      id: 'sf-area-from-scale',
      question: "A plan uses a scale of $1:500$. What is the area scale factor?",
      questionType: 'text',
      options: [
        "$500$",
        "$\\frac{1}{500}$",
        "$500^2$",
        "$\\frac{1}{500^2}$"
      ],
      optionType: 'text',
      correct: 3, // Index of "$\\frac{1}{500^2}$"
      explanation: "The linear scale is $1:500$, so $n=500$. The area scale factor relates map area to real area. Since areas are reduced by $n^2$, the area scale factor is $\\frac{1}{n^2} = \\frac{1}{500^2}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        const areaFactor = 1 / Math.pow(500, 2);
        setSharedValue("Area Scale Factor (1:500)", `1:${Math.pow(500, 2).toLocaleString()} or ${areaFactor.toExponential(2)}`);
      }
    },
    {
      id: 'sf-linear-from-area',
      question: "If the area scale factor between a model and the real object is $\\frac{1}{10,000}$, what is the linear scale factor?",
      questionType: 'text',
      options: [
        "$\\frac{1}{100}$",
        "$\\frac{1}{10,000}$",
        "$\\frac{1}{1000}$",
        "$\\frac{1}{10}$"
      ],
      optionType: 'text',
      correct: 0, // Index of "$\\frac{1}{100}$"
      explanation: "The area scale factor is the square of the linear scale factor ($k^2$). To find $k$, take the square root of the area scale factor. $k = \\sqrt{\\frac{1}{10,000}} = \\frac{1}{\\sqrt{10,000}} = \\frac{1}{100}$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        const linearScaleDenominator = Math.sqrt(10000);
        setSharedValue("Linear Scale (from Area SF 1:10,000)", `1:${linearScaleDenominator}`);
      }
    }
  ]
}

const ScaleFactorAreaQuiz: React.FC = () => {
  const areaRules = [
    "Linear Scale Factor ($k$) for scale $1:n$ is $k=\\frac{1}{n}$.",
    "Area Scale Factor = $k^2 = \\frac{1}{n^2}$.",
    "Real Area = Map Area $\\times n^2$.",
    "Map Area = Real Area $\\times \\frac{1}{n^2}$.",
    "To find linear scale factor from area scale factor: $k = \\sqrt{\\text{Area SF}}$."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Scale Factor and Area Calculations"
        icon="📐" // Or any other relevant icon
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={areaRules}
        rulesTitle="Area Scale Rules:"
        questions={[scaleFactorAreaQuestion]} // Pass the question object
        renderSharedValuesSummary={renderAreaScaleSummary} // Pass the summary renderer
      />
    </div>
  );
};

export default ScaleFactorAreaQuiz;
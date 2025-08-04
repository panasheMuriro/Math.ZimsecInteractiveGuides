/* eslint-disable @typescript-eslint/no-explicit-any */
// ScaleApplicationsQuiz.tsx (or .jsx)

import MultipleStepInteractiveComponent, { MultiStepQuestion } from "../../Templates/MultipleStepInteractiveComponent";

// --- Helper Function for Summary ---
const renderApplicationsSummary = (sharedValues: { [key: string]: any }) => {
  const entries = Object.entries(sharedValues);
  if (entries.length === 0) {
    return <p style={{ color: '#264653' }}>No calculations performed yet.</p>;
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
const scaleApplicationsQuestion: MultiStepQuestion = {
  id: 'scale-applications-quiz',
  title: 'Real-World Applications',
  steps: [
    {
      id: 'app-identify-scale',
      question: "Which scale would be most appropriate for a detailed building plan?",
      questionType: 'text',
      options: [
        "$1:25,000$ (Map scale)",
        "$1:100,000$ (Atlas scale)",
        "$1:100$ (Building plan scale)",
        "$1:1,000,000$ (Small scale map)"
      ],
      optionType: 'text',
      correct: 2, // Index of "$1:100$ (Building plan scale)"
      explanation: "Detailed building plans require a large scale (small denominator) to show fine details. $1:100$ or $1:50$ are common. Smaller scales like $1:25,000$ are used for maps covering large areas.",
      explanationType: 'text'
    },
    {
      id: 'app-map-distance',
      question: "On a map with scale $1:50,000$, two towns are 12 cm apart. How far are they in reality?",
      questionType: 'text',
      options: [
        "$12 \\times 50,000 \\, \\mathrm{cm}$",
        "$12 \\div 50,000 \\, \\mathrm{cm}$",
        "$50,000 \\div 12 \\, \\mathrm{cm}$",
        "$12 + 50,000 \\, \\mathrm{cm}$"
      ],
      optionType: 'text',
      correct: 0, // Index of "$12 \\times 50,000 \\, \\mathrm{cm}$"
      explanation: "To find the real distance, multiply the map distance by the scale denominator. Real Distance = Map Distance $\\times$ Scale Factor. So, $12 \\, \\mathrm{cm} \\times 50,000$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        const realDistanceCm = 12 * 50000;
        const realDistanceKm = realDistanceCm / 100000; // 1 km = 100,000 cm
        setSharedValue("Town Distance (1:50,000)", `${realDistanceCm.toLocaleString()} cm = ${realDistanceKm} km`);
      }
    },
    {
      id: 'app-plan-area',
      question: "A room on a $1:50$ scale plan measures $15 \\, \\mathrm{cm} \\times 10 \\, \\mathrm{cm}$. What is its real area?",
      questionType: 'text',
      options: [
        "$(15 \\times 10) \\, \\mathrm{cm}^2 \\times 50$",
        "$(15 \\times 50) \\times (10 \\times 50) \\, \\mathrm{cm}^2$",
        "$(15 \\times 10) \\, \\mathrm{cm}^2 \\times 50^2$",
        "$(15 + 10) \\, \\mathrm{cm} \\times 50$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$(15 \\times 50) \\times (10 \\times 50) \\, \\mathrm{cm}^2$"
      explanation: "First, find the real length and width by multiplying each dimension by the scale factor (50). Real Length = $15 \\times 50$ cm. Real Width = $10 \\times 50$ cm. Then, calculate the real area: Real Area = Real Length $\\times$ Real Width.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        const realLengthCm = 15 * 50;
        const realWidthCm = 10 * 50;
        const realAreaCm2 = realLengthCm * realWidthCm;
        const realAreaM2 = realAreaCm2 / 10000; // 1 m² = 10,000 cm²
        setSharedValue("Room Area (1:50)", `${realAreaCm2.toLocaleString()} cm² = ${realAreaM2} m²`);
      }
    },
    {
      id: 'app-unit-conversion',
      question: "When solving scale problems, why is it crucial to convert units?",
      questionType: 'text',
      options: [
        "To make the numbers bigger",
        "To ensure the scale factor is always 1",
        "To match the units of the scale and the measurements being used",
        "It's not necessary if you are careful"
      ],
      optionType: 'text',
      correct: 2, // Index of "To match the units..."
      explanation: "The scale factor relates map/plan units directly to real-world units. If your measurement is in centimeters but the scale is given in meters, or vice-versa, you must convert them to the same unit before applying the scale factor.",
      explanationType: 'text'
    },
    {
      id: 'app-map-area',
      question: "A lake covers $3 \\, \\mathrm{cm}^2$ on a map with scale $1:20,000$. What is its real area?",
      questionType: 'text',
      options: [
        "$3 \\times 20,000 \\, \\mathrm{cm}^2$",
        "$3 \\times (20,000)^2 \\, \\mathrm{cm}^2$",
        "$3 \\div (20,000)^2 \\, \\mathrm{cm}^2$",
        "$3 + 20,000 \\, \\mathrm{cm}^2$"
      ],
      optionType: 'text',
      correct: 1, // Index of "$3 \\times (20,000)^2 \\, \\mathrm{cm}^2$"
      explanation: "For area calculations, you must use the area scale factor, which is the square of the linear scale factor ($n^2$). Real Area = Map Area $\\times n^2$. So, Real Area = $3 \\, \\mathrm{cm}^2 \\times (20,000)^2$.",
      explanationType: 'text',
      onCorrect: (_selectedOptionIndex, setSharedValue) => {
        const realAreaCm2 = 3 * Math.pow(20000, 2);
        const realAreaKm2 = realAreaCm2 / (100000 * 100000); // 1 km² = 100,000 cm * 100,000 cm
        setSharedValue("Lake Area (1:20,000)", `${realAreaCm2.toExponential(2)} cm² ≈ ${realAreaKm2.toFixed(2)} km²`);
      }
    }
  ]
};

const ScaleApplicationsQuiz: React.FC = () => {
  const appRules = [
    "Choose scale based on purpose: Large scales ($1:50$) for detail, Small scales ($1:50,000$) for overview.",
    "Real Distance = Map Distance $\\times$ Scale Denominator.",
    "Real Length/Width = Plan Length/Width $\\times$ Scale Denominator.",
    "Real Area = Map Area $\\times (\\text{Scale Denominator})^2$.",
    "Always convert units to match the scale before calculating."
  ];

  return (
    <div className="flex justify-center items-center">
      <MultipleStepInteractiveComponent
        title="Real-World Applications of Scales"
        icon="🏙️" // Or any other relevant icon like "📐" or "🗺️"
        theme={{ from: '', to: '', button: '', buttonHover: '' }} // Unused but required
        rules={appRules}
        rulesTitle="Application Tips:"
        questions={[scaleApplicationsQuestion]} // Pass the question object
        renderSharedValuesSummary={renderApplicationsSummary} // Pass the summary renderer
        // initialSharedValues, onReset if needed
      />
    </div>
  );
};

export default ScaleApplicationsQuiz
import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Topic7/Templates/MultiStepInteractiveComponent";

const scaleProblemsData: InteractiveToolData = {
  inlineExpression: true,
  expressionSize: "text-xl",
  title: "Real-World Applications of Scale",
  description: "Apply scale concepts to solve practical problems in construction, maps, and more.",
  theme: {
    primaryColor: "teal",
    backgroundColorFrom: "teal-50",
    backgroundColorTo: "cyan-100"
  },
  steps: [
    {
      id: "identifyInfo",
      title: "Step 1: Identify Given Information",
      description: "List the known quantities: map dimensions, scale, etc.",
      type: "mcq"
    },
    {
      id: "determineGoal",
      title: "Step 2: Determine What Needs Finding",
      description: "What are you calculating? Length, area, scale?",
      type: "mcq"
    },
    {
      id: "convertUnits",
      title: "Step 3: Convert Units if Necessary",
      description: "Ensure units are consistent (e.g., cm for calculations).",
      type: "mcq"
    },
    {
      id: "applyFormula",
      title: "Step 4: Apply the Scale Formula",
      description: "Use $\\text{Real} = \\text{Map} \\times \\text{Scale Denominator}$ or $\\text{Area}_{\\text{real}} = \\text{Area}_{\\text{map}} \\times (\\text{Scale Denominator})^2$.",
      type: "mcq"
    },
    {
      id: "calculateResult",
      title: "Step 5: Perform the Calculation",
      description: "Do the multiplication or division.",
      type: "mcq"
    },
    {
      id: "convertFinalUnits",
      title: "Step 6: Convert Final Units",
      description: "Change the result to the required unit (e.g., m, km, hectares).",
      type: "mcq"
    },
    {
      id: "checkAnswer",
      title: "Step 7: Check Your Answer",
      description: "Does the result seem reasonable in the real-world context?",
      type: "mcq"
    }
  ],
  practiceProblems: [
    {
     expression: "A rectangular field measures 8 cm by 6 cm on a map with scale $1:5,000$. Find its real area in hectares.", // New field for full text
     solution: {
        identifyInfo: "$\\text{Map Length} = 8\\text{cm},\\ \\text{Map Width} = 6\\text{cm},\\ \\text{Scale} = 1:5,000$",
        determineGoal: "$\\text{Find Real Area}$",
        convertUnits: "$\\text{Already in cm}$",
        applyFormula: "$\\text{Real Area} = (8 \\times 5,000) \\times (6 \\times 5,000)$",
        calculateResult: "$120,000\\text{ m}^2$",
        convertFinalUnits: "$12\\text{ hectares}$",
        checkAnswer: "$\\text{Yes, plausible for a field}$"
      },
      explanation: {
        identifyInfo: "The map shows a rectangle with length 8 cm and width 6 cm. The scale is 1:5,000.",
        determineGoal: "We need to find the actual area of the field.",
        convertUnits: "Map dimensions are in cm, which is suitable for the scale formula.",
        applyFormula: "First, find real length and width, then multiply: $\\text{Real Length} = 8 \\times 5,000$, $\\text{Real Width} = 6 \\times 5,000$. Area = Length $\\times$ Width.",
        calculateResult: "$(8 \\times 5,000) = 40,000\\text{ cm} = 400\\text{ m}$. $(6 \\times 5,000) = 30,000\\text{ cm} = 300\\text{ m}$. Area = $400 \\times 300 = 120,000\\text{ m}^2$.",
        convertFinalUnits: "$1\\text{ hectare} = 10,000\\text{ m}^2$. So, $120,000 \\div 10,000 = 12$ hectares.",
        checkAnswer: "An area of 12 hectares (120,000 m²) is reasonable for a large field."
      },
      hint: "Remember to convert cm to m for area, and then to hectares."
    },
    {
      expression: "An architect's plan for a room uses a scale of $1:200$. The room on the plan is 5 cm long and 3 cm wide. What are the actual dimensions of the room in meters?",
      solution: {
        identifyInfo: "$\\text{Map Length} = 5\\text{cm},\\ \\text{Map Width} = 3\\text{cm},\\ \\text{Scale} = 1:200$",
        determineGoal: "$\\text{Find Real Length and Width}$",
        convertUnits: "$\\text{Already in cm}$",
        applyFormula: "$\\text{Real Length} = 5 \\times 200,\\ \\text{Real Width} = 3 \\times 200$",
        calculateResult: "$\\text{Length} = 1,000\\text{ cm},\\ \\text{Width} = 600\\text{ cm}$",
        convertFinalUnits: "$\\text{Length} = 10\\text{ m},\\ \\text{Width} = 6\\text{ m}$",
        checkAnswer: "$\\text{Yes, plausible for a room}$"
      },
      explanation: {
        identifyInfo: "The plan shows a room with length 5 cm and width 3 cm. The scale is 1:200.",
        determineGoal: "We need to find the actual length and width of the room.",
        convertUnits: "Map dimensions are in cm, which is suitable.",
        applyFormula: "Use $\\text{Real} = \\text{Map} \\times \\text{Scale Denominator}$ for both length and width.",
        calculateResult: "$\\text{Real Length} = 5 \\times 200 = 1,000\\text{ cm}$. $\\text{Real Width} = 3 \\times 200 = 600\\text{ cm}$.",
        convertFinalUnits: "$1\\text{ m} = 100\\text{ cm}$. So, $1,000 \\div 100 = 10\\text{ m}$ and $600 \\div 100 = 6\\text{ m}$.",
        checkAnswer: "Dimensions of 10 m by 6 m are typical for a large room."
      },
      hint: "Calculate length and width separately using the scale. Then convert cm to m."
    },
    {
      // expression: "\\text{Map area: } 4\\text{cm}^2,\\ \\text{Scale: } 1:25,000",
      expression: "The area of a lake on a map is $4\\text{ cm}^2$. The map scale is $1:25,000$. Calculate the real area of the lake in km².",
      solution: {
        identifyInfo: "$\\text{Map Area} = 4\\text{cm}^2,\\ \\text{Scale} = 1:25,000$",
        determineGoal: "$\\text{Find Real Area}$",
        convertUnits: "$\\text{Already in cm}^2$",
        applyFormula: "$\\text{Real Area} = 4 \\times (25,000)^2$",
        calculateResult: "$2,500,000,000\\text{ cm}^2$",
        convertFinalUnits: "$0.25\\text{ km}^2$",
        checkAnswer: "$\\text{Yes, plausible for a lake}$"
      },
      explanation: {
        identifyInfo: "The map shows the lake with an area of 4 cm². The scale is 1:25,000.",
        determineGoal: "We need to find the actual area of the lake.",
        convertUnits: "Map area is in cm², which is suitable.",
        applyFormula: "For area, the scale factor is squared: $\\text{Real Area} = \\text{Map Area} \\times (\\text{Scale Denominator})^2$.",
        calculateResult: "$\\text{Real Area} = 4 \\times (25,000)^2 = 4 \\times 625,000,000 = 2,500,000,000\\text{ cm}^2$.",
        convertFinalUnits: "$1\\text{ km}^2 = 1,000,000\\text{ m}^2 = 10,000,000,000\\text{ cm}^2$. So, $2,500,000,000 \\div 10,000,000,000 = 0.25\\text{ km}^2$.",
        checkAnswer: "An area of 0.25 km² (25 hectares) is reasonable for a small lake."
      },
      hint: "Use the area scale factor: $(\\text{Scale Denominator})^2$. Remember to convert cm² to km²."
    }
  ],
  mcqOptionsPerProblem: [
   {
      // --- Remove $...$ from plain text options ---
      identifyInfo: [
        "Map Length = 8cm, Map Width = 6cm, Scale = 1:5,000", // Plain text
        "Real Length = 8m, Real Width = 6m, Scale = 1:5,000", // Plain text
        "Map Area = 48cm^2, Scale = 1:5,000" // Plain text
      ],
      determineGoal: [
        "Find Real Area", // Plain text
        "Find Real Length", // Plain text
        "Find Scale" // Plain text
      ],
      convertUnits: [
        "Already in cm", // Plain text
        "Convert cm to m", // Plain text
        "Convert cm^2 to m^2" // Plain text
      ],
      applyFormula: [
        "Real Area = (8 \\times 5,000) \\times (6 \\times 5,000)", // Plain text, math inside
        "Real Area = 48 \\times (5,000)^2", // Plain text, math inside
        "Real Length = 8 \\times 5,000" // Plain text, math inside
      ],
      calculateResult: [
        "120,000\\text{ m}^2", // Plain text, math inside
        "2,400\\text{ m}^2", // Plain text, math inside
        "40,000\\text{ m}" // Plain text, math inside
      ],
      convertFinalUnits: [
        "12\\text{ hectares}", // Plain text, math inside
        "120\\text{ hectares}", // Plain text, math inside
        "1.2\\text{ hectares}" // Plain text, math inside
      ],
      checkAnswer: [
        "Yes, plausible for a field", // Plain text
        "No, too small", // Plain text
        "No, too large" // Plain text
      ]
    },
    // Problem 2 Options
    {
      identifyInfo: [
        "Map Length = 5cm, Map Width = 3cm, Scale = 1:200",
        "Real Length = 5m, Real Width = 3m, Scale = 1:200",
        "Map Perimeter = 16cm, Scale = 1:200"
      ],
      determineGoal: [
        "Find Real Length and Width",
        "Find Real Area",
        "Find Scale"
      ],
      // ... rest of problem 2 options, removing $...$ from plain text ...
       convertUnits: [
        "Already in cm",
        "Convert cm to mm",
        "Convert cm to m"
      ],
      applyFormula: [
        "Real Length = 5 \\times 200, Real Width = 3 \\times 200",
        "Real Area = (5 \\times 200) \\times (3 \\times 200)",
        "Real Perimeter = 16 \\times 200"
      ],
      calculateResult: [
        "Length = 1,000\\text{ cm}, Width = 600\\text{ cm}",
        "Area = 600,000\\text{ cm}^2",
        "Perimeter = 3,200\\text{ cm}"
      ],
      convertFinalUnits: [
        "Length = 10\\text{ m}, Width = 6\\text{ m}",
        "Area = 60\\text{ m}^2",
        "Perimeter = 32\\text{ m}"
      ],
      checkAnswer: [
        "Yes, plausible for a room",
        "No, too small",
        "No, too large"
      ]
    },
    // Problem 3 Options
    {
      identifyInfo: [
        "Map Area = 4cm^2, Scale = 1:25,000",
        "Real Area = 4km^2, Scale = 1:25,000",
        "Map Length = 2cm, Map Width = 2cm, Scale = 1:25,000"
      ],
      determineGoal: [
        "Find Real Area",
        "Find Real Length",
        "Find Scale"
      ],
      // ... rest of problem 3 options, removing $...$ from plain text ...
       convertUnits: [
        "Already in cm^2",
        "Convert cm^2 to m^2",
        "Convert cm^2 to km^2"
      ],
      applyFormula: [
        "Real Area = 4 \\times (25,000)^2",
        "Real Area = 4 \\times 25,000",
        "Real Length = 2 \\times 25,000"
      ],
      calculateResult: [
        "2,500,000,000\\text{ cm}^2",
        "100,000\\text{ cm}^2",
        "50,000\\text{ cm}"
      ],
      convertFinalUnits: [
        "0.25\\text{ km}^2",
        "2.5\\text{ km}^2",
        "25\\text{ km}^2"
      ],
      checkAnswer: [
        "Yes, plausible for a lake",
        "No, too small",
        "No, too large"
      ]
    }
  ]
};

const ScaleProblems: React.FC = () => {
  return (
    <div>
      <MultiStepInteractiveComponent toolData={scaleProblemsData} />
    </div>
  );
};

export default ScaleProblems;
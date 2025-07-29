import MultiStepInteractiveComponent, { InteractiveToolData } from "../../Templates/MultiStepInteractiveComponent";

const scaleMeasurementsData: InteractiveToolData = {
  title: "Scale Measurements and Calculations",
  description: "Learn how to work with map and drawing scales to find real distances, map distances, and scale ratios.",
  theme: {
    primaryColor: "teal",
    backgroundColorFrom: "teal-50",
    backgroundColorTo: "cyan-100"
  },
  steps: [
    {
      id: "identifyGiven",
      title: "Step 1: Identify Given Values",
      description: "Determine what is given: $\\text{map distance}, \\text{real distance}, \\\\  \\text{ or scale}.$",
      type: "mcq"
    },
    {
      id: "convertUnits",
      title: "Step 2: Convert Units",
      description: "Ensure all units are in $\\text{centimeters }$ before calculating.",
      type: "mcq"
    },
    {
      id: "applyFormula",
      title: "Step 3: Apply Scale Formula",
      description: "Use: $\\text{Real} = \\text{Map} \\times \\text{Scale Denom.}$",
      type: "mcq"
    },
    {
      id: "solveAndConvert",
      title: "Step 4: Solve and Convert",
      description: "Convert result to $\\text{km or m} if needed.$",
      type: "mcq"
    },
    {
      id: "finalAnswer",
      title: "Final Step: State the Answer",
      description: "Include correct $\\text{units and context}.$",
      type: "mcq"
    }
  ],
  practiceProblems: [
    // Problem 1: Map = 8 cm, Scale = 1:50,000 → Real = 4 km
    {
      expression: "\\text{Map} = 8\\text{ cm},\\\\ \\text{Scale} =\\\\ 1:50,000",
      solution: {
        identifyGiven: "\\text{Map and scale given}",
        convertUnits: "\\text{8 cm stays 8 cm}",
        applyFormula: "\\text{400,000}",
        solveAndConvert: "\\text{4 km}",
        finalAnswer: "\\text{4 km}"
      },
      explanation: {
        identifyGiven: "We are given map distance and scale.",
        convertUnits: "Map distance is already in cm.",
        applyFormula: "8 \\times 50,000 = 400,000\\text{ cm}",
        solveAndConvert: "400,000\\text{ cm} = 4\\text{ km}",
        finalAnswer: "The real distance is \\text{4 km}."
      },
      hint: "Multiply map by scale denominator."
    },
    // Problem 2: Real = 12 km, Scale = 1:200,000 → Map = 6 cm
    {
      expression: "\\text{Real} = 12\\text{ km},\\\\ \\text{Scale} = \\\\ 1:200,000",
      solution: {
        identifyGiven: "\\text{Real and scale given}",
        convertUnits: "\\text{1,200,000 cm}",
        applyFormula: "\\text{6}",
        solveAndConvert: "\\text{6 cm}",
        finalAnswer: "\\text{6 cm}"
      },
      explanation: {
        identifyGiven: "Real distance and scale are given.",
        convertUnits: "12\\text{ km} = 1,200,000\\text{ cm}",
        applyFormula: "1,200,000 \\div 200,000 = 6",
        solveAndConvert: "Result is 6 cm.",
        finalAnswer: "The map distance is \\text{6 cm}."
      },
      hint: "Divide real by scale denominator."
    },
    // Problem 3: Map = 3 cm, Real = 15 km → Scale = 1:500,000
    {
      expression: "\\text{Map} = 3\\text{ cm},\\\\ \\text{Real} = 15\\text{ km}",
      solution: {
        identifyGiven: "\\text{Map and real given}",
        convertUnits: "\\text{1,500,000 cm}",
        applyFormula: "\\text{1:500,000}",
        solveAndConvert: "\\text{1:500,000}",
        finalAnswer: "\\text{1:500,000}"
      },
      explanation: {
        identifyGiven: "Both map and real distances given.",
        convertUnits: "15\\text{ km} = 1,500,000\\text{ cm}",
        applyFormula: "3 : 1,500,000 = 1 : 500,000",
        solveAndConvert: "Simplify ratio to 1:x form.",
        finalAnswer: "The scale is \\text{1:500,000}."
      },
      hint: "Write as ratio and simplify."
    }
  ],
  mcqOptionsPerProblem: [
    // Problem 1 Options
    {
      identifyGiven: [
        "\\text{Map and scale given}",
        "\\text{Real and scale given}",
        "\\text{Map and real given}"
      ],
      convertUnits: [
        "\\text{8 cm stays 8 cm}",
        "\\text{8 cm = 800 m}",
        "\\text{8 cm = 0.08 km}"
      ],
      applyFormula: [
        "\\text{400,000}",
        "\\text{40,000}",
        "\\text{200,000}"
      ],
      solveAndConvert: [
        "\\text{4 km}",
        "\\text{40 km}",
        "\\text{0.4 km}"
      ],
      finalAnswer: [
        "\\text{4 km}",
        "\\text{40 km}",
        "\\text{0.4 km}"
      ]
    },
    // Problem 2 Options
    {
      identifyGiven: [
        "\\text{Real and scale given}",
        "\\text{Map and scale given}",
        "\\text{Map and real given}"
      ],
      convertUnits: [
        "\\text{1,200,000 cm}",
        "\\text{120,000 cm}",
        "\\text{12,000 cm}"
      ],
      applyFormula: [
        "\\text{6}",
        "\\text{60}",
        "\\text{0.6}"
      ],
      solveAndConvert: [
        "\\text{6 cm}",
        "\\text{60 cm}",
        "\\text{0.6 cm}"
      ],
      finalAnswer: [
        "\\text{6 cm}",
        "\\text{60 cm}",
        "\\text{0.6 cm}"
      ]
    },
    // Problem 3 Options
    {
      identifyGiven: [
        "\\text{Map and real given}",
        "\\text{Map and scale given}",
        "\\text{Real and scale given}"
      ],
      convertUnits: [
        "\\text{1,500,000 cm}",
        "\\text{150,000 cm}",
        "\\text{15,000 cm}"
      ],
      applyFormula: [
        "\\text{1:500,000}",
        "\\text{1:300,000}",
        "\\text{1:1,500,000}"
      ],
      solveAndConvert: [
        "\\text{1:500,000}",
        "\\text{1:300,000}",
        "\\text{1:1,500,000}"
      ],
      finalAnswer: [
        "\\text{1:500,000}",
        "\\text{1:300,000}",
        "\\text{1:1,500,000}"
      ]
    }
  ]
};


export default function ScaleArea() {
  return (
    <>
    <MultiStepInteractiveComponent toolData={scaleMeasurementsData} />
    </>
  );
}

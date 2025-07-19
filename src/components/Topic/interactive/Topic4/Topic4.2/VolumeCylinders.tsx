import { QuizData, SolidShapesQuizTemplate } from "./SolidShapesQuizTemplate";

export const cylindersData: QuizData = {
  title: "Volume of Cylinders Quiz",
  subtitle: "Test your knowledge with Zimbabwean examples",
  questions: [
    {
      type: 'findVolume',
      shape: 'cylinder',
      question: "A cylindrical water tank has a radius of 2 m and height of 3 m. What is its volume? (Use π = 3.14)",
      given: { radius: 2, height: 3 },
      answer: 37.68,
      unit: 'm³',
      hint: "Use the formula: Volume = π × radius² × height",
      formula: "V = \\pi r^2 h",
      context: "This size water tank is commonly used in Zimbabwean households for water storage."
    },
    {
      type: 'findHeight',
      shape: 'cylinder',
      question: "A cylindrical silo has a volume of 1570 m³ and radius of 10 m. What is its height? (Use π = 3.14)",
      given: { volume: 1570, radius: 10 },
      answer: 5,
      unit: 'm',
      hint: "Rearrange the formula: Height = Volume ÷ (π × radius²)",
      formula: "h = \\frac{V}{\\pi r^2}",
      context: "Grain silos like this are used to store maize and other crops in Zimbabwe."
    },
    {
      type: 'findRadius',
      shape: 'cylinder',
      question: "A cylindrical fuel tank has a volume of 628 L and height of 2 m. What is its radius? (Use π = 3.14, 1 m³ = 1000 L)",
      given: { volume: 0.628, height: 2 }, // Converted 628L to 0.628m³
      answer: 0.316,
      unit: 'm',
      hint: "Rearrange the formula: radius = √(Volume ÷ (π × height))",
      formula: "r = \\sqrt{\\frac{V}{\\pi h}}",
      context: "Small fuel tanks like this are used for diesel generators in rural Zimbabwe."
    },
    {
      type: 'findVolume',
      shape: 'cylinder',
      question: "A cylindrical pipe has a diameter of 20 cm and length of 5 m. What is its volume? (Use π = 3.14)",
      given: { radius: 10, height: 500 }, // Converted diameter to radius and meters to cm
      answer: 157000,
      unit: 'cm³',
      hint: "Use the standard cylinder volume formula with given dimensions",
      formula: "V = \\pi r^2 h",
      context: "This pipe size is used for water supply systems in Zimbabwean urban areas."
    },
    {
      type: 'findHeight',
      shape: 'cylinder',
      question: "A cylindrical cooking oil container has a volume of 2827 cm³ and radius of 9 cm. What is its height? (Use π = 3.14)",
      given: { volume: 2827, radius: 9 },
      answer: 11.1,
      unit: 'cm',
      hint: "Rearrange the formula: Height = Volume ÷ (π × radius²)",
      formula: "h = \\frac{V}{\\pi r^2}",
      context: "This is a typical size for cooking oil containers sold in Zimbabwean markets."
    },
    {
      type: 'findVolume',
      shape: 'cylinder',
      question: "A cylindrical borehole has a radius of 0.15 m and depth of 50 m. What volume of water can it hold? (Use π = 3.14)",
      given: { radius: 0.15, height: 50 },
      answer: 3.535,
      unit: 'm³',
      hint: "Use the standard cylinder volume formula with given dimensions",
      formula: "V = \\pi r^2 h",
      context: "Boreholes are essential water sources in rural Zimbabwe, providing clean water to communities."
    },
    {
      type: 'conversion',
      shape: 'cylinder',
      question: "A cylindrical tank has a volume of 15,700 cm³. How many liters can it hold?",
      given: { volume: 15700 },
      answer: 15.7,
      unit: 'L',
      hint: "Remember the conversion: 1000 cm³ = 1 liter",
      formula: "1\\,L = 1000\\,cm^3",
      context: "Converting between cubic centimeters and liters is important for practical applications."
    },
    {
      type: 'findRadius',
      shape: 'cylinder',
      question: "A cylindrical concrete column has a volume of 1.256 m³ and height of 4 m. What is its radius? (Use π = 3.14)",
      given: { volume: 1.256, height: 4 },
      answer: 0.316,
      unit: 'm',
      hint: "Rearrange the formula: radius = √(Volume ÷ (π × height))",
      formula: "r = \\sqrt{\\frac{V}{\\pi h}}",
      context: "Concrete columns like this are used in construction of buildings and bridges in Zimbabwe."
    }
  ]
};

export function VolumeCylinders() {
  return <SolidShapesQuizTemplate quizData={cylindersData} />;
}
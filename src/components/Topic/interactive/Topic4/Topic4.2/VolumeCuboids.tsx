import { QuizData, SolidShapesQuizTemplate } from "./SolidShapesQuizTemplate";
export const cuboidsData:QuizData = {
  title: "Volume of Cuboids Quiz",
  subtitle: "Test your knowledge with Zimbabwean examples",
  questions: [
    {
      type: 'findVolume',
      shape: 'cuboid',
      question: "A classroom storage box has dimensions: length = 50 cm, width = 30 cm, height = 25 cm. What is its volume?",
      given: { length: 50, width: 30, height: 25 },
      answer: 37500,
      unit: 'cm³',
      hint: "Multiply the three dimensions together: length × width × height",
      formula: "V = l \\times w \\times h",
      context: "This is a typical storage box used in Zimbabwean schools for keeping textbooks and supplies."
    },
    {
      type: 'findHeight',
      shape: 'cuboid',
      question: "A brick has a volume of 1540 cm³. If its length is 22 cm and width is 10 cm, what is its height?",
      given: { volume: 1540, length: 22, width: 10 },
      answer: 7,
      unit: 'cm',
      hint: "Rearrange the volume formula to solve for height: height = volume ÷ (length × width)",
      formula: "h = \\frac{V}{l \\times w}",
      context: "Standard building bricks used in Zimbabwe have these proportions."
    },
    {
      type: 'findWidth',
      shape: 'cuboid',
      question: "A maize storage container has a volume of 576,000 cm³. If its length is 120 cm and height is 60 cm, what is its width?",
      given: { volume: 576000, length: 120, height: 60 },
      answer: 80,
      unit: 'cm',
      hint: "Rearrange the volume formula to solve for width: width = volume ÷ (length × height)",
      formula: "w = \\frac{V}{l \\times h}",
      context: "This container can hold about 576 liters of maize grain."
    },
    {
      type: 'findLength',
      shape: 'cuboid',
      question: "A small room has a volume of 29.4 m³. If its width is 3 m and height is 2.8 m, what is its length?",
      given: { volume: 29.4, width: 3, height: 2.8 },
      answer: 3.5,
      unit: 'm',
      hint: "Rearrange the volume formula to solve for length: length = volume ÷ (width × height)",
      formula: "l = \\frac{V}{w \\times h}",
      context: "This is a typical bedroom size in urban Zimbabwe."
    },
    {
      type: 'findVolume',
      shape: 'cube',
      question: "What is the volume of a cube with sides of 15 cm each?",
      given: { side: 15 },
      answer: 3375,
      unit: 'cm³',
      hint: "For a cube, all sides are equal. Volume = side length cubed",
      formula: "V = s^3",
      context: "Cubes are special cuboids where all dimensions are equal."
    },
    {
      type: 'conversion',
      shape: 'cuboid',
      question: "A water tank has a volume of 2,500,000 cm³. How many liters can it hold?",
      given: { volume: 2500000 },
      answer: 2500,
      unit: 'L',
      hint: "Remember the conversion: 1 liter = 1000 cm³",
      formula: "1\\,L = 1000\\,cm^3",
      context: "Converting between cubic centimeters and liters is important for practical applications."
    },
    {
      type: 'findHeight',
      shape: 'cuboid',
      question: "A textbook box needs to have a volume of 12,000 cm³. If the length is 40 cm and width is 25 cm, what should be the height?",
      given: { volume: 12000, length: 40, width: 25 },
      answer: 12,
      unit: 'cm',
      hint: "Rearrange the volume formula to solve for height",
      formula: "h = \\frac{V}{l \\times w}",
      context: "This helps determine the right box size for storing textbooks efficiently."
    },
    {
      type: 'findVolume',
      shape: 'cuboid',
      question: "A concrete block has dimensions 20 cm × 15 cm × 10 cm. What is its volume?",
      given: { length: 20, width: 15, height: 10 },
      answer: 3000,
      unit: 'cm³',
      hint: "Multiply the three dimensions together",
      formula: "V = l \\times w \\times h",
      context: "Concrete blocks are commonly used in construction across Zimbabwe."
    }
  ]
};

// For cuboids quiz
export default function VolumeCuboids() {
  return <SolidShapesQuizTemplate quizData={cuboidsData} />;
}
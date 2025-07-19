import { QuizData, SolidShapesQuizTemplate } from "./SolidShapesQuizTemplate";

export const surfaceAreaData:QuizData = {
  title: "Surface Area of Solid Shapes",
  subtitle: "Practice calculating surface areas of various 3D shapes",
  questions: [
    {
      type: 'findSurfaceArea',
      shape: 'cube',
      question: "A cube has side length 5 cm. What is its total surface area?",
      given: { side: 5 },
      answer: 150,
      unit: 'cm²',
      hint: "For a cube, surface area = 6 × side²",
      formula: "SA = 6s^2",
      context: "Cubes are common in packaging and building blocks."
    },
    {
      type: 'findSurfaceArea',
      shape: 'cuboid',
      question: "A rectangular box has dimensions 8 cm × 5 cm × 3 cm. Calculate its surface area.",
      given: { length: 8, width: 5, height: 3 },
      answer: 158,
      unit: 'cm²',
      hint: "Surface area = 2(lw + lh + wh)",
      formula: "SA = 2(lw + lh + wh)",
      context: "This is a typical shoebox size."
    },
    {
      type: 'findSurfaceArea',
      shape: 'cylinder',
      question: "A can has radius 4 cm and height 10 cm. Find its total surface area.",
      given: { radius: 4, height: 10 },
      answer: 351.68,
      unit: 'cm²',
      hint: "Surface area = 2πr² + 2πrh (use π ≈ 3.14)",
      formula: "SA = 2\\pi r^2 + 2\\pi r h",
      context: "Cylindrical cans are common for food packaging."
    },
    {
      type: 'findRadius',
      shape: 'sphere',
      question: "A sphere has surface area 314 cm². Find its radius (use π = 3.14).",
      given: { surfaceArea: 314 },
      answer: 5,
      unit: 'cm',
      hint: "Rearrange the formula: r = √(SA / 4π)",
      formula: "SA = 4\\pi r^2",
      context: "Basketballs and other sports balls are spheres."
    },
    {
      type: 'findSurfaceArea',
      shape: 'cone',
      question: "An ice cream cone has radius 3 cm and slant height 10 cm. Calculate its surface area.",
      given: { radius: 3, slantHeight: 10 },
      answer: 122.46,
      unit: 'cm²',
      hint: "Surface area = πr² + πrl (use π ≈ 3.14)",
      formula: "SA = \\pi r^2 + \\pi r l",
      context: "Conical shapes are used for traffic cones and party hats."
    },
    {
      type: 'findSurfaceArea',
      shape: 'composite',
      question: "A silo consists of a cylinder (height 10m, radius 2m) with a hemispherical roof. Find the total surface area.",
      given: { radius: 2, height: 10 },
      answer: 150.72,
      unit: 'm²',
      hint: "Calculate cylinder surface (without top) + hemisphere surface",
      context: "Silos are used for storing grain on farms."
    }
  ]
};

export default function SurfaceAreas() {
  return <SolidShapesQuizTemplate quizData={surfaceAreaData} />;
}
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Scale,
  ShoppingCart,
  Baby,
  Apple,
  Wheat,
  ArrowDownUp,
} from "lucide-react";
// import MeasurementUnits from "./MeasurementUnitsTemplate"; // Ensure the path is correct
import MeasurementUnitsTemplate from "./MeasurementUnitsTemplate";

const massUnitsData = {
  title: "Mass",
  icon: <Scale className="w-10 h-10 mx-auto mb-3 text-yellow-400" />,
  colorScheme: {
    primary: "bg-[#7A7A73]",   // Blue-gray
    secondary: "bg-[#57564F]", // Gray-600
    tertiary: "bg-[#DDDAD0]",  // Purple-400
  },
  scenarios: [
    {
      id: "mealie-meal",
      title: "Mealie Meal",
      icon: <Wheat className="w-6 h-6 text-green-600" />,
      description: "A 10kg bag of mealie meal (staple food in Zimbabwe)",
      question: "How many grams is this bag?",
      calculation: "10 kg × 1000 g/kg = 10,000 g",
      answer: 10000,
      unit: "grams",
      context: "Mealie meal is used to make sadza, the staple food",
      difficulty: "easy",
      // Add options for MCQ
      options: [9000, 9500, 10000, 10500],
    },
    {
      id: "sugar-beans",
      title: "Sugar Beans",
      icon: <Apple className="w-6 h-6 text-red-600" />,
      description: "A 2kg packet of sugar beans costs about $3 USD",
      question: "What is the mass in grams?",
      calculation: "2 kg × 1000 g/kg = 2,000 g",
      answer: 2000,
      unit: "grams",
      context: "Sugar beans are a popular protein source",
      difficulty: "easy",
      options: [1500, 1800, 2000, 2500],
    },
    {
      id: "newborn-baby",
      title: "Newborn Baby",
      icon: <Baby className="w-6 h-6 text-pink-600" />,
      description: "A healthy newborn baby weighs 3.2 kg",
      question: "What is this weight in grams?",
      calculation: "3.2 kg × 1000 g/kg = 3,200 g",
      answer: 3200,
      unit: "grams",
      context: "Normal birth weight ranges from 2.5-4.0 kg",
      difficulty: "easy",
      options: [3000, 3100, 3200, 3300],
    },
    {
      id: "cooking-oil",
      title: "Cooking Oil",
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      description: "A 750ml bottle of cooking oil weighs about 0.75 kg",
      question: "What is this mass in grams?",
      calculation: "0.75 kg × 1000 g/kg = 750 g",
      answer: 750,
      unit: "grams",
      context: "Cooking oil is essential for traditional cooking",
      difficulty: "medium",
      options: [650, 700, 750, 800],
    },
  ],
  systems: {
    metric: {
      name: "Metric",
      units: {
        mg: {
          symbol: "mg",
          name: "Milligram",
          toBase: (value: number) => value * 0.001, // to grams
          fromBase: (value: number) => value / 0.001,
        },
        g: {
          symbol: "g", // Fixed: was missing
          name: "Gram",
          toBase: (value: any) => value, // Note: This should ideally be (value: number) => value
          fromBase: (value: any) => value, // Note: This should ideally be (value: number) => value
        },
        kg: {
          symbol: "kg",
          name: "Kilogram",
          toBase: (value: number) => value * 1000,
          fromBase: (value: number) => value / 1000,
        },
        tonne: {
          symbol: "t",
          name: "Tonne",
          toBase: (value: number) => value * 1000000,
          fromBase: (value: number) => value / 1000000,
        },
      },
    },
    imperial: {
      name: "Imperial",
      units: {
        // Fixed: Changed 'signature' to 'symbol'
        oz: {
          symbol: "oz", // This was 'signature'
          name: "Ounce",
          toBase: (value: number) => value * 28.3495, // to grams
          fromBase: (value: number) => value / 28.3495,
        },
        lb: {
          symbol: "lb",
          name: "Pound",
          toBase: (value: number) => value * 453.592,
          fromBase: (value: number) => value / 453.592,
        },
        st: {
          symbol: "st",
          name: "Stone",
          toBase: (value: number) => value * 6350.29,
          fromBase: (value: number) => value / 6350.29,
        },
        ton: {
          symbol: "ton",
          name: "Ton",
          toBase: (value: number) => value * 907185,
          fromBase: (value: number) => value / 907185,
        },
      },
    },
  },
  quickReferences: [
    "1 kg = 1000 g",
    "1 g = 1000 mg",
    "1 tonne = 1000 kg",
    "1 pound = 16 ounces ≈ 453.6 g",
    "1 stone = 14 pounds ≈ 6.35 kg",
  ],
  swapIcon: <ArrowDownUp className="w-5 h-5" />, // Make sure this prop is accepted by your template
};

// Fix the component return statement
export default function MassUnits() {
  return <MeasurementUnitsTemplate {...massUnitsData} />;
  // Removed the erroneous `return <> ... </>` wrapper
}